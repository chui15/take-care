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
  $query = "UPDATE `goals` SET `progress` = $progress, `is-completed` = 'true', `completed` = NOW() WHERE `id` = $id AND `user-id` = $userID";
} else {
  $query = "UPDATE `goals` SET `progress` = $progress, `is-completed` = 'false', `completed` = NULL WHERE `id` = $id AND `user-id` = $userID";
}

$result = mysqli_query($conn, $query);

if(!$result){
  throw new Exception('Progress update query error: ' . mysqli_error($conn));
}

$goalsRowCheck = mysqli_affected_rows($conn);
if(!$goalsRowCheck < 0){
  throw new Exception('Progress not updated: ' . mysqli_error($conn));
}

?>
