<?php
mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);

$host = "localhost"; // 或是 IP
$user = "root";
$pwd = "";
$db = "midterm";

$mysqli = new mysqli($host, $user, $pwd, $db);
?>