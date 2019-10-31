<?php

require_once('start-app.php');

$data = json_decode(file_get_contents('php://input'), 1);

$id = intval($data);

$query = "DELETE FROM `goals` WHERE `id` = $id";

$result = mysqli_query($conn, $query);


if (!$result) {
  throw new Exception("The connection failed or no data was received!",  mysqli_connect_error());
}


?>
