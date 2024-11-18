<?php
$conn = new mysqli('localhost', 'root', '', 'hrms');

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $data = json_decode(file_get_contents("php://input"), true);
    $name = $data['name'];
    $email = $data['email'];
    $phone = $data['phone'];
    $department_id = $data['department'];
    $role = $data['role'];

    $stmt = $conn->prepare("INSERT INTO employees (name, email, phone, department_id, role) VALUES (?, ?, ?, ?, ?)");
    $stmt->bind_param("sssis", $name, $email, $phone, $department_id, $role);

    if ($stmt->execute()) {
        echo json_encode(["message" => "Employee added successfully!"]);
    } else {
        echo json_encode(["message" => "Failed to add employee."]);
    }

    $stmt->close();
    $conn->close();
}
?>
