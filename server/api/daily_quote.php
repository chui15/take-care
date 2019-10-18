<?php
require_once('functions.php');
set_exception_handler('exception_handler');
require_once('connect.php');
header("Content-type:application/json");

$query = "SELECT * FROM `daily-quote`";

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
// $quotes_array = array(
//   [
//     "id" => 1,
//     "quote" => "What has no fingers, but many rings?
// (A: A tree!)"
//   ],
//   [
//     "id" => "2",
//     "quote" => "What did the big flower say to the little flower?
// (A: What’s up, bud?!)"
//   ],
//   [
//     "id" => "3",
//     "quote" => "How do succulents confess their feelings?
//     (A: Aloe you so much!)"
//   ],
//   [
//     "id" => "4",
//     "quote" => "What makes some plants better at math than others?
//     (A: Square roots!"
//   ]
//   );
// $quotes_array_json = json_encode($quotes_array);
// print $quotes_array
?>
