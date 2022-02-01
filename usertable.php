<?php

    require('./connect.php');

    $queryuser = "SELECT * FROM capstone_user";
    $sqluser = mysqli_query($conn,$queryuser);
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Users</title>
    <style>
        *{

font-family: "Poppins" , sans-serif;
text-decoration:none;
}
body{
background-size: cover;
background-image: url("frontpage2.jpg");

}
.content-table{
background-color: #ffffff;
border-collapse: collapse;
margin: 25px 0;
font-size:1em;
border-radius:5px 5px 0 0;
overflow: hidden;
box-shadow: 0 0 20px rgba(0,0,0,0.15);
width: 100%;

}
.content-table thead tr{
background-color:#00CED1;
color: #ffffff;
text-align: left;
font-weight: bold;
}
.content-table th,

.content-table td{
padding: 15px 17px;
font-family: "Poppins" , sans-serif;
}
.content-table tbody tr{
border-bottom: 1px solid #dddddd;
}
.content-table tbody tr:nth-of-type(even) {
background-color:#f3f3f3;
}
.content-table tbody tr:last-of-type{
border-bottom:2px solid #f3f3f3;
}
.content-table tbody tr.active-row{
font-weight: bold;
color:#00BFFF;
}
.back{
    position: absolute;
    color:block;
    font-weight: bold;
    font-size:1.1em;
    right: 15px;
}


    </style>
</head>
<body>
<table>
<table class="content-table">
<thead>
    <a href = "adminpanel.php" class="back">back</a>
        <tr>
            <th>Name</th>
            <th>Surname</th>
            <th>Age</th>
            <th>Email</th>
            <th>Time</th>

        </tr>
        <thead>
            <tbody>
        <?php while($result = mysqli_fetch_array($sqluser)){ ?>
        <tr>
        <td><?php echo $result['usersurname'] ?></td>
            <td><?php echo $result['username'] ?></td>
            <td><?php echo $result['age'] ?></td>
            <td><?php echo $result['email'] ?></td>
            <td><?php echo $result['time'] ?></td>
       </tr>
        </tbody>
        <?php } ?>
        </table>

</body>
</html>
