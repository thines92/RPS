function rps() {
	var userChoice = document.getElementById('userInput').value.toLowerCase();
	var computerChoice = Math.random();
	var computerPick;
	var image = new Image;

	if (userChoice != "rock" && userChoice != "paper" && userChoice != "scissors") {
		document.getElementById("result").innerHTML = "Please select rock, paper, or scissors!";
	}

	if (computerChoice >= 0 && computerChoice < .33) {
		var computerPick = "rock";
	}
	if (computerChoice >= .33 && computerChoice < .66) {
		var computerPick = "paper";
	}
	if (computerChoice >= .66 && computerChoice <= 1) {
		var computerPick = "scissors";
	};

	if (userChoice === computerPick) {
		document.getElementById("result").innerHTML = "The result is a tie!";
	}
	else if (userChoice === "rock" && computerPick === "paper") {
		document.getElementById("result").innerHTML = "<img src='images/rock-lose.png'>" + "The computer wins!" + "<img src='images/paper-win.png'>";
	}
	else if (userChoice === "paper" && computerPick === "scissors") {
		document.getElementById("result").innerHTML = "<img src='images/paper-lose.png'>" + "The computer wins!" + "<img src='images/scissor-win.png'>";
	}
	else if (userChoice === "scissors" && computerPick === "rock") {
		document.getElementById("result").innerHTML = "<img src='images/scissor-lose.png'>" + "The computer wins!" + "<img src='images/rock-win.png'>";
	}

	else if (userChoice === "rock" && computerPick === "scissors") {
		document.getElementById("result").innerHTML = "<img src='images/rock-win.png'>" + "You win!" + "<img src='images/scissor-lose.png'>";
	}
	else if (userChoice === "paper" && computerPick === "rock") {
		document.getElementById("result").innerHTML = "<img src='images/paper-win.png'>" + "You win!" + "<img src='images/rock-lose.png'>";
	}
	else if (userChoice === "scissors" && computerPick === "paper") {
		document.getElementById("result").innerHTML = "<img src='images/scissor-win.png'>" + "You win!" + "<img src='images/paper-lose.png'>";
	};

/*	document.getElementById("result").innerHTML = computerPick;
	document.getElementById("result").innerHTML = userChoice;*/
}

document.getElementById("callhere").onsubmit = function() {rps()};
