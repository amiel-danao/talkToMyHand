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

<div id="main_menu">
    <a  href = "tutorial-asl.php" class='tutorial mainButtons'>TUTORIAL</a><br>

    <a href="javascript:void(0)" onclick="toggleLevelSelect(true);" class='start-btn mainButtons'>START GAME</a><br>

    <a class="start-ldb mainButtons" href="#popup1" >LEADERBOARD</a><br>
  
    <a href = "index.html" class='start-exit mainButtons'>EXIT</a>
</div>
	
<div id="level_select" style="display:none;">
	<a href = "talkToMyHand-main/public/index.php" class='tutorial levelMenu' >LEVEL 1</a><br>

    <a href = "talkToMyHand-main/public/index2.php" class="start-btn levelMenu" >LEVEL 2</a><br>
  
    <a href="javascript:void(0)}" onclick="toggleLevelSelect(false);" class='start-exit levelMenu' >BACK</a>
</div>

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
<script>
	const main_menu = document.getElementById("main_menu");
	const level_select = document.getElementById("level_select");

	function toggleLevelSelect(on){
		if(on){
			main_menu.style.display = "none";
			level_select.style.display = "inline-block";
		}
		else{
			main_menu.style.display = "inline-block";
			level_select.style.display = "none";
		}
	}

	function toggleLevelSelectOld(on){
		var mainVisible = 'inline-block';
		var levelVisible = 'none';
		if(on){
			levelVisible = 'inline-block';
			mainVisible = 'none';
		}
		else{
			levelVisible = 'none';
			mainVisible = 'inline-block';
		}
		document.querySelectorAll('.mainButtons').forEach(function(el) {
		   el.style.display = mainVisible;
		});
		
		document.querySelectorAll('.levelMenu').forEach(function(el) {
		   el.style.display = levelVisible;
		});
	}
</script>
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
