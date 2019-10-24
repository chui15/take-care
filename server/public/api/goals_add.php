<?php

require_once('start-app.php');

$data = json_decode(file_get_contents('php://input'), 1);

$errors = [];

if(isset($data['title'])){
  $title = $data['title'];
} else {
  $errors[] = 'No title provided';
}
if (isset($data['description'])) {
  $description = $data['description'];
} else {
  $errors[] = 'No description provided';
}
if (isset($data['value'])) {
  $value = $data['value'];
} else {
  $errors[] = 'No value provided';
}

if(count($errors)){
 print_r($errors);
 exit;
}


$query = "INSERT INTO `goals` (`user-id`, `title`, `description`, `progress`, `is-completed`) VALUES ('', '$title', '$description', '$value', 'false')";

$result = mysqli_query($conn, $query);

if(!$result){
  throw new Exception('goal add insert query error: ' . mysqli_error($conn));
}

$goalsRowCheck = mysqli_affected_rows($conn);
if(!$goalsRowCheck < 0){
  $rollbackQuery = "ROLLBACK";
  $rollbackResult = mysqli_query($conn, $rollbackQuery);
  throw new Exception('Row not inserted: ' . mysqli_error($conn));
}

?>
