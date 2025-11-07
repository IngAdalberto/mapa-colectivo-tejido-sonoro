// Normalización para búsquedas con tildes
function normalizeText(str) {
    return str
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase();
}

// Resaltar coincidencias en texto
function highlightMatches(text, query) {
    if (!query) return text;
    const normalizedText = normalizeText(text);
    const normalizedQuery = normalizeText(query);

    let result = "";
    let i = 0;

    while (i < text.length) {
        if (normalizeText(text.substring(i, i + normalizedQuery.length)) === normalizedQuery) {
            result += `<mark>${text.substring(i, i + normalizedQuery.length)}</mark>`;
            i += normalizedQuery.length;
        } else {
            result += text[i];
            i++;
        }
    }
    return result;
}

// Render principal
window.renderTrabajosTab = function (feature) {
    const container = document.getElementById("tabContentTrabajos");

    container.innerHTML = "";

    const wrapper = document.createElement("div");
    wrapper.className = "playlist-container";

    // search input
    const searchBar = document.createElement("input");
    searchBar.type = "text";
    searchBar.className = "trabajo-search";
    searchBar.placeholder = "Filtrar trabajos...";

    container.appendChild(searchBar);
    container.appendChild(wrapper);

    const trabajos = window.getTrabajosForFeature(feature);

    function renderList(query = "") {
        wrapper.innerHTML = "";

        const filtered = trabajos.filter(t => {
            const haystack = normalizeText(`${t.titulo} ${t.descripcion} ${t.slogan}`);
            return haystack.includes(normalizeText(query));
        });

        filtered.forEach(t => {
            const item = document.createElement("div");
            item.className = "playlist-item";

            // dentro del loop donde construyes cada 'item' (reemplaza la plantilla previa)
const trabajoUrl = t.url || t.link || "#";

item.innerHTML = `
    <img src="${t.thumbnail}" class="cover">

    <div class="playlist-info">
        <h4>${highlightMatches ? highlightMatches(t.titulo, query) : t.titulo}</h4>
        <span class="playlist-slogan">${highlightMatches ? highlightMatches(t.slogan, query) : (t.slogan || "")}</span>
        <span class="playlist-meta">${t.tipo || ""}${t.anio ? ' • ' + t.anio : ''}</span>
        <p class="playlist-desc">${highlightMatches ? highlightMatches(t.descripcion, query) : (t.descripcion || "")}</p>
    </div>

    <div class="playlist-actions">
        <span class="badge ${ (t.tipo || "").toLowerCase().includes('col') ? 'badge-doc' : 'badge-rep' }">
            ${ (t.tipo || "").toUpperCase() || 'TRABAJO' }
        </span>

        <!-- Botón abrir (nuevo) -->
        <a class="playlist-open" href="${trabajoUrl}" target="_blank" rel="noopener noreferrer" title="Abrir trabajo">Abrir ↗</a>

        <!-- Botón copiar (ya existente) -->
        <button class="copy-url" data-url="${trabajoUrl}" title="Copiar enlace">⧉</button>
    </div>
`;


            wrapper.appendChild(item);
            observer.observe(item);
        });
    }

    searchBar.addEventListener("input", e => renderList(e.target.value));
    renderList();
};

// IntersectionObserver (scroll reveal)
const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
        if (e.isIntersecting) {
            e.target.classList.add("revealed");
            observer.unobserve(e.target);
        }
    });
}, { threshold: .15 });

// Copiar enlace
document.addEventListener("click", e => {
  const btn = e.target.closest('.copy-url');
  if (!btn) return;
  navigator.clipboard.writeText(btn.dataset.url || '')
    .then(()=>{ btn.innerText = '✓'; setTimeout(()=>btn.innerText='⧉',1200); })
    .catch(()=>{ alert('No se pudo copiar'); });
});

