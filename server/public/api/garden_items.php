<?php

require_once('start-app.php');

$gardenID = $_GET['garden_id'];

if (isset($_SESSION['id'])) {
  $userID = $_SESSION['id'];
} else {
  http_response_code(401);
  print('unauthorized');
  exit;
}

$query = "SELECT * FROM `garden-items` WHERE `garden-id` = $gardenID";

$result = mysqli_query($conn, $query);

if (!$result) {
  throw new Exception("The connection failed or no data was received!",  mysqli_connect_error());
}

$output = [];


if (!mysqli_num_rows($result)) {
  print "No data was available";
  exit();
}

while ($row = mysqli_fetch_assoc($result)) {
  array_push($output, $row);
}

$json_output = json_encode($output);
print $json_output;
?>
