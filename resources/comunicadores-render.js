// render comunicadores tab (usa window.comunicadores loaded from resources/comunicadores.js)
function renderComunicadoresForFeature(props) {
  var tabCom = document.getElementById("tabContentCom");

  // Configuración (campo imagen y nombre)
  var imageField = "imagen";
  var imageSeparatorPattern = /[;]+/;
  var nameField = "MPIO_CNMBR";

  try {
    tabCom.innerHTML = "";
    var muniName = "";
    if (props && props.hasOwnProperty(nameField))
      muniName = String(props[nameField]).trim();
    else {
      for (var k in props) {
        if (!props.hasOwnProperty(k)) continue;
        if (k.toLowerCase() === nameField.toLowerCase()) {
          muniName = props[k];
          break;
        }
      }
    }

    if (!muniName) {
      tabCom.innerHTML =
        "<div>No se encontró el nombre del municipio en los atributos.</div>";
      return;
    }

    // buscar clave case-insensitive
    var keyFound = null;
    if (window.comunicadores) {
      for (var key in window.comunicadores) {
        if (!window.comunicadores.hasOwnProperty(key)) continue;
        if (String(key).toLowerCase() === String(muniName).toLowerCase()) {
          keyFound = key;
          break;
        }
      }
    }

    if (!keyFound) {
      tabCom.innerHTML =
        "<div>No se registran comunicadores para " +
        escapeHtml(muniName) +
        ".</div>";
      return;
    }

    var list = window.comunicadores[keyFound];
    if (!list || !list.length) {
      tabCom.innerHTML =
        "<div>No se registran comunicadores para " +
        escapeHtml(muniName) +
        ".</div>";
      return;
    }

    var grid = document.createElement("div");
    grid.className = "com-grid";
    for (var i = 0; i < list.length; i++) {
      var c = list[i];
      var card = document.createElement("div");
      card.className = "com-card";

      var logoWrap = document.createElement("div");
      logoWrap.className = "com-logo-wrap";
      var img = document.createElement("img");
      img.src = c.logo || "img/comunicadores/default.png";
      img.alt = c.titulo || "logo";
      logoWrap.appendChild(img);
      card.appendChild(logoWrap);

      var h = document.createElement("div");
      var titleHtml =
        '<strong style="font-size:15px;">' +
        escapeHtml(c.titulo || "") +
        '</strong><div style="color:#666;font-size:13px;margin-top:6px;">' +
        escapeHtml(c.slogan || "") +
        "</div>";
      h.innerHTML = titleHtml;
      card.appendChild(h);

      if (c.info) {
        var infoNode = document.createElement("div");
        infoNode.style.fontSize = "13px";
        infoNode.style.color = "#444";
        infoNode.style.marginTop = "6px";
        infoNode.innerHTML = escapeHtml(c.info);
        card.appendChild(infoNode);
      }

      if (c.web) {
        var siteBtn = document.createElement("a");
        siteBtn.href = c.web;
        siteBtn.title = c.web;
        siteBtn.target = "_blank";
        siteBtn.rel = "noopener noreferrer";
        siteBtn.style.display = "inline-block";
        siteBtn.style.margin = "5px";
        siteBtn.style.padding = "6px";
        siteBtn.style.background = "#1976d2";
        siteBtn.style.color = "#fff";
        siteBtn.style.borderRadius = "6px";
        siteBtn.style.textDecoration = "none";
        siteBtn.innerText = "🌐 Sitio web";
        card.appendChild(siteBtn);
      }

      if (c.email) {
        var siteBtn = document.createElement("a");
        siteBtn.href = 'mailto:' + c.email;
        siteBtn.title = c.email;
        siteBtn.target = "_blank";
        siteBtn.rel = "noopener noreferrer";
        siteBtn.style.display = "inline-block";
        siteBtn.style.margin = "5px";
        siteBtn.style.padding = "6px";
        siteBtn.style.background = "#1976d2";
        siteBtn.style.color = "#fff";
        siteBtn.style.borderRadius = "6px";
        siteBtn.style.textDecoration = "none";
        siteBtn.innerText = "💌 Email";
        card.appendChild(siteBtn);
      }

      if (c.producciones && c.producciones.length) {
        var trabajosWrap = document.createElement("div");
        trabajosWrap.style.marginTop = "8px";
        for (var t = 0; t < c.producciones.length; t++) {
          var a = document.createElement("a");
          a.href = c.producciones[t].url;
          a.target = "_blank";
          a.rel = "noopener noreferrer";
          a.style.display = "block";
          a.style.color = "#1976d2";
          a.style.textDecoration = "none";
          a.style.marginTop = "6px";
          a.innerText =
            t + 1 + ". " + (c.producciones[t].titulo || "Ver producción");
          trabajosWrap.appendChild(a);
        }
        card.appendChild(trabajosWrap);
      }

      grid.appendChild(card);
    }

    tabCom.appendChild(grid);
  } catch (e) {
    console.warn("renderComunicadoresForFeature error", e);
    tabCom.innerHTML = "<div>Error mostrando comunicadores.</div>";
  }
}

// helper kecil
function escapeHtml(s) {
  if (!s && s !== 0) return "";
  return String(s).replace(/[&<>"'`]/g, function (m) {
    return {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
      "`": "&#96;",
    }[m];
  });
}
