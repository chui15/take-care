<?php
$users_array = array(
  [
  "id" =>  1,
  "name" => "Christie",
  "email" => "Christie@mail.com",
  "password" => null,
  "created" => "2019-10-16 00:00:00",
  "updated" => "2019-10-16 00:00:00"
  ],
  [
    "id" =>  2,
    "name" => "Jan",
    "email" => "Jan@mail.com",
    "password" => null,
    "created" => "2019-10-16 00:00:00",
    "updated" => "2019-10-16 00:00:00"
  ],
  [
    "id" =>  3,
    "name" => "Joe",
    "email" => "joe@mail.com",
    "password" => null,
    "created" => "2019-10-16 00:00:00",
    "updated" => "2019-10-16 00:00:00"
  ]
  );
$users_array_json = json_encode($users_array);
print $users_array_json;
