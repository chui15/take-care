<?php

require_once('start-app.php');

$data = json_decode(file_get_contents('php://input'), 1);

$id = intval($data['id']);
$plantClass = $data['className'];

$query = "UPDATE `garden-items` SET `plantClass` = '$plantClass', `created` = NOW(), `updated` = NOW() WHERE `id` = $id";

$result = mysqli_query($conn, $query);

if(!$result){
  throw new Exception('Progress update query error: ' . mysqli_error($conn));
}
