// Karel Code Sample

function main() {
	goInCircle();
	goInCircle();
}

function goInCircle() {
	move();
	turnLeft();
	move();
	turnLeft();
}

// Karel Code Challenge 1

function main() {
	move4Times();
	turnLeft();
	move4Times();
}

function move4Times() {
	move();
	move();
	move();
	move();
}

// Karel Code Challenge 2

function main() {
	beepersRight();
	upTurnLeft();
	beepersLeft();
	upTurnRight();
	beepersRight();
	upTurnLeft();
	beepersLeft();
	upTurnRight();
	beepersRight();
}

function beepersRight() {
	putBeeper();
	move();
	move();
	putBeeper();
	move();
	move();
	putBeeper();
}

function beepersLeft() {
	move();
	putBeeper();
	move();
	move();
	putBeeper();
	move();
}

function upTurnLeft() {
	turnLeft();
	move();
	turnLeft();
}

function upTurnRight() {
	turnRight();
	move();
	turnRight();
}

// Functions with Params

function getMilk(money) {
	console.log("leaveHouse");
	console.log("moveRight");
	console.log("moveRight");
	console.log("moveUp");
	console.log("moveUp");
	console.log("moveUp");
	console.log("moveUp");
	console.log("moveRight");
	console.log("moveRight");
	console.log("Buy " + Math.floor(money / 1.5) + " bottles of milk");
	console.log("moveLeft");
	console.log("moveLeft");
	console.log("moveDown");
	console.log("moveDown");
	console.log("moveDown");
	console.log("moveDown");
	console.log("moveLeft");
	console.log("moveLeft");
	console.log("enterHouse");
}

getMilk(5);

// Functions with Return

function getMilk(money) {
	console.log("leaveHouse");
	console.log("moveRight");
	console.log("moveRight");
	console.log("moveUp");
	console.log("moveUp");
	console.log("moveUp");
	console.log("moveUp");
	console.log("moveRight");
	console.log("moveRight");
	console.log("Buy " + calcBottles(money, 1.5) + " bottles of milk");
	console.log("moveLeft");
	console.log("moveLeft");
	console.log("moveDown");
	console.log("moveDown");
	console.log("moveDown");
	console.log("moveDown");
	console.log("moveLeft");
	console.log("moveLeft");
	console.log("enterHouse");
	return calcChange(money, 1.5);
}

function calcBottles(startingMoney, costPerBottle) {
	return Math.floor(startingMoney / costPerBottle);
}

function calcChange(startingMoney, costPerBottle) {
	return startingMoney % costPerBottle;
}

console.log("Hello, here is your " + getMilk(5) + " change");
