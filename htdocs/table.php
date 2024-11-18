<?php
$conn=mysqli_connect("localhost","root","","anonymous");
if(!$conn){
    echo "Database Connection Failed";
}
else{
    $query="CREATE TABLE Sign(
    Name varchar(20),
    Email varchar(50),
    Password varchar(20)
    )";
    $check=mysqli_query($conn,$query);
    if(!$check){
        echo "Table Not Created";
    }
    else{
        echo "Table Created Successfull";
    }
}
?>