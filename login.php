<?php 

include 'connect.php';

session_start();

error_reporting(0);
if (isset($_POST['submit'])) {
	$email = $_POST['email'];
	$password = md5($_POST['password']);

	$query = mysqli_query($conn,"SELECT * FROM capstone_user WHERE email='$email' AND `password`='$password'");
	if($count = mysqli_num_rows($query) >0) {
		$row = mysqli_fetch_assoc($query);
		// check if status equal to 0
		if($row['verify_status'] == 0){
			// create get method in link
			header("Location: login.php?alert=Check Your Verification Email");
		}else{
			$_SESSION['username'] = $row['id'];
			header("Location: start.php");
		}
	} else {
		echo "<script>alert('Woops! Email or Password is Wrong.')</script>";
	}
}



?>
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">

	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">

	<link rel="stylesheet" type="text/css" href="./css/style.css">

	<title>Login Form</title>
</head>
<body>
	<div class="container">
	
		<form action="login.php" method="POST" class="login-email">
			<p class="login-text" style="font-size: 2rem; font-weight: 800;">Login</p>
			<?php if(isset($_GET['alert'])){?>
				<p><?php echo $_GET['alert'] ?></p>
			<?php }?>
			<div class="input-group">
				<input type="email" placeholder="Email" name="email" value="" required>
			</div>
			<div class="input-group">
				<input type="password" placeholder="Password" name="password" id = "logi" value="" required>
			</div>
			<input type="checkbox" onclick="myFunction()">Show Password
			<div class="input-group">
				<button name="submit" class="btn">Login</button>
			</div>
		</form>
		<p class="login-register-text"><a href="register.php">Create Account</a><br>
		<a href ="adminlogin.php">Admin Account</a><br>
		<a href ="index.html">Back to Homepage</a></p>
	     
	</div>

	<script>
				function myFunction() {
  var x = document.getElementById("logi");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}
</script>
</body>
</html>