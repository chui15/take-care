<?php
require_once('start-app.php');

$gardenQuery = "INSERT INTO `garden` (`date_created`, `updated`, `plants_available`) VALUES (NOW(), NOW(), 0)";

$gardenResult = mysqli_query($conn, $gardenQuery);

$getIDQuery = "SELECT `user-id` FROM `garden`";
$getIDResult = mysqli_query($conn, $getIDQuery);

$output = mysqli_fetch_assoc($getIDResult);

$json_output = json_encode($output);
print $json_output;

$gardenID = $output['user-id'];

if($gardenResult){
  for($i = 0; $i < 16; $i++){
    $gardenItemsQuery = "INSERT INTO `garden-items` (`garden-id`, `created`, `updated`, `goal-id`, `plantClass`) VALUES
    ((SELECT `user-id` FROM `garden` ORDER BY `user-id` DESC LIMIT 1), NOW(), NOW(), 1, 'plant-item')";
    $gardenItemsResult = mysqli_query($conn, $gardenItemsQuery);
  }
}

if (!$gardenResult || !$gardenItemsResult) {
  throw new Exception('garden add insert query error: ' . mysqli_error($conn));
}


?>
