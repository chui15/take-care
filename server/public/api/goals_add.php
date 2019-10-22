<?php

require_once('start-app.php');

$query = "INSERT INTO `goals` SET ";

$result = mysqli_query($conn, $query);

if(!$result){
  throw new Exception('goal add insert query error: ' . mysqli_error($conn));
}

$goalsRowCheck = mysqli_affected_rows($conn);
if(!$goalsRowCheck < 0){
  $rollbackQuery = "ROLLBACK";
  $rollbackResult = mysqli_query($conn, $rollbackQuery);
  throw new Exception('Row not inserted: ' . mysqli_error($conn));
}

?>
