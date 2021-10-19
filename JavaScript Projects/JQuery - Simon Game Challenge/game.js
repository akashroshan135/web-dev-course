var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];
var userClickedPattern = [];

var started = false;
var level = 0;

$(document).on("keydown", function () {
	if (!started) {
		$("#level-title").text("Level " + level);
		nextSequence();
		started = true;
	}
});

function nextSequence() {
	userClickedPattern = [];

	level++;
	$("#level-title").text("Level " + level);

	var randomNumber = Math.floor(Math.random() * 4);
	var randomChosenColour = buttonColours[randomNumber];
	gamePattern.push(randomChosenColour);
	$("#" + randomChosenColour)
		.fadeOut(100)
		.fadeIn(100);
	playSound(randomChosenColour);
}

$(".btn").on("click", function () {
	var userChosenColour = this.id;
	userClickedPattern.push(userChosenColour);

	animatePress(userChosenColour);
	playSound(userChosenColour);

	checkAnswer(userClickedPattern.length - 1);
});

function playSound(color) {
	new Audio("sounds/" + color + ".mp3").play();
}

function animatePress(currentColour) {
	var buttonPressed = $("#" + currentColour);
	buttonPressed.addClass("pressed");
	setTimeout(() => buttonPressed.removeClass("pressed"), 100);
}

function checkAnswer(currentLevel) {
	if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
		if (userClickedPattern.length === gamePattern.length) {
			setTimeout(function () {
				nextSequence();
			}, 1000);
		}
	} else {
		new Audio("sounds/wrong.mp3").play();
		$("body").addClass("game-over");
		setTimeout(() => $("body").removeClass("game-over"), 200);
		$("#level-title").text("Game Over, Press Any Key to Restart");
		startOver();
	}
}

function startOver() {
	level = 0;
	gamePattern = [];
	started = false;
}
