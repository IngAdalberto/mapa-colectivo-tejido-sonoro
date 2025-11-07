<?php
require 'db.php';
$items = $pdo->query("SELECT * FROM trabajos ORDER BY fecha DESC")->fetchAll(PDO::FETCH_ASSOC);
?>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Trabajos | Gestión Editorial</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body class="bg-light">

<nav class="navbar navbar-dark bg-dark mb-4">
  <div class="container">
    <span class="navbar-brand">Gestión de Trabajos</span>
    <a href="create.php" class="btn btn-success btn-sm">+ Nuevo Trabajo</a>
  </div>
</nav>

<div class="container">
  <div class="row">
    <div class="col-md-12">

      <table class="table table-striped table-hover align-middle shadow-sm">
        <thead class="table-dark">
          <tr>
            <th>Municipio</th>
            <th>Título</th>
            <th>Tipo</th>
            <th>Fecha</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
        <?php foreach($items as $row): ?>
          <tr>
            <td><?= $row['municipio'] ?></td>
            <td>
                <strong><?= $row['titulo'] ?></strong>
                <br><small class="text-muted"><?= $row['slogan'] ?></small>
            </td>
            <td><span class="badge bg-info"><?= $row['tipo'] ?></span></td>
            <td><?= $row['fecha'] ?></td>
            <td>
              <a href="edit.php?id=<?= $row['id'] ?>" class="btn btn-sm btn-primary">Editar</a>
              <a href="delete.php?id=<?= $row['id'] ?>" class="btn btn-sm btn-danger" onclick="return confirm('¿Eliminar definitivamente?')">Eliminar</a>
            </td>
          </tr>
        <?php endforeach; ?>
        </tbody>
      </table>

    </div>
  </div>
</div>

</body>
</html>
