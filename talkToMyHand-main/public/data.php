<?php
    include('../../connect.php');
    if(isset($_POST['count']) && isset($_POST['hours']) && isset($_POST['minute']) && isset($_POST['second']) && isset($_POST['username'])){
        $count = $_POST['count'];
        $hours = $_POST['hours'];
        $minute = $_POST['minute'];
        $second = $_POST['second'];
        (int)$username = $_POST['username'];
        $check = mysqli_query($conn,"SELECT * FROM `capstone_user` WHERE id = $username");
        $fetch = mysqli_fetch_assoc($check);
        $name = $fetch['username'];
        $query = mysqli_query($conn,"INSERT INTO `leaderboards`(`NAME`,`USERID`, `COUNT`, `HOURS`, `MINUTES`, `SECONDS`) VALUES ('$name',$username,$count,$hours,$minute,$second)");
        if($query){
            echo 'success';
        }else{
            echo $count." ".$hours." ".$minute." ". $second." ".$username;
        }
    }
    
    
    
    else if(isset($_POST['main'])){
        $query = mysqli_query($conn,"SELECT * FROM `leaderboards` ORDER BY COUNT ASC");
        $data =[];
        while($fetch = mysqli_fetch_assoc($query)){
            if(!isset($data[$fetch['NAME']])){
                $data[$fetch['NAME']] = [
                    'count' => $fetch['COUNT'],
                    'name' => $fetch['NAME'],
                    'time' => $fetch['HOURS'].":".$fetch['MINUTES'].":".$fetch['SECONDS'],
                ];   
            }
        }sort($data);
        echo json_encode([
            'data' => $data,
        ]);return;
   
    // end loop;
   }

    

?>
