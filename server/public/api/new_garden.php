<?php
require_once('start-app.php');

$gardenQuery = "INSERT INTO `garden` (`date_created`, `updated`, `plants_available`) VALUES (NOW(), NOW(), 0)";
// $gardenItemsQuery = "INSERT INTO `garden-items` (`garden-id`, `created`, `updated`, `goal-id`, `plantClass`) VALUES ('', NOW(), NOW(), '', 'plant-item')";

$gardenResult = mysqli_query($conn, $gardenQuery);
// $gardenItemsResult = mysqli_query($conn, $gardenItemsQuery);

if (!$gardenResult || !$gardenItemsResult) {
  throw new Exception('garden add insert query error: ' . mysqli_error($conn));
}


?>
