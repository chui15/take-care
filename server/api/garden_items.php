<?php
require_once('functions.php');
set_exception_handler('exception_handler');
require_once('connect.php');
header("Content-type:application/json");

$query = "SELECT * FROM `garden-items`";

$result = mysqli_query($conn, $query);

if (!$result) {
  throw new Exception("The connection failed or no data was received!",  mysqli_connect_error());
}

$output =
  [
    "success" => true,
    "data" => []
  ];

if (!mysqli_num_rows($result)) {
  print "No data was available";
  exit();
}

while ($row = mysqli_fetch_assoc($result)) {
  array_push($output["data"], $row);
}

$json_output = json_encode($output);
print $json_output;
// $gardenArray = array(
//   ["id" => 1,
//   "garden-id" => 1,
//   "plant-id" => 1,
//   "user-id" => 1,
//   "created" => "2019-10-17 00:00:00",
//   "updated" => "2019-10-17 00:00:00",
//   "location" => 1,
//   "goal-id" => 1],
//   [
//     "id" => 2,
//     "garden-id" => 1,
//     "plant-id" => 2,
//     "user-id" => 1,
//     "created" => "2019-10-17 00:00:00",
//     "updated" => "2019-10-17 00:00:00",
//     "location" => 2,
//     "goal-id" => 2
//   ],
//   [
//     "id" => 3,
//     "garden-id" => 1,
//     "plant-id" => 3,
//     "user-id" => 1,
//     "created" => "2019-10-17 00:00:00",
//     "updated" => "2019-10-17 00:00:00",
//     "location" => 3,
//     "goal-id" => 3
//   ]
// );
// $gardenJson = json_encode($gardenArray);
// print $gardenJson;
?>
