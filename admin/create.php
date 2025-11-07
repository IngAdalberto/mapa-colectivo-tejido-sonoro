<?php
require 'db.php';

$item = [
  'municipio' => '',
  'titulo' => '',
  'slogan' => '',
  'descripcion' => '',
  'thumbnail' => '',
  'url' => '',
  'tipo' => '',
  'fecha' => ''
];

if($_POST){
  $sql = "INSERT INTO trabajos (municipio,titulo,slogan,descripcion,thumbnail,url,tipo,fecha)
          VALUES (?,?,?,?,?,?,?,?)";
  $pdo->prepare($sql)->execute([
    $_POST['municipio'],$_POST['titulo'],$_POST['slogan'],$_POST['descripcion'],
    $_POST['thumbnail'],$_POST['url'],$_POST['tipo'],$_POST['fecha']
  ]);
  header("Location: index.php");
}
?>

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Nuevo Trabajo</title>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body class="bg-light">

<div class="container mt-4">
    <h3 class="mb-3">Crear Nuevo Trabajo</h3>
    <form method="post" class="card p-4 shadow-sm bg-white">
        <?php include "form-fields.php"; ?>
        <button class="btn btn-success">Guardar</button>
        <a href="index.php" class="btn btn-secondary">Volver</a>
    </form>
</div>

</body>
</html>
