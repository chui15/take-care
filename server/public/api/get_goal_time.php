<?php
require_once('start-app.php');

$data = json_decode(file_get_contents('php://input'), 1);


if (isset($_SESSION['id'])) {
  $userId = $_SESSION['id'];
} else {
  http_response_code(401);
  echo json_encode(['error' => ['Not Authorized']]);
  exit;
}

$errors = [];

if (isset($data['goalId'])) {
  $goalId = $data['goalId'];
} else {
  $errors[] = 'No goalId provided';
}

if(count($errors)){
  http_response_code(422);
  echo json_encode(['error' => $errors]);
  exit;
}

$output = [
  'timerTime' => 0
];

$query = "SELECT timerTime FROM `goal-timers` WHERE `goal-id`=$goalId AND `user-id`=$userId";

$result = mysqli_query($conn, $query);

if(mysqli_num_rows($result) > 0){
  $output['timerTime'] = (int) mysqli_fetch_assoc($result)['timerTime'];
} else {
  $addQuery = "INSERT INTO `goal-timers` (`goal-id`, `user-id`, `timerTime`) VALUES ($goalId, $userId, 0)";
  $addResult = mysqli_query($conn, $addQuery);

  if(mysqli_affected_rows($conn) === 0){
    http_response_code(500);
    echo json_encode(['error' => ['Error saving new timer']]);
    exit;
  }
}

echo json_encode($output);
