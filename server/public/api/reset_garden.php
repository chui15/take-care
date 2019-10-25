<?php

require_once('start-app.php');

$gardenID = $_GET['garden_id'];

$query = "UPDATE `garden-items` SET `plantClass` = 'plant-item' WHERE `garden-id` = '$gardenID'";

$result = mysqli_query($conn, $query);

if(!$result){
  throw new Exception('Progress update query error: ' . mysqli_error($conn));
}

$goalsRowCheck = mysqli_affected_rows($conn);
if(!$goalsRowCheck < 0){
  throw new Exception('Progress not updated: ' . mysqli_error($conn));
}
