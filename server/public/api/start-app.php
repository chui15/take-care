<?php
require_once('functions.php');
set_exception_handler('exception_handler');
require_once('../../config/connect.php');
header("Content-type:application/json");
session_start();
?>
