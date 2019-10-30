<?php


require_once('start-app.php');

$id = null;

if(isset($_GET['goal_id'])){
  $id = $_GET['goal_id'];
} else {
  http_response_code(422);
  print 'No goal ID provided';
  exit;
}

// WHERE id=$id
// SELECT * FROM `goals` AS g LEFT JOIN `goal-timers` AS t ON g.id = t.id

$query = "SELECT * FROM `goals` AS g INNER JOIN `goal-timers` AS t ON g.id = t.id WHERE g.id = $id";

$result = mysqli_query($conn, $query);

if (!$result) {
  throw new Exception("The connection failed or no data was received!",  mysqli_connect_error());
}

$output = [];

if (!mysqli_num_rows($result)) {
  print "No data was available";
  exit();
}

$output = mysqli_fetch_assoc($result);

$json_output = json_encode($output);
print $json_output;

?>
