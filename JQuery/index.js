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
	// $("h1").hide();
	// $("h1").show();
	// $("h1").toggle();
	// $("h1").fadeOut();
	// $("h1").fadeIn();
	// $("h1").fadeToggle();
	// $("h1").slideToggle();
	// $("h1").animate({ opacity: 0.45 });
	// $("h1").animate({ margin: "20%" });
	$("h1")
		.slideUp()
		.slideDown()
		.animate({ opacity: 0.45 })
		.animate({ margin: "20%" });
});

$("a").attr("href", "https://www.google.com/");

$(document).keydown(function (event) {
	$("h1").text(event.key);
});

$("h1").on("mouseover", function () {
	$("h1").css("color", "red");
});
