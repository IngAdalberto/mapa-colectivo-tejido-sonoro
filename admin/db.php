<?php
$host = "srv1147.hstgr.io";
$dbname = "u846986684_colectivotejso";
$user = "u846986684_colectivotejso";
$pass = "odfHPfdJK;6";

try {
  $pdo = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8mb4", $user, $pass,
    [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION]
  );
} catch (Exception $e) {
  exit("Error de conexión");
}
