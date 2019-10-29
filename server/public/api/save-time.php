<?php

require_once('start-app.php');

$data = json_decode(file_get_contents('php://input'), 1);


if(isset($_SESSION['id'])){
  $userId = $_SESSION['id'];
} else {
  http_response_code(401);
  echo json_encode(['error' => ['Not Authorized']]);
  exit;
}

$errors = [];

if(isset($data['time'])){
  $time = $data['time'];
} else {
  $errors[] = 'No time provided';
}
if (isset($data['goalId'])) {
  $goalId = $data['goalId'];
} else {
  $errors[] = 'No goalId provided';
}

if(count($errors)){
  http_response_code(422);
  json_encode(['error' => $errors]);
  exit;
}

$query = "UPDATE `goal-timers` SET timerTime = $time WHERE `goal-id` = $goalId AND `user-id`=$userId";

$result = mysqli_query($conn, $query);

if(!$result){
  throw new Exception('goal add insert query error: ' . mysqli_error($conn));
}

$timerRowCheck = mysqli_affected_rows($conn);
if(!$timerRowCheck < 0){
  $rollbackQuery = "ROLLBACK";
  $rollbackResult = mysqli_query($conn, $rollbackQuery);
  throw new Exception('Row not inserted: ' . mysqli_error($conn));
}
