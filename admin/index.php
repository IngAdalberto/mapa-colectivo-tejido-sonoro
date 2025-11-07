<?php require 'db.php'; ?>

<?php
$search = $_GET['q'] ?? "";
$sql = "SELECT * FROM trabajos WHERE 
          titulo LIKE :s OR slogan LIKE :s OR descripcion LIKE :s
        ORDER BY fecha DESC";
$stmt = $pdo->prepare($sql);
$stmt->execute([":s" => "%$search%"]);
$rows = $stmt->fetchAll();
?>

<link rel="stylesheet" href="style.css" />
<a class="btn-primary" href="create.php">+ Nuevo trabajo</a>

<form class="search-box">
  <input name="q" value="<?=htmlspecialchars($search)?>" placeholder="Buscar…">
</form>

<table class="table-news">
<thead>
  <tr>
    <th>Título</th>
    <th>Municipio</th>
    <th>Tipo</th>
    <th>Fecha</th>
    <th></th>
  </tr>
</thead>
<tbody>
<?php foreach($rows as $r): ?>
  <tr>
    <td><strong><?=$r['titulo']?></strong><br><small><?=$r['slogan']?></small></td>
    <td><?=$r['municipio']?></td>
    <td><?=ucfirst($r['tipo'])?></td>
    <td><?=$r['fecha']?></td>
    <td>
      <a href="edit.php?id=<?=$r['id']?>">Editar</a> ·
      <a class="danger" href="delete.php?id=<?=$r['id']?>">Eliminar</a>
    </td>
  </tr>
<?php endforeach; ?>
</tbody>
</table>
