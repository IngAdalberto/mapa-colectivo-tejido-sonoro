<style>
/* 🎨 Estilos generales */
#trabajoForm {
  max-width: 600px;
  margin: 40px auto;
  background: #ffffff;
  padding: 2rem;
  border-radius: 16px;
  box-shadow: 0 6px 24px rgba(0,0,0,0.08);
  font-family: 'Poppins', 'Segoe UI', sans-serif;
  display: flex;
  flex-direction: column;
  gap: 1.4rem;
}

/* 🏷️ Contenedor del campo */
.form-field {
  position: relative;
  display: flex;
  flex-direction: column;
}

/* 🧠 Etiquetas flotantes */
.form-field label {
  position: absolute;
  left: 16px;
  top: 14px;
  background: #fff;
  padding: 0 6px;
  color: #666;
  font-size: 0.9rem;
  pointer-events: none;
  transition: all 0.2s ease;
}

.form-field input,
.form-field textarea,
.form-field select {
  border: 1.5px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  font-size: 1rem;
  width: 100%;
  background: #fff;
  transition: border-color 0.25s ease, box-shadow 0.25s ease;
}

.form-field input:focus,
.form-field textarea:focus,
.form-field select:focus {
  border-color: #00796b;
  box-shadow: 0 0 0 3px rgba(0, 121, 107, 0.2);
  outline: none;
}

.form-field input:focus + label,
.form-field textarea:focus + label,
.form-field select:focus + label,
.form-field input:not(:placeholder-shown) + label,
.form-field textarea:not(:placeholder-shown) + label,
.form-field select:not([value=""]) + label {
  top: -8px;
  font-size: 0.8rem;
  color: #00796b;
}

/* 📅 Inputs especiales */
input[type="file"] {
  border: none;
  background: #f7f7f7;
  padding: 0.6rem;
}

/* 🧭 Botón */
#trabajoForm button {
  background: linear-gradient(135deg, #00796b, #26a69a);
  border: none;
  color: white;
  padding: 14px;
  border-radius: 10px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
}

#trabajoForm button:hover {
  background: linear-gradient(135deg, #00695c, #009688);
  transform: translateY(-1px);
}

/* ✅ Mensaje */
#msg {
  text-align: center;
  margin-top: 1rem;
  font-weight: 500;
  color: #00796b;
}

/* 📱 Adaptación móvil */
@media (max-width: 600px) {
  #trabajoForm {
    margin: 1rem;
    padding: 1.5rem;
  }
}
</style>

<form id="trabajoForm" enctype="multipart/form-data">

  <div class="form-field">
    <input type="text" name="titulo" placeholder=" " required>
    <label>*Título del trabajo</label>
  </div>

  <div class="form-field">
    <textarea name="descripcion" placeholder=" " rows="4"></textarea>
    <label>*Descripción</label>
  </div>

  <div class="form-field">
    <input type="text" name="slogan" placeholder=" " required>
    <label>*Comunicador(es)</label>
  </div>

  <!-- MUNICIPIO -->
  <div class="form-field">
    <select name="municipio" required>
      <option value="" selected disabled></option>
      <option value="AGUSTIN CODAZZI">AGUSTÍN CODAZZI</option>
      <option value="BECERRIL">BECERRIL</option>
      <option value="LA JAGUA DE IBIRICO">LA JAGUA DE IBIRICO</option>
      <option value="EL PASO">EL PASO</option>
      <option value="CHIRIGUANA">CHIRIGUANÁ</option>
      <option value="CHIMICHAGUA">CHIMICHAGUA</option>
      <option value="EL BANCO">EL BANCO</option>
    </select>
    <label>*Municipio</label>
  </div>

  <!-- TIPO -->
  <div class="form-field">
    <select name="tipo" required>
      <option value="" selected disabled></option>
      <option value="Colectivo">Colectivo</option>
      <option value="Individual">Individual</option>
    </select>
    <label>*Tipo</label>
  </div>

  <div class="form-field">
    <input type="url" name="url" placeholder=" " required>
    <label>*Enlace página del trabajo</label>
  </div>

  <div class="form-field">
    <input type="file" name="thumbnail" accept="image/*" capture="camera" required>
    <label>*Subir imagen</label>
  </div>

  <button type="submit">Guardar trabajo</button>
</form>

<div id="msg"></div>


<script>
document.getElementById("trabajoForm").addEventListener("submit", async e => {
  e.preventDefault();
  const form = e.target;
  const msg = document.getElementById("msg");
  msg.textContent = "Enviando...";

  const formData = new FormData(form);

  try {
    const res = await fetch('/wp-json/tejido/v1/crear-trabajo', {
      method: 'POST',
      headers: {
        'X-WP-Nonce': wpApiSettings.nonce
      },
      body: formData
    });

    const json = await res.json();
    if (!res.ok) throw new Error(json.message || "Error al crear el trabajo");

    msg.textContent = "✅ Trabajo guardado correctamente";
    setTimeout(() => {
      window.location.href = json.list_url + "&mensaje=guardado";
    }, 1500);
  } catch (err) {
    console.error(err);
    msg.textContent = "❌ No se pudo guardar el trabajo.";
  }
});
</script>

