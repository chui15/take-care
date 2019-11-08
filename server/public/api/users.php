<?php
require_once('start-app.php');

$query = "SELECT * FROM `users`";

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
// $users_array = array(
//   [
//   "id" =>  1,
//   "name" => "Christie",
//   "email" => "Christie@mail.com",
//   "password" => null,
//   "created" => "2019-10-16 00:00:00",
//   "updated" => "2019-10-16 00:00:00"
//   ],
//   [
//     "id" =>  2,
//     "name" => "Jan",
//     "email" => "Jan@mail.com",
//     "password" => null,
//     "created" => "2019-10-16 00:00:00",
//     "updated" => "2019-10-16 00:00:00"
//   ],
//   [
//     "id" =>  3,
//     "name" => "Joe",
//     "email" => "joe@mail.com",
//     "password" => null,
//     "created" => "2019-10-16 00:00:00",
//     "updated" => "2019-10-16 00:00:00"
//   ]
//   );
// $users_array_json = json_encode($users_array);
// print $users_array_json;
?>
