<?php
$conn = new mysqli('localhost', 'root', '', 'hrms');

if ($_SERVER['REQUEST_METHOD'] == 'DELETE') {
    parse_str(file_get_contents("php://input"), $data);
    $id = $data['id'];

    $stmt = $conn->prepare("DELETE FROM employees WHERE id = ?");
    $stmt->bind_param("i", $id);

    if ($stmt->execute()) {
        echo json_encode(["message" => "Employee deleted successfully!"]);
    } else {
        echo json_encode(["message" => "Failed to delete employee."]);
    }

    $stmt->close();
    $conn->close();
}
?>
