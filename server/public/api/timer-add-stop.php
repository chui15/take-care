<?php

require_once('start-app.php');

$data = json_decode(file_get_contents('php://input'), 1);
$goal_id = $data['goalId'];
$errors = [];


if(isset($data['goalId'])){
  $goalId = $data['goalId'];
} else {
  $errors[] = 'No goalId provided';
}
if (isset($data['userId'])) {
  $userId = $data['userId'];
} else {
  $errors[] = 'No userId provided';
}
if (isset($data['startTime'])) {
  $startTime = $data['startTime'];
} else {
  $errors[] = 'No startTime provided';
}
if (isset($data['endTime'])) {
  $endTime = $data['endTime'];
} else {
  $errors[] = 'No end-time provided';
}


if(count($errors)){
 print_r($errors);
 exit;
}


$query = "UPDATE `goal-timers` SET `end-time` = '$endTime' WHERE `goal-id` = $goal_id";

$result = mysqli_query($conn, $query);

if(!$result){
  throw new Exception('timer add insert query error: ' . mysqli_error($conn));
}

$timerRowCheck = mysqli_affected_rows($conn);
if(!$timerRowCheck < 0){
  $rollbackQuery = "ROLLBACK";
  $rollbackResult = mysqli_query($conn, $rollbackQuery);
  throw new Exception('Row not inserted: ' . mysqli_error($conn));
}
