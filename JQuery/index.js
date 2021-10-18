// $(document).ready(function () {
// 	$("h1").css("color", "red");
// 	$("h1").addClass("big-title margin-50");
// 	$("h1").removeClass("big-title");
// 	$("h1").hasClass("margin-50");
// });

$("h1").click(function () {
	$("h1").css("color", "purple");
});

$("button").click(function () {
	$("h1").css("color", "pink");
});

$("a").attr("href", "https://www.google.com/");

$(document).keydown(function (event) {
	$("h1").text(event.key);
});

$("h1").on("mouseover", function () {
	$("h1").css("color", "red");
});
