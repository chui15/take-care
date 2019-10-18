<?php
$plant_array = array(
  [
    "id" => 1,
    "name" => "Aloe plant",
    "img-url" => "/images/aloe-plant.png",
    "decription" => "
    Aloe is a succulent plant species of the genus Aloe. An evergreen perennial,
    it originates from the Arabian Peninsula, but grows wild in tropical, semi-tropical,
    and arid climates around the world. It is cultivated for agricultural and medicinal uses.",
    "created" => "2019-10-16 00:00:00",
    "updated" => "2019-10-16 00:00:00"
  ],
  [
    "id" => 2,
    "name" => "Blueberry Bush",
    "img-url" => "/images/blueberry-bush.png",
    "decription" => "The Blueberry bush is a crown forming, woody,
    perennial shrub in the family Ericaceae grown for its fruits,
    or berries, of the same name.",
    "created" => "2019-10-16 00:00:00",
    "updated" => "2019-10-16 00:00:00"
  ],
  [
    "id" => 3,
    "name" => "Bon-sai tree",
    "img-url" => "/images/blueberry-bush.png",
    "decription" => "A Bonsai tree is a replication of nature,
    in the form of a miniature tree,
    without displaying the human intervention too clearly.",
    "created" => "2019-10-16 00:00:00",
    "updated" => "2019-10-16 00:00:00"
  ]
  );
$plant_array_json = json_encode($plant_array);
print $plant_array
?>