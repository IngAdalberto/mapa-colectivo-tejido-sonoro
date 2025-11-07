<?php
require 'db.php';
$id = $_GET['id'];

$stmt = $pdo->prepare("SELECT * FROM trabajos WHERE id=?");
$stmt->execute([$id]);
$item = $stmt->fetch(PDO::FETCH_ASSOC);

if($_POST){
  $sql = "UPDATE trabajos SET municipio=?,titulo=?,slogan=?,descripcion=?,thumbnail=?,url=?,tipo=?,fecha=? WHERE id=?";
  $pdo->prepare($sql)->execute([
    $_POST['municipio'],$_POST['titulo'],$_POST['slogan'],$_POST['descripcion'],
    $_POST['thumbnail'],$_POST['url'],$_POST['tipo'],$_POST['fecha'], $id
  ]);
  header("Location: index.php");
}
?>

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Editar Trabajo</title>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body class="bg-light">

<div class="container mt-4">
    <h3 class="mb-3">Editar Trabajo</h3>
    <form method="post" class="card p-4 shadow-sm bg-white">
        <?php include "form-fields.php"; ?>
        <button class="btn btn-primary">Actualizar</button>
        <a href="index.php" class="btn btn-secondary">Volver</a>
    </form>
</div>

</body>
</html>
