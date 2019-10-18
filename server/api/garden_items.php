<?php
$gardenArray = array(
  ["id" => 1,
  "garden-id" => 1,
  "plant-id" => 1,
  "user-id" => 1,
  "created" => "2019-10-17 00:00:00",
  "updated" => "2019-10-17 00:00:00",
  "location" => 1,
  "goal-id" => 1],
  [
    "id" => 2,
    "garden-id" => 1,
    "plant-id" => 2,
    "user-id" => 1,
    "created" => "2019-10-17 00:00:00",
    "updated" => "2019-10-17 00:00:00",
    "location" => 2,
    "goal-id" => 2
  ],
  [
    "id" => 3,
    "garden-id" => 1,
    "plant-id" => 3,
    "user-id" => 1,
    "created" => "2019-10-17 00:00:00",
    "updated" => "2019-10-17 00:00:00",
    "location" => 3,
    "goal-id" => 3
  ]
);
$gardenJson = json_encode($gardenArray);
print $gardenJson;
?>
