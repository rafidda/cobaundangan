<?php
header('Content-Type: application/json');

$file_path = __DIR__ . '/data/guestbook.json';

$data = [];
if (file_exists($file_path)) {
    $json_data = file_get_contents($file_path);
    $data = json_decode($json_data, true);
}

echo json_encode($data);
?>
