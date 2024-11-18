<?php
$data = file_get_contents('php://input');

// Decode the JSON data into a PHP object.
$jsonData = json_decode($data);

if ($jsonData) {
    $name = $jsonData->Name;
    $email = $jsonData->Email;
    $password = $jsonData->Password;

    // Output the data (for demonstration purposes, you should process the data as needed)
    echo "Name: " . htmlspecialchars($name) . "<br>";
    echo "Email: " . htmlspecialchars($email) . "<br>";
    echo "Password: " . htmlspecialchars($password) . "<br>";

    // Here you can add code to insert the data into a database, send an email, etc.
} else {
    echo "Invalid JSON data.";
}
$conn=mysqli_connect("localhost","root","","anonymous");
if(!$conn){
    echo "Database Connection Failed";
}
else{
    $query="INSERT INTO sign(Name,Email,Password)VALUES('Sid','Email','pas')";
    $check=mysqli_query($conn,$query);
    if(!$check){
        echo "Data Not Inserted";
    }
    else{
        echo "Data Inserted Successfull";
    }
}
?>