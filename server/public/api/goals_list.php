<?php

require_once('start-app.php');

$query = "SELECT * FROM `goals`";

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
  array_push($output["data"], $row);
}

$json_output = json_encode($output);
print $json_output;
// $goals_array = array(
//   [
//   "id" => 1,
//   "title" => "Do math homework",
//   "description" => null,
//   "progress" => "0",
//   "is-completed" => false,
//   "created" => "2019-10-16 00:00:00",
//   "updated" => "2019-10-16 00:00:00",
//   "completed" => null
//   ],
//   [
//     "id" => 2,
//     "title" => "Make grocery list",
//     "description" => null,
//     "progress" => "100",
//     "is-completed" => true,
//     "created" => "2019-10-16 00:00:00",
//     "updated" => "2019-10-16 00:00:00",
//     "completed" => "2019-10-17 00:00:00"
//   ],
//   [
//     "id" => 3,
//     "title" => "Do english paper",
//     "description" => null,
//     "progress" => "0",
//     "is-completed" => false,
//     "created" => "2019-10-16 00:00:00",
//     "updated" => "2019-10-16 00:00:00",
//     "completed" => null
//   ]
//   );
// $goals_array_json = json_encode($goals_array);
// print $goals_array_json;
?>
