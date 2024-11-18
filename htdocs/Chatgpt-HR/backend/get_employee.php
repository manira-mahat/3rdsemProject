<?php
$conn = new mysqli('localhost', 'root', '', 'hrms');

$sql = "SELECT employees.*, departments.name as department FROM employees LEFT JOIN departments ON employees.department_id = departments.id";
$result = $conn->query($sql);

$employees = [];
while ($row = $result->fetch_assoc()) {
    $employees[] = $row;
}

echo json_encode($employees);

$conn->close();
?>
