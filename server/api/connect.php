<?php
$server = "localhost";
$dataBase = "take-care";
$username = "root";
$password = "root";
// Create connection
$conn = mysqli_connect($server, $username, $password, $dataBase);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
$conn->set_charset("utf8");
?>
