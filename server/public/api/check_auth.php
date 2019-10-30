<?php
session_start();

$output = [ 'auth' => false ];

if(isset($_SESSION['id'])){
  $output['auth'] = true;
}

echo json_encode($output);
