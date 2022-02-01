<?php 

$server = "localhost";
$user = "root";
$pass = "";
$database = "talk_to_my_hands"; //name ng database

$conn = mysqli_connect($server, $user, $pass, $database);

if (!$conn) {
    die("<script>alert('Connection Failed.')</script>");
}

?>