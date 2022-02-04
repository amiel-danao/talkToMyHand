
const answersImagePath = "images/answerImages/";
const fingerImagePath = "images/fingerimages/";
const correctEffectTimeOut = 2000;
const JPG = ".jpg";


var allWords = ["dog", "cow", "bug", "box", "bus"];
var availableLetters = [];
var currentGuessLetterIndex = 0;
var correctAnswer = "";
var currentWord = "";
var audioElement;
var windAudio;
var correctEffect;
var isGuessing = false;
var gameOver = false;

function startGame(){
	availableWords = [...allWords];
	correctEffect = document.getElementById("snackbar");
	setupSound();

	giveNextWord();
}

function onTryGuess(tryAnswer){
	if(tryAnswer.length <= 0)
		return;
	let currentLetter = currentWord.substring(currentGuessLetterIndex, currentGuessLetterIndex+1);
	console.log("trying letter:" + tryAnswer);
	if(isGuessing == false && tryAnswer.toLowerCase() == currentLetter.toLowerCase()){
		isGuessing = true;
		onCorrectGuessed(correctAnswer);
		setTimeout(() => {  isGuessing = false; }, 1000);
	}
}

function giveNextWord(){
	let index = Math.floor(Math.random() * availableWords.length);
	currentWord = availableWords[index];
	currentGuessLetterIndex = 0;
	
	$(".number").each(function( index ) {
		$(this).css("background-color", "green");
		$(this).text(currentWord.substring(index, index + 1).toUpperCase());
		$(this).css("padding-left", "35px");
	});
	
	$("tbody").css("background-image", "url('" + answersImagePath + currentWord + JPG + "')");
	$("tbody").css("background-size", "cover");
	
	getNextLetter();
}

function onCorrectGuessed(answer){
	console.log("onCorrectGuessed!!! " + answer);
	showCorrect();
	
	audioElement.currentTime = 0;
	audioElement.play();
	
	updateCorrectRow(currentGuessLetterIndex);

        var correctGestureImage = $(".answer")[currentGuessLetterIndex];

	let letter = currentWord.substring(correctGestureImage, correctGestureImage + 1);
	let imageFileName = (letter+letter+letter) + JPG;
	console.log(currentWord);
	console.log(imageFileName);
	correctGestureImage.css("background-image", "url('" + fingerImagePath + imageFileName + "')");
	correctGestureImage.css("background-size", "cover");
	correctGestureImage.css("padding-right", "20px");
	
	
	currentGuessLetterIndex++;
	
	if(currentGuessLetterIndex >= currentWord.length){
		let index = availableWords.indexOf(currentWord);
		if(index > -1){
			availableWords.splice(index, 1);
		}
		
		if(availableWords.length <= 0){
			levelComplete();
		}
		else{
                     setTimeout(() => { 
			giveNextWord();
		     }, 20000 );
		}
	}
	else{
		getNextLetter();
	}
	
	
}

function updateCorrectRow(index){
	let answerRows = $(".number");
	
	if(index <= answerRows.length-1){
		//answerRows[index].innerText = answer;
		//$($(".number")[index]).css("background-color", "rgba(0, 0, 0, 0)");
		$(answerRows[index]).css("background-color", "rgba(0, 0, 0, 0)");
	}
}

function getNextLetter(){
	//let index = Math.floor(Math.random() * availableWords.length);
	//let nextImage = correctAnswer + correctAnswer + correctAnswer + JPG;
	correctAnswer = currentWord.substring(currentGuessLetterIndex, currentGuessLetterIndex+1);
	$("#clue_text").text(correctAnswer.toUpperCase());
}

function levelComplete(){
	$.post('data.php',{count:count,hours:hr,minute:min,second:sec,username:username},
	function(data,status){
		if(data == 'success'){
			console.log(data);
		}else{
			console.log(data);
		}
	});
	bootbox.alert("Congratulations! \nYou win!");
	$("#clue_image").attr("src", "images/capstone_logo.jpg");
	gameOver = true;
	winAudio.currentTime = 0;
	winAudio.play();
	
}

function showCorrect(){
  correctEffect.className = "show";
  setTimeout(function(){ correctEffect.className = correctEffect.className.replace("show", ""); }, correctEffectTimeOut);
}

function setupSound(){
	winAudio = document.createElement("audio");
	winAudio.setAttribute("src", "https://www.soundjay.com/human/sounds/applause-01.mp3");

	winAudio.addEventListener("ended", function () { winAudio.currentTime = 0; }, false);
	
	audioElement = document.createElement("audio");
	audioElement.setAttribute("src", "sound/correct.mp3");
	audioElement.addEventListener("ended", function () { audioElement.currentTime = 0; }, false);
}
