<?php
$municipios = [
  "AGUSTIN CODAZZI","BECERRIL","LA JAGUA DE IBIRICO","EL PASO",
  "CHIRIGUANA","CHIMICHAGUA","EL BANCO"
];
?>

<label>Municipio</label>
<select name="municipio">
<?php foreach($municipios as $m): ?>
  <option <?=$item['municipio']==$m?"selected":""?>><?=$m?></option>
<?php endforeach; ?>
</select>

<label>Título</label>
<input name="titulo" value="<?=$item['titulo'] ?? ""?>">

<label>Slogan</label>
<input name="slogan" value="<?=$item['slogan'] ?? ""?>">

<label>Descripción</label>
<textarea name="descripcion"><?=$item['descripcion'] ?? ""?></textarea>

<label>Thumbnail</label>
<input name="thumbnail" value="<?=$item['thumbnail'] ?? ""?>">

<label>URL</label>
<input name="url" value="<?=$item['url'] ?? ""?>">

<label>Tipo</label>
<select name="tipo">
  <option <?=($item['tipo']=="documental"?"selected":"")?>>documental</option>
  <option <?=($item['tipo']=="reportaje"?"selected":"")?>>reportaje</option>
</select>

<label>Fecha</label>
<input type="date" name="fecha" value="<?=$item['fecha'] ?? ""?>">
