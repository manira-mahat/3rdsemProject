<?php
$conn=mysqli_connect("localhost","root","","anonymous");
$Name=$_POST["Name"];
$Email=$_POST["Email"];
$Password=$_POST["Password"];
if(!$conn){
    echo "Database Connection Failed";
}
else{
    $query="INSERT INTO sign(Name,Email,Password)VALUES('Siddhant','siddhanttimalsina10@gmail.com','anonymous')";
    $check=mysqli_query($conn,$query);
    if(!$check){
        echo "Data Not Inserted";
    }
    else{
        echo "Data Inserted Successfull";
    }
}
?>