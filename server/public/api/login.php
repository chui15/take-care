<?php

require_once('start-app.php');

$data = json_decode(file_get_contents('php://input'), 1);

$email = null;
$password = null;

if(isset($data['email'])){
  $email = $data['email'];
}
if(isset($data['password'])){
  $password = $data['password'];
}

if(!$email || !$password){
  http_response_code(422);
  echo json_encode(['error' => 'Missing email and/or password']);
  exit;
}

$loginQuery = "SELECT id, password, name FROM `users` WHERE `email` = '$email'";
$loginResult = mysqli_query($conn, $loginQuery);

if (mysqli_num_rows($loginResult) === 1) {
  $user = mysqli_fetch_assoc($loginResult);

  $passMatch = password_verify($password, $user['password']);

  if($passMatch){
    $_SESSION['user'] = $user['name'];
    $_SESSION['id'] = $user['id'];
    echo json_encode(['message' => 'Successfully logged in']);
    exit;
  }
}

http_response_code(401);

echo json_encode(['error' => 'Wrong email and/or password']);
exit;

?>
