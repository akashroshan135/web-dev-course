// If-Else

prompt("What is your name?");
prompt("What is their name?");
var loveScore = Math.floor(Math.random() * 100) + 1;

if (loveScore > 70) {
	alert(
		"Your love score is " +
			loveScore +
			"%" +
			". You love each other like Kanye loves Kanye."
	);
} else {
	alert("Your love score is " + loveScore + "%");
}

// Combing Comparators

prompt("What is your name?");
prompt("What is their name?");
var loveScore = Math.floor(Math.random() * 100) + 1;

if (loveScore > 70) {
	alert(
		"Your love score is " +
			loveScore +
			"%" +
			". You love each other like Kanye loves Kanye."
	);
}
if (loveScore > 30 && loveScore <= 70) {
	alert("Your love score is " + loveScore + "%");
}
if (loveScore <= 30) {
	alert(
		"Your love score is " +
			loveScore +
			"%" +
			". You go together other like oil and water."
	);
}
