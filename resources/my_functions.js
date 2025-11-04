(function () {
  // --- Config ---
  const imageFieldKeywords = [
    "foto",
    "foto_url",
    "imagen",
    "image",
    "img",
    "photo",
    "picture",
    "url_img",
    "photo_url",
    "imagen_url",
    "image_url",
  ];
  const galleryImageExtensions = [
    ".png",
    ".jpg",
    ".jpeg",
    ".gif",
    ".webp",
    ".svg",
  ];

  // store features in load order
  const featureIndex = []; // {feature: ol.Feature, layer: ol.layer.Vector}

  // helper: test if a value looks like an image URL
  function looksLikeImageUrl(val) {
    if (!val || typeof val !== "string") return false;
    const low = val.toLowerCase().trim();
    if (
      low.startsWith("http://") ||
      low.startsWith("https://") ||
      low.startsWith("data:image/")
    ) {
      return (
        galleryImageExtensions.some((ext) => low.indexOf(ext) !== -1) ||
        low.startsWith("data:image/")
      );
    }
    return galleryImageExtensions.some((ext) => low.endsWith(ext));
  }

  // --- Build feature index after map and layers load ---
  // qgis2web defines `map` variable. Wait until it's present.
  function whenMapReady(cb) {
    if (typeof map !== "undefined" && map !== null) {
      cb();
    } else {
      setTimeout(() => whenMapReady(cb), 200);
    }
  }

  whenMapReady(() => {
    try {
      // iterate layers and collect vector features in the order they appear
      map.getLayers().forEach(function (layer) {
        try {
          const source = layer.getSource && layer.getSource();
          if (!source) return;
          // only vector sources with getFeatures
          if (typeof source.getFeatures === "function") {
            const feats = source.getFeatures();
            for (let i = 0; i < feats.length; i++) {
              // push an object linking feature and layer
              featureIndex.push({ feature: feats[i], layer: layer });
            }
          }
        } catch (e) {
          // ignore non-vector layers
        }
      });

      // debug: console.log('featureIndex length', featureIndex.length);
    } catch (e) {
      console.warn("Error indexing features:", e);
    }
  });

  // --- modal helpers ---
  const modal = document.getElementById("infomodal");
  const modalImage = document.getElementById("modalImage");
  const modalGallery = document.getElementById("modalGallery");
  const galleryPrev = document.getElementById("galleryPrev");
  const galleryNext = document.getElementById("galleryNext");
  const modalTitle = document.getElementById("modalTitle");
  const tabInfo = document.getElementById("tabContentInfo");
    var tabCom = document.getElementById('tabContentCom');
    var tabGallery = document.getElementById('tabContentGallery');
  const closeModalBtn = document.getElementById("closeModalBtn");
  const btnPrevFeature = document.getElementById("prevFeature");
  const btnNextFeature = document.getElementById("nextFeature");
  const btnZoom = document.getElementById("zoomTo");

  let currentFeatureIndex = -1;
  let currentImageList = [];
  let currentImageIndex = 0;

  function openModalWithFeatureByIndex(idx) {
    if (idx < 0 || idx >= featureIndex.length) return;
    currentFeatureIndex = idx;
    const obj = featureIndex[idx];
    showFeatureInModal(obj.feature, obj.layer);
  }

  function showFeatureInModal(feature, layer) {
    // attempt to close any existing qgis2web popup overlay
    try {
      if (
        typeof popup !== "undefined" &&
        popup &&
        typeof popup.setPosition === "function"
      )
        popup.setPosition(undefined);
    } catch (e) {}

    const props = Object.assign({}, feature.getProperties());
    if (props.geometry) delete props.geometry;

    // Title: choose a primary field if exists (name, title, nombre)
    const titleFieldCandidates = [
      "name",
      "title",
      "nombre",
      "titulo",
      "Name",
      "NAME",
      "MPIO_CNMBR",
    ];
    let title = "";
    for (let c of titleFieldCandidates) {
      if (props[c]) {
        title = String(props[c]);
        break;
      }
    }
    if (!title) {
      // fallback: layer name or id
      title =
        layer && layer.get("title")
          ? layer.get("title")
          : feature.getId
          ? feature.getId()
          : "Detalle";
    }
    modalTitle.textContent = title + ', ' + layer.get("title");

    // build info tab (human readable)
    let infoHtml = "<div>";

    // collect image urls:
    currentImageList = [];
    currentImageIndex = 0;

    for (let key in props) {
      if (!props.hasOwnProperty(key)) continue;
      const val = props[key];

      // if val is array-like, join
      let displayVal = val;
      if (Array.isArray(val)) displayVal = val.join(", ");

      // detect images by key or value
      const keyLower = String(key).toLowerCase();
      if (
        imageFieldKeywords.some((k) => keyLower.indexOf(k) !== -1) ||
        looksLikeImageUrl(displayVal)
      ) {
        // try to extract multiple urls if comma separated
        const candidates = ("" + displayVal)
          .split(";")
          .join(",")
          .split(",")
          .map((s) => s.trim())
          .filter(Boolean);
        candidates.forEach((cand) => {
          if (looksLikeImageUrl(cand)) currentImageList.push(cand);
        });
      } else {
        infoHtml +=
          '<div class="prop-row"><span class="prop-key">' +
          escapeHtml(key) +
          ':</span><span class="prop-val">' +
          escapeHtml(String(displayVal)) +
          "</span></div>";
      }
    }
    infoHtml += "</div>";

    // if we have images, show first, otherwise hide gallery and show placeholder
    if (currentImageList.length > 0) {
      modalImage.style.display = "block";
      modalImage.src = currentImageList[0];
      modalImage.alt = title;
      galleryPrev.style.display =
        currentImageList.length > 1 ? "inline-flex" : "none";
      galleryNext.style.display =
        currentImageList.length > 1 ? "inline-flex" : "none";
    } else {
      modalImage.style.display = "none";
      modalImage.src = "";
      galleryPrev.style.display = "none";
      galleryNext.style.display = "none";
    }

    tabInfo.innerHTML = infoHtml;
    //tabRaw.innerHTML = rawHtml;

    // al final de showFeatureInModal, después de preparar props:
    try {
      renderComunicadoresForFeature(props);
    } catch(e) {
      console.warn('No se pudo renderizar comunicadores:', e);
    }


    // show modal
    modal.style.display = "flex";
    modal.setAttribute("aria-hidden", "false");
    // default tab
    setActiveTab("info");

    // props = feature.getProperties() (ya sin geometry)
    var imgs = window.getImagesForFeature(props);
    window.populateGalleryUI(imgs);

    // y luego renderizar campos temáticos en la pestaña info (si quieres que muestre atributos o textos por defecto)
    window.injectVisualsIntoModal(props);

  }

  function escapeHtml(s) {
    return (
      (s.replace &&
        s.replace(/[&<>"'`]/g, function (m) {
          return {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;",
            "`": "&#96;",
          }[m];
        })) ||
      s
    );
  }

  // navigation
  window.onload = function() {
    btnPrevFeature.addEventListener("click", function () {
      if (currentFeatureIndex > 0)
        openModalWithFeatureByIndex(currentFeatureIndex - 1);
    });
    btnNextFeature.addEventListener("click", function () {
      if (currentFeatureIndex < featureIndex.length - 1)
        openModalWithFeatureByIndex(currentFeatureIndex + 1);
    });

    // gallery nav
    galleryPrev.addEventListener("click", function () {
      if (currentImageList.length <= 1) return;
      currentImageIndex =
        (currentImageIndex - 1 + currentImageList.length) %
        currentImageList.length;
      modalImage.src = currentImageList[currentImageIndex];
    });
    galleryNext.addEventListener("click", function () {
      if (currentImageList.length <= 1) return;
      currentImageIndex = (currentImageIndex + 1) % currentImageList.length;
      modalImage.src = currentImageList[currentImageIndex];
    });
}

  // zoom to feature
  /*
  btnZoom.addEventListener("click", function () {
    if (currentFeatureIndex < 0 || currentFeatureIndex >= featureIndex.length)
      return;
    const obj = featureIndex[currentFeatureIndex];
    const feat = obj.feature;
    const geom = feat.getGeometry();
    if (!geom) return;
    // for points: center + zoom; for others: fit extent
    try {
      if (geom.getType && geom.getType() === "Point") {
        const coord = geom.getCoordinates();
        map
          .getView()
          .animate({
            center: coord,
            duration: 400,
            zoom: Math.max(map.getView().getZoom() || 12, 16),
          });
      } else {
        map
          .getView()
          .fit(geom.getExtent(), {
            duration: 400,
            padding: [80, 80, 80, 80],
            maxZoom: 16,
          });
      }
    } catch (e) {
      console.warn("Zoom to feature failed:", e);
    }
  });
  */

  // close modal
  function closeModal() {
    modal.style.display = "none";
    modal.setAttribute("aria-hidden", "true");
  }
  closeModalBtn.addEventListener("click", closeModal);
  // click outside to close
  window.addEventListener("click", function (e) {
    if (e.target === modal) closeModal();
  });
  // ESC to close
  window.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeModal();
  });

  // tabs
  document.getElementById("tabsNav").addEventListener("click", function (ev) {
    const btn = ev.target.closest("button");
    if (!btn) return;
    const tab = btn.getAttribute("data-tab");
    setActiveTab(tab);
  });
  function setActiveTab(tab) {
    document.querySelectorAll("#tabsNav button").forEach((b) => b.classList.remove("active"));
    const btn = document.querySelector(
      '#tabsNav button[data-tab="' + tab + '"]'
    );
    if (btn) btn.classList.add("active");
    document.getElementById("tabContentInfo").style.display = tab === "info" ? "block" : "none";
    document.getElementById("tabContentCom").style.display = tab === "com" ? "block" : "none";
    //document.getElementById("tabContentRaw").style.display = tab === "raw" ? "block" : "none";
  }

  // intercept map clicks: open modal instead of popup
  whenMapReady(() => {
    try {
      // Add a singleclick handler
      map.on("singleclick", function (evt) {
        // find first feature at pixel
        let found = false;
        map.forEachFeatureAtPixel(evt.pixel, function (feature, layer) {
          if (found) return; // only first
          // locate index in featureIndex (match by ol_uid or id)
          const fid =
            feature.ol_uid ||
            (feature.getId && feature.getId && feature.getId());
          // find by reference equality - faster:
          let idx = -1;
          for (let i = 0; i < featureIndex.length; i++) {
            if (featureIndex[i].feature === feature) {
              idx = i;
              break;
            }
          }
          if (idx === -1) {
            // fallback: try matching id string
            for (let i = 0; i < featureIndex.length; i++) {
              try {
                const idA =
                  featureIndex[i].feature.getId &&
                  featureIndex[i].feature.getId();
                const idB = feature.getId && feature.getId();
                if (idA && idB && String(idA) === String(idB)) {
                  idx = i;
                  break;
                }
              } catch (e) {}
            }
          }
          if (idx === -1) {
            // if still not found, add it to index end and use that
            featureIndex.push({ feature: feature, layer: layer });
            idx = featureIndex.length - 1;
          }
          openModalWithFeatureByIndex(idx);
          found = true;
          return true;
        });
        // if there's a qgis2web popup overlay, hide it (we've opened modal)
        try {
          if (
            typeof popup !== "undefined" &&
            popup &&
            typeof popup.setPosition === "function"
          )
            popup.setPosition(undefined);
        } catch (e) {}
      });
    } catch (e) {
      console.warn("Error attaching click handler:", e);
    }
  });

  // --- styles toggle logic (buttons) ---
  const styleSelector =
    "#map .ol-viewport canvas, #map .ol-viewport img, #map .ol-layer canvas, #map .ol-layer img";
  function setMapStyleNow(style) {
    const els = document.querySelectorAll(styleSelector);
    if (!els) return;
    if (style === "normal") {
      els.forEach((el) => {
        el.style.filter = "none";
      });
      setActiveStyleButton("btn-normal");
    } else if (style === "gray") {
      els.forEach((el) => {
        el.style.filter = "grayscale(100%) brightness(60%) contrast(120%)";
      });
      setActiveStyleButton("btn-gray");
    } else if (style === "night") {
      els.forEach((el) => {
        el.style.filter =
          "brightness(45%) contrast(115%) saturate(60%) hue-rotate(180deg) grayscale(20%)";
      });
      setActiveStyleButton("btn-night");
    }
  }
  // call from HTML buttons
  window.setMapStyle = function (style) {
    setMapStyleNow(style);
  };

  function setActiveStyleButton(id) {
    document
      .querySelectorAll(".map-style-buttons button")
      .forEach((b) => b.classList.remove("active"));
    const b = document.getElementById(id);
    if (b) b.classList.add("active");
  }

  // default style: night
  setMapStyleNow("night");

  // also reapply styles when new tile nodes are inserted (OpenLayers may refresh tiles)
  const observer = new MutationObserver(function (mutations) {
    // reapply current style
    // find active
    const active = document.querySelector(".map-style-buttons button.active");
    const id = active ? active.id.replace("btn-", "") : "night";
    setMapStyleNow(id);
  });
  // observe map container for added nodes
  const mapNode = document.getElementById("map");
  if (mapNode) observer.observe(mapNode, { childList: true, subtree: true });

  // expose functions for debugging if needed
  window._featureIndex = featureIndex;
  window._openModalWithIndex = openModalWithFeatureByIndex;
})();
