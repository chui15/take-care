<?php

require_once('start-app.php');

if (isset($_SESSION['id'])) {
  $userID = $_SESSION['id'];
} else {
  http_response_code(401);
  print('unauthorized');
  exit;
}

$data = json_decode(file_get_contents('php://input'), 1);

$id = intval($data['id']);
$plantClass = $data['className'];

$query = "UPDATE `garden-items` SET `plantClass` = '$plantClass', `created` = NOW(), `updated` = NOW() WHERE `id` = $id AND `garden-id` = $userID";

$plantsQuery = "UPDATE `garden` SET `plants_available` = `plants_available` - 1 WHERE `user-id` = $userID";

$result = mysqli_query($conn, $query);
$plantsResult = mysqli_query($conn, $plantsQuery);

if(!$result || !$plantsResult){
  throw new Exception('Progress update query error: ' . mysqli_error($conn));
}
