var userChoice = prompt("Please choose: Rock, Paper or Scissors?").toLowerCase();

var computerChoice = Math.random();
var computerPick;

if (computerChoice < .33) {
	var computerPick = "rock";
}
if (computerChoice >= .33 || computerChoice < .66) {
	var computerPick = "paper";
}
if (computerChoice >= .66) {
	var computerPick = "scissors";
};

if (userChoice === computerPick) {
	document.write("The result is a tie!");
	userChoice = prompt("Please choose: Rock, Paper or Scissors?").toLowerCase();
}
else if (userChoice === "rock" && computerPick === "paper") {
	document.write("The computer wins!");
}
else if (userChoice === "paper" && computerPick === "scissors") {
	document.write("The computer wins!");
}
else if (userChoice === "scissors" && computerPick === "rock") {
	document.write("The computer wins!");
}
else {
	document.write("You win!");
};



document.write(userChoice);
document.write(computerPick);