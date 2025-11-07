<?php require 'db.php';

if ($_POST) {
  $sql = "INSERT INTO trabajos (municipio,titulo,slogan,descripcion,thumbnail,url,tipo,fecha)
          VALUES (?,?,?,?,?,?,?,?)";
  $pdo->prepare($sql)->execute([
    $_POST['municipio'],$_POST['titulo'],$_POST['slogan'],$_POST['descripcion'],
    $_POST['thumbnail'],$_POST['url'],$_POST['tipo'],$_POST['fecha']
  ]);
  header("Location: index.php");
}
?>

<link rel="stylesheet" href="style.css" />

<form class="editorial-form" method="post">
  <?php include 'form-fields.php'; ?>
  <button class="btn-primary">Guardar</button>
</form>
