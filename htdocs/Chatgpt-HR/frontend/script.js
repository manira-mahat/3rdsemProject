document.getElementById('add-employee-form').addEventListener('submit', function(e) {
    e.preventDefault();
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const department = document.getElementById('department').value;
    const role = document.getElementById('role').value;

    // Send data to backend via fetch (to a PHP file)
    fetch('../backend/add_employee.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, phone, department, role })
    })
    .then(response => response.json())
    .then(data => {
        alert(data.message);
        loadEmployees();
    })
    .catch(error => console.error('Error:', error));
});

// Function to load employees (This will call a PHP file that returns JSON)
function loadEmployees() {
    fetch('../backend/get_employees.php')
        .then(response => response.json())
        .then(data => {
            const employeeData = document.getElementById('employee-data');
            employeeData.innerHTML = ''; // Clear current data
            data.forEach(emp => {
                employeeData.innerHTML += `
                    <tr>
                        <td>${emp.id}</td>
                        <td>${emp.name}</td>
                        <td>${emp.email}</td>
                        <td>${emp.phone}</td>
                        <td>${emp.department}</td>
                        <td>${emp.role}</td>
                        <td><button onclick="deleteEmployee(${emp.id})">Delete</button></td>
                    </tr>`;
            });
        });
}

function deleteEmployee(id) {
    fetch(`../backend/delete_employee.php?id=${id}`, { method: 'DELETE' })
        .then(response => response.json())
        .then(data => {
            alert(data.message);
            loadEmployees();
        });
}

// Call loadEmployees on page load
loadEmployees();
