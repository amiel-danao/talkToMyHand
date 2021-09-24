const fingerImages = 
[
	"aaa.jpg",
	"bbb.jpg",
	"ccc.jpg",
	"ddd.jpg",
	"eee.jpg",
	"iii.jpg",
	"lll.jpg",
	"ooo.jpg",
	"uuu.jpg",
	"vvv.jpg"
];

const maxCorrectGuess = 5;
const fingerImagePath = "images/fingerimages/";
const correctEffectTimeOut = 2000;
const JPG = ".jpg";

var allLetters = ["A","B","C","D","E","I","L","O","U","V"];
var availableLetters = [];
//var guessedAnswers = [];
var currentGuess = 0;
var correctAnswer = "";
var audioElement;
var windAudio;
var correctEffect;
var isGuessing = false;
var gameOver = false;

function startGame(){
	availableLetters = [...allLetters];
	correctEffect = document.getElementById("snackbar");
	setupSound();

	getNextAnswer();
}

function onTryGuess(tryAnswer){
	if(tryAnswer.length <= 0)
		return;
	
	console.log("trying:" + tryAnswer);
	if(tryAnswer == correctAnswer && 
		isGuessing == false &&
		availableLetters.indexOf(tryAnswer) > -1){
			
		isGuessing = true;
		onCorrectGuessed(correctAnswer);
		setTimeout(() => {  isGuessing = false; }, 1000);
	}
}

function onCorrectGuessed(answer){
	console.log("onCorrectGuessed!!! " + answer);
	showCorrect();
	
	audioElement.currentTime = 0;
	audioElement.play();
	
	updateCorrectRow(answer);
	
	let index = availableLetters.indexOf(correctAnswer);
	if(index > -1){
		availableLetters.splice(index, 1);
	}
	currentGuess++;
	if(currentGuess >= maxCorrectGuess){
		levelComplete();
	}
	else{			
		//guessedAnswers.push(correctAnswer);
		getNextAnswer();
	}
	
	
}

function updateCorrectRow(answer){
	let answerRows = $(".answer");
	
	if(currentGuess <= answerRows.length-1){
		answerRows[currentGuess].innerText = answer;
		$(answerRows[currentGuess]).css("background-color", "lime");
		$($(".number")[currentGuess]).css("background-color", "lime");		
	}
}

function getNextAnswer(){
	if(availableLetters.length <= 0)
		return;
	let index = Math.floor(Math.random() * availableLetters.length);
	correctAnswer = availableLetters[index];
	
	let nextImage = correctAnswer + correctAnswer + correctAnswer + JPG;
	$("#clue_image").attr("src", fingerImagePath + nextImage.toLowerCase());
}

function levelComplete(){
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