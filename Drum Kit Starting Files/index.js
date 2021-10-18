document.querySelectorAll(".drum").forEach((button) => {
	button.addEventListener("click", function () {
		console.log(this.innerHTML);
		this.style.color = white;
		// var audio = new Audio("sounds/tom-1.mp3");
		// audio.play();
	});
});
