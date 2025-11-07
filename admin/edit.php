<?php require 'db.php';

$id = $_GET['id'];
$stmt = $pdo->prepare("SELECT * FROM trabajos WHERE id=?");
$stmt->execute([$id]);
$item = $stmt->fetch();

if ($_POST) {
  $sql = "UPDATE trabajos SET municipio=?,titulo=?,slogan=?,descripcion=?,thumbnail=?,url=?,tipo=?,fecha=?
          WHERE id=?";
  $pdo->prepare($sql)->execute([
    $_POST['municipio'],$_POST['titulo'],$_POST['slogan'],$_POST['descripcion'],
    $_POST['thumbnail'],$_POST['url'],$_POST['tipo'],$_POST['fecha'],$id
  ]);
  header("Location: index.php");
}
?>

<link rel="stylesheet" href="style.css" />

<form class="editorial-form" method="post">
  <?php include 'form-fields.php'; ?>
  <button class="btn-primary">Actualizar</button>
</form>
