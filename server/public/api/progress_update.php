<?php

require_once('start-app.php');

$data = json_decode(file_get_contents('php://input'), 1);

if (isset($_SESSION['id'])) {
  $userID = $_SESSION['id'];
} else {
  http_response_code(401);
  print('unauthorized');
  exit;
}

$id = $data['id'];
$progress = $data['progress'];

if($progress === 100){
  $progressQuery = "UPDATE `goals` SET `progress` = $progress, `is-completed` = 'true', `completed` = NOW() WHERE `id` = $id AND `user-id` = $userID";
  $plantQuery = "UPDATE `garden` SET `plants_available` = `plants_available` + 1 WHERE `user-id` = $userID";
} else {
  $progressQuery = "UPDATE `goals` SET `progress` = $progress, `is-completed` = 'false', `completed` = NULL WHERE `id` = $id AND `user-id` = $userID";
  $plantQuery = null;
}

$progressResult = mysqli_query($conn, $progressQuery);
$plantResult = mysqli_query($conn, $plantQuery);

if(!$progressResult || !$plantResult){
  throw new Exception('Progress update query error: ' . mysqli_error($conn));
}

$goalsRowCheck = mysqli_affected_rows($conn);
if(!$goalsRowCheck < 0){
  throw new Exception('Progress not updated: ' . mysqli_error($conn));
}


?>
