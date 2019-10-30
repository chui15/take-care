<?php

require_once('start-app.php');

if (isset($_SESSION['id'])) {
  $userID = $_SESSION['id'];
} else {
  http_response_code(401);
  print('unauthorized');
  exit;
}

$query = "SELECT `name` FROM `users` WHERE `id` = $userID";

$result = mysqli_query($conn, $query);

$gardenQuery = "SELECT * FROM `garden` WHERE `user-id` = $userID";

$gardenResult = mysqli_query($conn, $gardenQuery);

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

while ($gardenRow = mysqli_fetch_assoc($gardenResult)){
  array_push($output, $gardenRow);
}

$json_output = json_encode($output);
print $json_output;

?>
