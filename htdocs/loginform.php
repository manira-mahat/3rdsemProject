<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css">
    
    <link rel="stylesheet" href="stylephp.css">
    <title>Modern Login Page | AsmrProg</title>
</head>

<body>
    
    <header class="l-header">
        <nav class="nav bd-grid">
            <div>
                <a href="#" class="nav__logo">αγορά</a>
            </div>
            
            <div class="nav__toggle" id="nav-toggle">
                <i class='bx bx-menu'></i>
            </div>

            <div class="nav__menu" id="nav-menu">
                <div class="nav__close" id="nav-close">
                    <i class='bx bx-x'></i>
                </div>
                <ul class="nav__list">
                    <li class="nav__item"><a href="#home" class="nav__link">Home</a></li>
                    <li class="nav__item"><a href="#shop" class="nav__link">Shop</a></li>
                    <li class="nav__item"><a href="#about" class="nav__link">About</a></li>
                    <li class="nav__item"><a href="#contact" class="nav__link">Contact</a></li>
                </ul>

                
            </div>
        </nav>
    </header>

    <div class="container" id="container">
        <div class="form-container sign-up">
            <form method="POST">
                <h1>Create Account</h1>
                <div class="social-icons">
                    <a href="#" class="icon"><i class="fa-brands fa-google-plus-g"></i></a>
                    <a href="#" class="icon"><i class="fa-brands fa-facebook-f"></i></a>
                    <a href="#" class="icon"><i class="fa-brands fa-github"></i></a>
                    <a href="#" class="icon"><i class="fa-brands fa-linkedin-in"></i></a>
                </div>
                <span>or use your email for registeration</span>
                <input type="text" placeholder="Name" class="Name" name="Name">
                <input type="email" placeholder="Email" class="Email" name="Email">
                <input type="password" placeholder="Password" class="Password" name="Password">
                <button type="submit" name="submit" value="Sign  Up">Sign UP</button>
            </form>
        </div>
        <div class="form-container sign-in">
            <form method="POST">
                <h1>Sign In</h1>
                <div class="social-icons">
                    <a href="#" class="icon"><i class="fa-brands fa-google-plus-g"></i></a>
                    <a href="#" class="icon"><i class="fa-brands fa-facebook-f"></i></a>
                    <a href="#" class="icon"><i class="fa-brands fa-github"></i></a>
                    <a href="#" class="icon"><i class="fa-brands fa-linkedin-in"></i></a>
                </div>
                <span>or use your email password</span>
                <input type="email" placeholder="Email" name="Email">
                <input type="password" placeholder="Password" name="Password">
                <a href="#">Forget Your Password?</a>
                <button type="submit" name="login" value="Sign  In">Sign In</button>
            </form>
        </div>
        <div class="toggle-container">
            <div class="toggle">
                <div class="toggle-panel toggle-left">
                    <h1>Welcome Back!</h1>
                    <p>Enter your personal details to become the member of our website</p>
                    <button class="hidden" id="login">Sign In</button>
                </div>
                <div class="toggle-panel toggle-right">
                    <h1>Hello - αγορά</h1>
                    <p>Register with your personal details to use all of site features</p>
                    <button class="hidden" id="register">Sign Up</button>
                </div>
            </div>
        </div>
    </div>

    <script src="script.js"></script>
</body>

</html>


<?php

$conn=mysqli_connect("localhost","root","","anonymous");

if(!$conn){
    echo "Database Connection Failed";
}
else{
  
    $query = "SELECT * FROM sign"; // SQL query to select all columns from 'sign' table
    $result = mysqli_query($conn, $query); // Execute the query using mysqli_query
    
    if (!$result) {
        // Query execution failed, handle the error
       // echo 'Error: ' . mysqli_error($conn);
    } else {
        
        // Query executed successfully
        while ($data = mysqli_fetch_array($result)) {
            if(isset($_POST['login'])){
                $Password = $_POST['Password'];
                $Email = $_POST['Email'];
                if($Email==$data["Email"] && $Password==$data["Password"]){
                    echo "Login Successfull";
                    //Explore Youtube To navigate to home screen
                }
                else{
                    echo "Login Failed";
                }
            }
           
            
      }}}
      $query = "SELECT * FROM sign"; // SQL query to select all columns from 'sign' table
    $result = mysqli_query($conn, $query); 
    $Email="False";// Execute the query using mysqli_query
    
    if (!$result) {
        // Query execution failed, handle the error
        echo 'Error: ' . mysqli_error($conn);
    } else {
        
        // Query executed successfully
        while ($data = mysqli_fetch_array($result)) {
            if(isset($_POST['submit'])){
                $Email = $_POST['Email'];
                if($Email==$data["Email"]){
                    echo "Account Already Exist";
                    $Email="True";
                }
            }
                


            if($Email!="True"){
                if(isset($_POST['submit'])){
                    $Name = $_POST['Name'];
                    $Email = $_POST['Email'];
                    $Password = $_POST['Password'];
                    $query="INSERT INTO sign(Name,Email,Password)VALUES('$Name','$Email','$Password')";
                $check=mysqli_query($conn,$query);
                if(!$check){
                    echo "Data Not Inserted";
                }
                else{
                    echo "Data Inserted Successfull";
                }

            }
            }
            }
           
            
    
}
?>

