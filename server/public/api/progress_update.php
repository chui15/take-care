<?php

require_once('start-app.php');

$data = json_decode(file_get_contents('php://input'), 1);

$id = $data['id'];
$progress = $data['progress'];

if($progress === 100){
  $query = "UPDATE `goals` SET `progress` = $progress, `is-completed` = 'true', `completed` = NOW() WHERE `id` = $id";
} else {
  $query = "UPDATE `goals` SET `progress` = $progress, `is-completed` = 'false', `completed` = NULL WHERE `id` = $id";
}

$result = mysqli_query($conn, $query);

if(!$result){
  throw new Exception('Progress update query error: ' . mysqli_error($conn));
}

$goalsRowCheck = mysqli_affected_rows($conn);
if(!$goalsRowCheck < 0){
  $rollbackQuery = "ROLLBACK";
  $rollbackResult = mysqli_query($conn, $rollbackQuery);
  throw new Exception('Progress not updated: ' . mysqli_error($conn));
}

?>
