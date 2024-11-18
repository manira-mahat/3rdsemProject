<?php

$conn=mysqli_connect("localhost","root","");
if(!$conn){
    echo "Server Connection Failed";
}
else{
    $query="CREATE DATABASE ANONYMOUS";
    $check=mysqli_query($conn,$query);
    if(!$check){
        echo "Database Not Created";
    }
    else{
        echo "Database Created Successfully";
    }
}
?>

