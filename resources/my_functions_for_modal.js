/*
  Visual assets mapping and modal fallback logic.
  - Si el feature ya trae imágenes en atributos, esos se usan.
  - Si no, se intenta mapear por nombre del municipio (campo común: 'nombre', 'municipio', 'NAME', 'NOMBRE', 'name').
  - Si tampoco hay match, se usa imagen por defecto 'img/default.png' (crea si quieres).
*/

(function(){

  // --------------- CONFIG: Visual assets por municipio ---------------
  var visualAssets = {
    "agustín codazzi": [
      "img/agustin_codazzi_1.png",
      "img/agustin_codazzi_2.png",
      "img/agustin_codazzi_3.png"
    ],
    "agustin codazzi": [ // alias sin tilde
      "img/agustin_codazzi_1.png",
      "img/agustin_codazzi_2.png",
      "img/agustin_codazzi_3.png"
    ],
    "becerril": [
      "img/becerril_1.png",
      "img/becerril_2.png",
      "img/becerril_3.png"
    ],
    "la jagua de ibirico": [
      "img/jagua_ibirico_1.png",
      "img/jagua_ibirico_2.png",
      "img/jagua_ibirico_3.png"
    ],
    "el paso": [
      "img/el_paso_1.png",
      "img/el_paso_2.png",
      "img/el_paso_3.png"
    ],
    "chiriguaná": [
      "img/chiriguana_1.png",
      "img/chiriguana_2.png",
      "img/chiriguana_3.png",
      "img/chiriguana_4.png"
    ],
    "chiriguana": [ // alias sin tilde
      "img/chiriguana_1.png",
      "img/chiriguana_2.png",
      "img/chiriguana_3.png",
      "img/chiriguana_4.png"
    ],
    "chimichagua": [
      "img/chimichagua_1.png",
      "img/chimichagua_2.png",
      "img/chimichagua_3.png",
      "img/chimichagua_4.png"
    ],
    "el banco": [
      "img/el_banco_1.png",
      "img/el_banco_2.png",
      "img/el_banco_3.png",
      "img/el_banco_4.png"
    ],
    "el banco – magdalena": [
      "img/el_banco_1.png",
      "img/el_banco_2.png",
      "img/el_banco_3.png",
      "img/el_banco_4.png"
    ],
    "el banco, magdalena": [
      "img/el_banco_1.png",
      "img/el_banco_2.png",
      "img/el_banco_3.png",
      "img/el_banco_4.png"
    ]
  };

  // iconos SVG para las secciones (inline)
  var icons = {
    economy: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="11" width="5" height="10" rx="1" fill="#1976d2"/><rect x="10" y="6" width="5" height="15" rx="1" fill="#1976d2"/><rect x="17" y="2" width="5" height="19" rx="1" fill="#1976d2"/></svg>',
    population: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 12c2.761 0 5-2.686 5-6s-2.239-6-5-6-5 2.686-5 6 2.239 6 5 6z" fill="#4caf50"/><path d="M3 20c0-2.761 4.477-5 9-5s9 2.239 9 5v2H3v-2z" fill="#4caf50"/></svg>',
    environment: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2s5 3 5 7-3 7-5 9c-2-2-5-5-5-9s5-7 5-7z" fill="#2e7d32"/></svg>',
    culture: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2L2 7l10 5 10-5-10-5z" fill="#ffb300"/><path d="M2 17l10 5 10-5" fill="#ffb300"/></svg>'
  };

  // helper para bajar a minúsculas y limpiar
  function normalizeName(name) {
    if (!name) return '';
    return String(name).toLowerCase().trim();
  }

  // Dado properties construye lista de imagenes desde los atributos (si las hay)
  function extractImagesFromProperties(props) {
    var arr = [];
    if (!props) return arr;
    for (var k in props) {
      if (!props.hasOwnProperty(k)) continue;
      var v = props[k];
      if (!v) continue;
      var s = String(v);
      // split por ; o , si tiene varias rutas en un campo
      var parts = s.split(/[,;]+/).map(function(x){ return x.trim(); });
      for (var i=0;i<parts.length;i++) {
        var p = parts[i];
        if (!p) continue;
        // candidato relativo (img/...) o url
        if (p.match(/\.(jpg|jpeg|png|webp|gif|svg)$/i) || p.match(/^data:image\//i) || p.match(/^https?:\/\//i)) {
          arr.push(p);
        }
      }
    }
    return arr;
  }

  // función pública: obtiene lista de imágenes para un feature (atributo -> fallback visualAssets)
  window.getImagesForFeature = function(props) {
    var imgs = extractImagesFromProperties(props);
    if (imgs.length > 0) return imgs;

    // intento por nombre del municipio en varios campos comunes
    var nameFields = ['nombre','municipio','name','NAME','NOMBRE','mun_name','municipio_name','MPIO_CNMBR'];
    var foundName = null;
    for (var i=0;i<nameFields.length;i++) {
      var f = nameFields[i];
      if (props && props[f]) { foundName = props[f]; break; }
      // buscar case-insensitive
      for (var k in props) {
        if (k.toLowerCase() === f.toLowerCase()) {
          foundName = props[k];
          break;
        }
      }
      if (foundName) break;
    }
    var key = normalizeName(foundName || '');

    if (visualAssets[key]) return visualAssets[key].slice(); // copia
    // fallback: búsqueda por subcadena
    for (var kk in visualAssets) {
      if (kk && key.indexOf(kk) !== -1) return visualAssets[kk].slice();
    }
    // Si nada, devuelve array vacío (puedes crear img/default.png si quieres)
    return ['img/default.png','img/default.png','img/default.png'];
  };

  // función util para inyectar thumbs en la modal - se asume estructura de DOM como en tu modal
  window.populateGalleryUI = function(imageList) {
    var modalImage = document.getElementById('modalImage');
    var galleryPrev = document.getElementById('galleryPrev');
    var galleryNext = document.getElementById('galleryNext');

    // contador display
    var existingCounter = document.querySelector('.modal-counter');
    if (!existingCounter && document.getElementById('modalGallery')) {
      var counter = document.createElement('div');
      counter.className = 'modal-counter';
      counter.id = 'modalCounter';
      document.getElementById('modalGallery').appendChild(counter);
    }

    // thumbs row
    var thumbRow = document.getElementById('modalThumbRow');
    if (!thumbRow) {
      thumbRow = document.createElement('div');
      thumbRow.id = 'modalThumbRow';
      thumbRow.className = 'modal-thumb-row';
      var gallery = document.getElementById('modalGallery');
      if (gallery) gallery.appendChild(thumbRow);
    }
    // limpiar thumbs
    thumbRow.innerHTML = '';

    if (!imageList || imageList.length === 0) {
      modalImage.style.display = 'none';
      // opcional: mostrar placeholder
      var counter = document.getElementById('modalCounter');
      if (counter) counter.textContent = '0 / 0';
      return;
    }

    modalImage.style.display = 'block';
    modalImage.src = imageList[0];
    // generar thumbs
    for (var i=0;i<imageList.length;i++) {
      (function(idx){
        var img = document.createElement('img');
        img.src = imageList[idx];
        if (idx === 0) img.classList.add('active');
        img.addEventListener('click', function(){ document.getElementById('modalImage').src = imageList[idx]; // activar thumb
          var collection = thumbRow.querySelectorAll('img'); collection.forEach(function(x){ x.classList.remove('active'); }); img.classList.add('active');
          // actualizar contador
          var cnt = document.getElementById('modalCounter'); if (cnt) cnt.textContent = (idx+1) + ' / ' + imageList.length;
        });
        thumbRow.appendChild(img);
      })(i);
    }
    var cnt = document.getElementById('modalCounter'); if (cnt) cnt.textContent = '1 / ' + imageList.length;

    // prev/next visibility
    galleryPrev.style.display = imageList.length>1 ? 'inline-flex' : 'none';
    galleryNext.style.display = imageList.length>1 ? 'inline-flex' : 'none';

    // actual index handlers
    var currentIndex = 0;
    galleryPrev.onclick = function(){
      currentIndex = (currentIndex - 1 + imageList.length) % imageList.length;
      modalImage.src = imageList[currentIndex];
      var imgs = thumbRow.querySelectorAll('img'); imgs.forEach(function(x){ x.classList.remove('active'); }); if (imgs[currentIndex]) imgs[currentIndex].classList.add('active');
      var cnt = document.getElementById('modalCounter'); if (cnt) cnt.textContent = (currentIndex+1) + ' / ' + imageList.length;
    };
    galleryNext.onclick = function(){
      currentIndex = (currentIndex + 1) % imageList.length;
      modalImage.src = imageList[currentIndex];
      var imgs = thumbRow.querySelectorAll('img'); imgs.forEach(function(x){ x.classList.remove('active'); }); if (imgs[currentIndex]) imgs[currentIndex].classList.add('active');
      var cnt = document.getElementById('modalCounter'); if (cnt) cnt.textContent = (currentIndex+1) + ' / ' + imageList.length;
    };
  };

  // -------------- Integración con modal existente --------------
  // Reemplaza/llama a esta parte desde tu función que muestra el modal:
  // En tu showFeatureInModal(...) al final, llama:
  //   var imgs = window.getImagesForFeature(props);
  //   window.populateGalleryUI(imgs);

  // Para facilitar, reexpongo una función que combina todo:
  window.injectVisualsIntoModal = function(props) {
    var imgs = window.getImagesForFeature(props);
    populateGalleryUI(imgs);

    // añadir iconos y secciones (Economía / Población / Medio ambiente / Cultura)
    var infoNode = document.getElementById('tabContentInfo');
    if (!infoNode) return;
    // limpia y vuelve a renderizar las secciones clave (puedes ajustar qué campos se muestran)
    var html = '';

    html += '<h4 style="width: 100%; text-align: center; text-decoration: underline;">' + props.MPIO_CNMBR + '</h4>';

    // icon + key/value: tratamos de mostrar "Descripción", "Población", "Economía", "Medio ambiente", "Cultura"
    // buscaremos esos campos en props o usaremos textos fallback (si quieres los textos adminístate en la variable textData)
    var desc = props.descripcion || props.Descripcion || props.descripcion_muni || props.description || '';
    var pobl = props.poblacion || props.Población || props.poblacion_2020 || props.population || '';
    var econ = props.economia || props.Economía || props.economy || '';
    var medio = props.medio_ambiente || props.ambiente || props.Medio || '';
    var cult = props.cultura || props.Cultura || props.cultural || '';

    html += '<div style="margin-bottom:10px;"><strong>Descripción</strong><div style="color:#444;margin-top:6px;">' + (desc || '') + '</div></div>';
    if (pobl) html += '<div style="margin-bottom:8px;"><span style="margin-right:6px;">'+icons.population+'</span><strong>Población</strong><div style="color:#444;margin-top:4px;">' + pobl + '</div></div>';
    if (econ) html += '<div style="margin-bottom:8px;"><span style="margin-right:6px;">'+icons.economy+'</span><strong>Economía</strong><div style="color:#444;margin-top:4px;">' + econ + '</div></div>';
    if (medio) html += '<div style="margin-bottom:8px;"><span style="margin-right:6px;">'+icons.environment+'</span><strong>Medio ambiente</strong><div style="color:#444;margin-top:4px;">' + medio + '</div></div>';
    if (cult) html += '<div style="margin-bottom:8px;"><span style="margin-right:6px;">'+icons.culture+'</span><strong>Cultura</strong><div style="color:#444;margin-top:4px;">' + cult + '</div></div>';

    // Si no hay campos, deja el contenido preparado para tus textos default (puedes ampliar)
    if (!desc && !pobl && !econ && !medio && !cult) {
      html += '<div style="color:#444;">No hay atributos temáticos en este feature. Se usará el paquete visual para la galería. Puedes añadir campos como <em>descripcion</em>, <em>poblacion</em>, <em>economia</em>, <em>medio_ambiente</em>, <em>cultura</em> al atributo del municipio para poblar esta vista.</div>';
    }

    infoNode.innerHTML = html;
  };

})();