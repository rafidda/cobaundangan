<?php
header('Content-Type: application/json');

// 1. Get the posted data
$json_str = file_get_contents('php://input');
$new_entry = json_decode($json_str, true);

if ($new_entry === null || !isset($new_entry['guest_name']) || !isset($new_entry['message'])) {
    http_response_code(400);
    echo json_encode(['message' => 'Data tidak valid.']);
    exit();
}

// 2. Define the file path
$file_path = __DIR__ . '/data/guestbook.json';

// 3. Read existing data
$data = [];
if (file_exists($file_path)) {
    $json_data = file_get_contents($file_path);
    $data = json_decode($json_data, true);
}

// 4. Add new entry
$new_entry['timestamp'] = date('Y-m-d H:i:s');
array_unshift($data, $new_entry); // Add to the beginning

// 5. Save data back to the file
if (file_put_contents($file_path, json_encode($data, JSON_PRETTY_PRINT))) {
    echo json_encode(['message' => 'Ucapan berhasil dikirim.']);
} else {
    http_response_code(500);
    echo json_encode(['message' => 'Gagal mengirim ucapan.']);
}
?>
