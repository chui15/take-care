<?php

require_once('start-app.php');

$data = json_decode(file_get_contents('php://input'), 1);

$errors = [];

if (isset($_SESSION['id'])) {
  $userId = $_SESSION['id'];
} else {
  http_response_code(401);
  echo json_encode(['error' => 'Not Authorized']);
  exit;
}

if(isset($data['goalId'])){
  $goalId = $data['goalId'];
} else {
  $errors[] = 'No goalId provided';
}
// if (isset($data['userId'])) {
//   $userId = $data['userId'];
// } else {
//   $errors[] = 'No userId provided';
// }
// if (isset($data['startTime'])) {
//   $startTime = $data['startTime'];
// } else {
//   $errors[] = 'No startTime provided';
// }

if(count($errors)){
 print_r($errors);
 exit;
}

$query = "INSERT INTO `goal-timers` (`goal-id`, `user-id`)
VALUES ('$goalId','$userId')";

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
?>
