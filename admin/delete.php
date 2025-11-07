<?php
require 'db.php';
$id = $_GET['id'];
$pdo->prepare("DELETE FROM trabajos WHERE id=?")->execute([$id]);
header("Location: index.php");
