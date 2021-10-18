// document.querySelectorAll(".drum").forEach((button) => {
// 	button.addEventListener("click", () => alert("clicked"));
// });

var numberOfDrums = document.querySelectorAll(".drum").length;

for (let index = 0; index < numberOfDrums; index++) {
	document
		.querySelectorAll(".drum")
		[index].addEventListener("click", () => alert("clicked"));
}
