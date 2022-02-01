<!DOCTYPE html>
<html>
<head>
    <title>Tutorial</title>
    <link rel="stylesheet" href="tutorial-asl.css">
    
</head>
 

<meta name="viewport" content="width=device-width, initial-scale=1">


<body>

<div class="slideshow-container">

<div class="mySlides fade">
  <div class="numbertext">1 / 4</div>
  <img src="./images/team/Step01.jpg" style="width:100%">
  <div class="text">Caption One</div>
</div>

<div class="mySlides fade">
  <div class="numbertext">2 / 4</div>
  <img src="./images/team/step22.jpg" style="width:100%">
  <div class="text">Caption Two</div>
</div>

<div class="mySlides fade">
  <div class="numbertext">3 / 4</div>
  <img src="./images/team/Step3.jpg" style="width:100%">
  <div class="text">Caption Three</div>
</div>
  
<div class="mySlides fade">
  <div class="numbertext">4 / 4</div>
  <img src="./images/team/Step4.jpg" style="width:100%">
  <div class="text">Caption Four</div>
</div>


<a class="prev" onclick="plusSlides(-1)">&#10094;</a>
<a class="next" onclick="plusSlides(1)">&#10095;</a>


<a class="start" href="start.php">BACK</a>
<a class="finish" href="talkToMyHand-main/public/index.php">FINISH</a>


</div>
<br>




<script>
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}


function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}
</script>

</body>









</html>