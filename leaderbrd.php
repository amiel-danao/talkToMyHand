<?php
    require('./connect.php');
    $sqlldrbrd = mysqli_query($conn,"SELECT * FROM `capstone_user` 
    INNER JOIN `leaderboards` ON capstone_user.id = leaderboards.USERID ");
    $data=[];
    $string = 'asdas';
    while($result = mysqli_fetch_array($sqlldrbrd)){
        if(!isset($data[$result['id']])){
            $data[$result['id']]=[
                
                'count'=> $result['COUNT'],
                'usersurname'=> $result['usersurname'],
                'NAME' => $result['NAME'],
                'age'  => $result['age'],
                'time' => $result['HOURS'].":".$result['MINUTES'].":".$result['SECONDS']
                  
            ];
        }
    }
    sort($data);
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Leaderboards</title>
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
    </style>
</head>
<body>
<table>
<table class="content-table">
<thead>
    <a href = "adminpanel.php">back</a>
        <tr>
        <th>Ranking</th>
            <th>Name</th>
            <th>userName</th>
            <th>Age</th>
            <th>TIME</th>
            

        </tr>
        </thead>
        <tbody>
        <?php foreach($data as $datas){?>
        
            <tr>
            <td><?php echo $datas['NAME']?></td>
            <td><?php echo $datas['usersurname'] ?></td>
            <td><?php echo $datas['age']?></td>
            <td><?php echo $datas['time']?></td>
        </tr>
        </tbody>
        <?php }?>
        </table>

</body>
</html>