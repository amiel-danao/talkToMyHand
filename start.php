<?php
    session_start();
    require('./connect.php');
    if(!isset($_SESSION['username'])){
        header("location:login.php");
    }
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href=" button.css">


</head>




<body>

    <p class="title">TALK TO MY HANDS</p>

    <a  href = "tutorial-asl.php" class='tutorial'>TUTORIAL</a><br>

    <a href = "talkToMyHand-main/public/index.php" class='start-btn'>START GAME</a><br>

    <a class="start-ldb" href="#popup1" >LEADERBOARD</a><br>
  
    <a href = "index.html" class='start-exit'>EXIT</a>


<div id="popup1" class="overlay">
    <div class="popup">
        <h2>LEADERBOARD</h2>
        <hr/>
        <div class="box">
            <div>PLAYERNAME</div>
            <div>HIGHSCORE</div>
        </div>
        
        <a class="close" href="#">&times;</a>
        <div class="content">
            <!-- display -->
        </div>
    </div>

</div>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.js"></script>
    <script>
        $.post('talkToMyHand-main/public/data.php',{main:true},
        function(data, status){
            if(status == 'success'){
                var obj = JSON.parse(data);
                var content = $('.content').html('');
                var row ='';
                var count= 1;
                if(Object.keys(obj.data).length <=0){
                    row+='<div>No data Found</div><div>No data Found</div>';
                }else{
                    for(var key in obj.data){
                        row +='<div>'+count+'.'+obj.data[key].name+'</div><div>'+obj.data[key].time+'</div>';
                        count++;
                    }
                }content.append(row);
            }
        });
    </script>
</body>
</html>