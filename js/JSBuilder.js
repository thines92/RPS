function rps() {
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
		document.getElementById("result").innerHTML = "The result is a tie!";
	}
	else if (userChoice === "rock" && computerPick === "paper") {
		document.getElementById("result").innerHTML = "The computer wins!";
	}
	else if (userChoice === "paper" && computerPick === "scissors") {
		document.getElementById("result").innerHTML = "The computer wins!";
	}
	else if (userChoice === "scissors" && computerPick === "rock") {
		document.getElementById("result").innerHTML = "The computer wins!";
	}
	else {
		document.getElementById("result").innerHTML = "You win!";
	};

/*	document.getElementById("result").innerHTML = computerPick;
	document.getElementById("result").innerHTML = userChoice;*/
}

document.getElementById("callhere").onclick = function() {rps()};
