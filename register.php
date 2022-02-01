<?php 

include 'connect.php';

error_reporting(0);

session_start();

 


?>
<!DOCTYPE html>
<html>
<head>
    <link rel="shortcut icon" type="image/x-icon" href="favicon.ico" />  
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">

	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@5.15.4/css/fontawesome.min.css">
	<script src="https://kit.fontawesome.com/67fa609be1.js" crossorigin="anonymous"></script>
	<link rel="stylesheet" type="text/css" href="./css/style.css">

	<title>Register Form</title>
</head>
<body>
<div class="container">
<div class="alert">
 		
				<?php
				if(isset($_SESSION['status'])){
					echo"<h4>".$_SESSION['status']."</h4>";
					unset($_SESSION['status']);
				}
				?>
		<form action="" method="" class="login-email">
            <p class="login-text" style="font-size: 2rem; font-weight: 800;">Register</p>
			<div class="input-group">
		
				<input type="text" placeholder="Name" name="username" value="<?php echo $username; ?>" required>
			</div>

			<div class="input-group">
				<input type="text" placeholder="Surname" name="usersurname" value="<?php echo $usersurname; ?>" required>
			</div>

			<div class="input-group">
				<input type="email" placeholder="Email" name="email" value="<?php echo $email; ?>" required>
			</div>
			<div class="input-group">
				<input type="number" placeholder="Age" name="age" value="<?php echo $age; ?>" required>
			</div>
			<div class="input-group">
				<input type="password" placeholder="Password" name="password" id ="myInput" value="" required>
			</div>
 			<div class="input-group">
				<input type="password" placeholder="Confirm Password" name="cpassword" value="" id = "myInput2" required>
			</div>
			<div class="policy">
				<p>Take time to read the privacy policy</p>
				<input type="checkbox" placeholder="policy" name="policy" required><a href="policy.php">POLICY</a></input>
			
			</div>
			<div class="input-group">
				<button  name="register_btn" class="btn" id="btn">Register</button>
			</div>
			<p class="login-register-text">Have an account? <a href="login.php">Login Here</a>.</p>
		</form>
		
			</div>
			<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js" referrerpolicy="no-referrer"></script>
			<script>
				$('#btn').click(function(){
					console.log("Wew");
					if($('password').val() !=  $('cpassword').val()){
						alert('Password Not Matched');
						return:false;
					}
				});	
			</script>
</body>
</html>