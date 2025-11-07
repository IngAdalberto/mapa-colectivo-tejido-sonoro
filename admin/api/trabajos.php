<?php
require "../db.php";

header('Content-Type: application/json; charset=utf-8');

$stmt = $pdo->query("SELECT municipio, titulo, slogan, descripcion, thumbnail, url, tipo FROM trabajos ORDER BY fecha DESC");
$data = $stmt->fetchAll(PDO::FETCH_ASSOC);

echo json_encode($data, JSON_UNESCAPED_UNICODE);
