// Calls drum function based on the button clicked
document.querySelectorAll(".drum").forEach((button) => {
	button.addEventListener("click", function () {
		playDrum(this.innerHTML);
		buttonAnimation(this.innerHTML);
	});
});

// Calls drum function based on the key pressed
document.addEventListener("keydown", function (event) {
	playDrum(event.key);
	buttonAnimation(event.key);
});

// Plays drums
function playDrum(key) {
	var audio;
	switch (key) {
		case "w":
			audio = new Audio("sounds/tom-1.mp3");
			break;
		case "a":
			audio = new Audio("sounds/tom-2.mp3");
			break;
		case "s":
			audio = new Audio("sounds/tom-3.mp3");
			break;
		case "d":
			audio = new Audio("sounds/tom-4.mp3");
			break;
		case "j":
			audio = new Audio("sounds/snare.mp3");
			break;
		case "k":
			audio = new Audio("sounds/crash.mp3");
			break;
		case "l":
			audio = new Audio("sounds/kick-bass.mp3");
			break;
		default:
			return;
	}
	audio.play();
}

function buttonAnimation(key) {
	var activeButton = document.querySelector("." + key);
	activeButton.classList.add("pressed");
	setTimeout(function () {
		activeButton.classList.remove("pressed");
	}, 100);
}
