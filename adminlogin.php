<?php 

include 'connect.php';

session_start();

error_reporting(0);

if (isset($_SESSION['username'])) {
    header("Location: adminpanel.php ");
}

if (isset($_POST['submit'])) {
    $username = $_POST['username'];
    $password = md5($_POST['password']);

    $sql = "SELECT * FROM admin WHERE username='$username' AND password='$password'";
    $result = mysqli_query($conn, $sql);
    if ($result->num_rows > 0) {
        $row = mysqli_fetch_assoc($result);
        $_SESSION['username'] = $row['username'];
        header("Location: adminpanel.php ");
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

    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css%22%3E">

    <link rel="stylesheet" type="text/css" href="./css/style.css">

    <title>Admin</title>
</head>
<body>
    <div class="container">
        <form action="" method="POST" class="login-email">
            <p class="login-text" style="font-size: 2rem; font-weight: 800;">Admin</p>
            <div class="input-group">
                <input type="text" placeholder="Username" name="username" value="<?php echo $username; ?>" required>
            </div>
            <div class="input-group">
                <input type="password" placeholder="Password" name="password" value="<?php echo $_POST['password']; ?>" required>
            </div>
            <div class="input-group">
                <button name="submit" class="btn">Login</button>
                <a href = "login.php">back</a>

            </div>

        </form>
    </div>
</body>
</html>