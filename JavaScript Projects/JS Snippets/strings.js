// Concatenation

var message = "Hello";
var myName = "Akash";

alert(message + " there, " + myName);

// Length

var tweet = prompt("Compose your tweet:");
var tweetCount = tweet.length;

alert(
	"You have written " +
		tweetCount +
		" characters, you have " +
		(280 - tweetCount) +
		" characters left"
);

// Slicing

var tweet = prompt("Compose your tweet:");
var tweetUnder280 = tweet.slice(0, 280);

alert(tweetUnder280);
// alert(prompt("Compose your tweet:").slice(0, 280));

// toUpper and toLower

var yourName = prompt("What is your name?");
alert(
	"Hello, " +
		yourName.slice(0, 1).toUpperCase() +
		yourName.slice(1).toLowerCase()
);
