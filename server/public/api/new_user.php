<?php

require_once('start-app.php');

session_start();

$data = json_decode(file_get_contents('php://input'), 1);
$errors = [];

if(isset($data['user'])){
  $user = $data['user'];
} else {
  $errors[] = 'User name not valid';
}
if (isset($data['email'])) {
  $email = $data['email'];
} else {
  $errors[] = 'No email provided';
}
if (isset($data['password'])) {
  $password = $data['password'];
} else {
  $errors[] = 'No password provided';
}

$query = "INSERT INTO `users` (`name`, `email`, `password`, `created`, `updated`) VALUES ('$user', '$email', '$password', NOW(), NOW())";

$result = mysqli_query($conn, $query);

if (!$result) {
  throw new Exception('user add insert query error: ' . mysqli_error($conn));
}

?>
