<?php
session_start();
include ('dbcon.php');
include ('connect.php');

if(isset($_GET['token']))
{
    $token = $_GET['token'];
    $verify="SELECT verification,verify_status FROM capstone_user WHERE verification='$token'LIMIT 1";
    $verify_query_run = mysqli_query($conn, $verify);

    if(mysqli_num_rows($verify_query_run) > 0){
     $row = mysqli_fetch_array($verify_query_run);
    //  echo $row['verification'];
           if($row['verify_status']=="0"){
               $clicked_token = $row['verification'];
               $update_query = "UPDATE capstone_user SET verify_status='1' WHERE verification='$clicked_token' LIMIT 1";
               $update_query_run = mysqli_query($conn, $update_query);

               if($update_query_run){
                $_SESSION['status']="Your account is verified successfully";
                header("Location: login.php");
                exit(0);

               }
               else{
                $_SESSION['status']="Verification Failed";
                header("Location: login.php");
                exit(0);

               }

           }
           else{
            $_SESSION['status']="EMAIL Already verified. please login";
            header("Location: login.php");
            exit(0);

           }
    }
    else{
    $_SESSION['status']="This token does not exist";
    header("Location: login.php");
     }
    }
    else{
    $_SESSION['status'] = "Not Allowed";
    header("Location:login.php");
   }
?>