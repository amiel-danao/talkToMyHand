<?php
session_start();
include 'dbcon.php';
include 'connect.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;
    
//Load Composer's autoloader
require 'vendor/autoload.php';

function sendemail_verify($username,$email,$verification)
{
    $mail = new PHPMailer(true);
    $mail->isSMTP();  
    $mail->SMTPAuth   = true;   
    $mail->Host       = 'smtp.gmail.com'; 
    $mail->Username   = 'defaultbind@gmail.com'; 
    $mail->Password   = 'Kirigaya92200'; 
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS; 
    $mail->Port       = 465; 
    $mail->setFrom('defaultbind@gmail.com',$username);
    $mail->addAddress($email);
    $mail->isHTML(true);                                  //Set email format to HTML
    $mail->Subject = ' TALK TO MY HAND EMAIL VERIFICATION ';

    
    $mail->AltBody = 'This is the body in plain text for non-HTML mail clients';
    $email_temlplate ="
                        <h2>YOU ARE REGISTERED NOW</h2>
                  <h5>Verify your email address to login</h5>
                  <br/><br/>
                  <a href='http://localhost/capstone-main/verify-email.php?token=$verification'>CLICK HERE TO VERIFY</a>";
    $mail->Body    = $email_temlplate;
    $mail->send();
        echo "Success Check your gmail ";
    
  



if(isset($_POST['register_btn']) && isset($_POST['username']) && isset($_POST['usersurname']) && isset($_POST['age'])  && isset($_POST['email'])){
    
$username = $_POST['username'];
$age = $_POST['age'];
$usersurname = $_POST['usersurname'];
$email = $_POST['email'];
$password = md5($_POST['password']);
$cpassword = md5($_POST['cpassword']);
$verification = md5(rand());
$uppercase = preg_match('@[A-Z]@', $password);
$lowercase = preg_match('@[a-z]@', $password);
$number    = preg_match('@[0-9]@', $password);
$specialChars = preg_match('@[^\w]@', $password);

if($password !== $uppercase && $password !==$lowercase && $password!==$number && $password !==$specialChars && strlen($password) < 8) {
    echo 'Password should be at least 8 characters in length and should include at least one upper case letter, one number, and one special character.';
}
$check_email_query = "SELECT email FROM  capstone_user WHERE email = '$email' LIMIT 1";
$check_email_query_run = mysqli_query($conn, $check_email_query);

  
if (isset($_POST['submit'])) {
	$email = $_POST['email'];
	$password = md5($_POST['password']);

	$sql = "SELECT * FROM capstone_user WHERE email='$email' AND password='$password'";
	$result = mysqli_query($conn, $sql);
	if ($result->num_rows > 0) {
		$row = mysqli_fetch_assoc($result);
		$_SESSION['username'] = $row['username'];
		header("Location: start.php");
	} else {
		echo "<script>alert('Woops! Email or Password is Wrong.')</script>";
	}

}




    if(mysqli_num_rows($check_email_query_run)>0)
    {
        $_SESSION['status']="Email ID already exists";
        echo "email is already exist";
        exit();
        header("Location: register.php");

    }
    else{
        $query = "INSERT INTO capstone_user(username,usersurname,age,email,password,verification)VALUES('$username','$usersurname','$age','$email','$password','$verification')";
        $query_run = mysqli_query($conn, $query);
        
        if($query_run){
        sendemail_verify($username,$email,$verification);
        $_SESSION['status']="  <h2>Rergistration Succesfull</h2>
        <h5>Please Check your email</h5>
        <br/><br/>";
        header("Location: register.php");
        }else{
            echo "failed";
        }
    }
}else{
    exit();
    $_SESSION['status']="registration failed";
    header("Location: register.php");
}
}

?>