const fingerImages = 
[
	"aaa.jpg",
	"eee.jpg",
	"iii.jpg",
	"ooo.jpg",
	"uuu.jpg",
];

const maxCorrectGuess = 5;
const fingerImagePath = "images/fingerimages/";
const correctEffectTimeOut = 2000;

var guessedAnswers = [];
var currentGuess = 0;
var correctAnswer = "A";
var audioElement;
var correctEffect;

function startGame(){
	correctEffect = document.getElementById("snackbar");
	setupSound();

	getNextAnswer();
}

function onTryGuess(tryAnswer){
	if(tryAnswer == correctAnswer){
		onCorrectGuessed(correctAnswer);
	}
}

function onCorrectGuessed(answer){
	console.log("onCorrectGuessed!!! " + answer);
	showCorrect();
	let answerRows = $(".answer");
	if(currentGuess < answerRows.length-1){
		answerRows[currentGuess].innerText = answer;
		$(answerRows[currentGuess]).css("background-color", "lime");
		$($(".number")[currentGuess]).css("background-color", "lime");
	}
	
	currentGuess++;
	if(currentGuess >= maxCorrectGuess){
		levelComplete();
		return;
	}
	else{
		
		audioElement.play();
		getNextAnswer();
	}
}

function getNextAnswer(){
	let nextAnswer = "";
	while(nextAnswer == ""){
		nextAnswer = generateRandomClue();
	}
	
	guessedAnswers.push(correctAnswer);
	correctAnswer = nextAnswer;		
}

function generateRandomClue(){
	let randomImage = fingerImages[Math.floor(Math.random() * fingerImages.length)];
	let randomLetter = randomImage.substring(0, 1);
	randomLetter = randomLetter.toUpperCase();
	
	if(guessedAnswers.indexOf(randomLetter) == -1){
		$("#clue_image").attr("src", fingerImagePath + randomImage);
		
		return randomLetter;
	}
	else{
		return "";
	}
}

function levelComplete(){
	bootbox.alert("Congratulations! \nYou win!");
}

function showCorrect(){
  correctEffect.className = "show";
  setTimeout(function(){ correctEffect.className = correctEffect.className.replace("show", ""); }, correctEffectTimeOut);
}

function setupSound(){
	audioElement = document.createElement("audio");
	audioElement.setAttribute("src", "sound/correct.mp3");
	audioElement.addEventListener("ended", function () { audioElement.currentTime = 0; }, false);
}