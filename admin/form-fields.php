<div class="mb-3">
  <label class="form-label">Municipio</label>
  <select name="municipio" class="form-select" required>
    <?php
    $muns = [
  "AGUSTIN CODAZZI","BECERRIL","LA JAGUA DE IBIRICO","EL PASO",
  "CHIRIGUANA","CHIMICHAGUA","EL BANCO"
];
    foreach($muns as $m){
      $sel = ($item['municipio']==$m)?"selected":"";
      echo "<option $sel>$m</option>";
    }
    ?>
  </select>
</div>

<div class="mb-3">
  <label class="form-label">Título</label>
  <input name="titulo" value="<?= $item['titulo'] ?>" class="form-control" required>
</div>

<div class="mb-3">
  <label class="form-label">Slogan</label>
  <input name="slogan" value="<?= $item['slogan'] ?>" class="form-control">
</div>

<div class="mb-3">
  <label class="form-label">Descripción</label>
  <textarea name="descripcion" class="form-control" rows="3"><?= $item['descripcion'] ?></textarea>
</div>

<div class="mb-3">
  <label class="form-label">Thumbnail (URL)</label>
  <input name="thumbnail" value="<?= $item['thumbnail'] ?>" class="form-control">
</div>

<div class="mb-3">
  <label class="form-label">URL destino</label>
  <input name="url" value="<?= $item['url'] ?>" class="form-control">
</div>

<div class="mb-3">
  <label class="form-label">Tipo</label>
  <select name="tipo" class="form-select">
    <option <?= $item['tipo']=="Colectivo"?"selected":"" ?>>Colectivo</option>
    <option <?= $item['tipo']=="Individual"?"selected":"" ?>>Individual</option>
  </select>
</div>

<div class="mb-3">
  <label class="form-label">Fecha</label>
  <input type="date" name="fecha" value="<?= $item['fecha'] ?>" class="form-control">
</div>
