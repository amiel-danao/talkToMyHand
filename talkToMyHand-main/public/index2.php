<?php
     include('../../connect.php');
    session_start();
    if(!isset($_SESSION['username'])){
        header("location:../../login.php");
    }

?>

<!DOCTYPE html>
<html>
<head>
  <!-- Required meta tags -->
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="shortcut icon" type="image/jpg" href="images/favico.jpg"/>
	<title>Talk to my hands</title>

	<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU" crossorigin="anonymous">

	<link href="css/custom.css" rel="stylesheet">
  
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
	<link href="https://fonts.googleapis.com/css2?family=Rowdies:wght@700&display=swap" rel="stylesheet">
	<link rel="stylesheet" href="//code.jquery.com/ui/1.13.1/themes/base/jquery-ui.css">
	
</head>
<body>
<div class="container-fluid">
	<div class="row">
	<div class="col-6">
	<div class="row">
	<div class="text-center bordered_div">
	<p id="clue_text" class="letter_text"></p>
	</div>
		  <div id="video-container" class="bordered_div">
			<video id="pose-video" class="layer" playsinline></video>
			<canvas id="pose-canvas" class="layer"></canvas>
			<div id="pose-result" class="layer"></div>
		  </div>
	  </div>
  </div>
	  
	  
	  <div class="col-6 bordered_div container-fluid">
	  
		  
		  <table class="table table-hover">
		  <thead>
			<tr>
			  <th scope="col">Word</th>
			</tr>
		  </thead>
		  <tbody>
			<tr>
			  <th class="letter_text number" scope="row"></th>
			  <td class="table-light answer fs-2"></td>
			</tr>
			<tr>
			  <th class="letter_text number" scope="row"></th>
			  <td class="table-light answer fs-2"></td>
			</tr>
			<tr>
			  <th class="letter_text number" scope="row"></th>
			  <td class="table-light answer fs-2"></td>
			</tr>
			<!--<tr>
			  <th class="letter_text number" scope="row"></th>
			  <td class="table-light answer fs-2"></td>
			</tr>
			<tr>
			  <th class="letter_text number" scope="row"></th>
			  <td class="table-light answer fs-2"></td>
			</tr> -->
		  </tbody>
		</table>
		  
		  </div>
	  
	  </div>
	  <a class = "back" href="../../start.php">Back</a>
	  
  </div>
  
  <div id="snackbar">Correct!<i class="fas fa-check"></i></div>
	
<div id="dialog-message" title="Wrong answer">
  <p>Incorrect hand gesture, please try again.</p>
</div>
  
  <footer>
	<label for="drawPoints">
	   <input type="checkbox" id="drawPoints" name="drawPoints" value="yes"> Draw points 
	</label>
  </footer>
  
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js" integrity="sha512-894YE6QWD5I59HgZOGReFYm4dnWc1Qt5NtvYSaNcOP+u1T9qYdvdihz0PPSiiqn/+/3e7Jo4EaG7TubfWGUrMQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
  <script src="https://code.jquery.com/ui/1.13.1/jquery-ui.js"></script>
  <script src="https://kit.fontawesome.com/882462feea.js" crossorigin="anonymous"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-/bQdsTh/da6pkI1MST/rWKFNjaCP5gBSY4sEBT38Q/9RBh9AH40zEOg7Hlq2THRZ" crossorigin="anonymous"></script>
  
  <script src="https://cdnjs.cloudflare.com/ajax/libs/bootbox.js/5.5.2/bootbox.min.js" integrity="sha512-RdSPYh1WA6BF0RhpisYJVYkOyTzK4HwofJ3Q7ivt/jkpW6Vc8AurL1R+4AUcvn9IwEKAPm/fk7qFZW3OuiUDeg==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
  <!-- Require the peer dependencies of handpose. -->
	<script src="https://unpkg.com/@tensorflow/tfjs-core@2.1.0/dist/tf-core.js"></script>
	<script src="https://unpkg.com/@tensorflow/tfjs-converter@2.1.0/dist/tf-converter.js"></script>

	<!-- You must explicitly require a TF.js backend if you're not using the tfs union bundle. -->
	<script src="https://unpkg.com/@tensorflow/tfjs-backend-webgl@2.1.0/dist/tf-backend-webgl.js"></script>
	<!-- Alternatively you can use the WASM backend: <script src="https://unpkg.com/@tensorflow/tfjs-backend-wasm@2.1.0/dist/tf-backend-wasm.js"></script> -->

	<script src="https://unpkg.com/@tensorflow-models/handpose@0.0.6/dist/handpose.js"></script>
	
	<script src="js/fingerpose.js" type="text/javascript"></script>

	<script type="module">
	  // Import the functions you need from the SDKs you need
	  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-app.js";
	  // TODO: Add SDKs for Firebase products that you want to use
	  // https://firebase.google.com/docs/web/setup#available-libraries

	  // Your web app's Firebase configuration
	  const firebaseConfig = {
		apiKey: "AIzaSyD2Rcpmidy7z9m3ct_ArQt0yzZ05MhYB0k",
		authDomain: "handgesture-845ef.firebaseapp.com",
		projectId: "handgesture-845ef",
		storageBucket: "handgesture-845ef.appspot.com",
		messagingSenderId: "727097906945",
		appId: "1:727097906945:web:7d29827d550b9a35a3ed00"
	  };

	  // Initialize Firebase
	  const app = initializeApp(firebaseConfig);
	</script>
	
	<script>
		var count=0,hr=0,min=0,sec=0,username="<?php echo $_SESSION['username']?>";
	</script>
	<script src="js/game2.js"></script>
	<script src="js/alphabet.js"></script>
	<script src="js/detector.js"></script>
</body>
</html>
