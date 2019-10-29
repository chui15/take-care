<?php
require_once('start-app.php');

if (isset($_SESSION['id'])) {
  $userID = $_SESSION['id'];
} else {
  http_response_code(401);
  print('unauthorized');
  exit;
}

$gardenQuery = "INSERT INTO `garden` (`user-id`, `date_created`, `updated`, `plants_available`) VALUES ($userID, NOW(), NOW(), 0)";
$gardenResult = mysqli_query($conn, $gardenQuery);

if (!$gardenResult) {
  throw new Exception('garden add insert query error: ' . mysqli_error($conn));
}


?>
