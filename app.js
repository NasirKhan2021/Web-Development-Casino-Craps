

var outcome = document.getElementById('total');

var show = document.getElementById('show');

var showWins = document.getElementById('wins');

var showLosses = document.getElementById('losses');

var point = 0;

var wins = 0;

var losses = 0;

var message = {
		natural:"You win!",
		craps:"You lose.",
		point:"You made your point. You win!",
		seven:"It's a 7. You lose."
};


document.getElementById('roll').onclick = rollBoth;

document.getElementById('clear').onclick = clear;


function roll(dice){
	var random = Math.floor((Math.random() * 6) + 1);
	document.getElementById(dice).innerHTML = random;
	return random;
}


function clear() {
	point = 0;
	wins = 0;
	losses = 0;
	show.innerHTML = "To start a game, roll the dice!";
	showWins.innerHTML = "0";
	showLosses.innerHTML = "0";
	document.getElementById("delta").innerHTML = "";
	document.getElementById("gamma").innerHTML = "";
	outcome.innerHTML = "";
}


function rollBoth() {
	var dice1 = roll("delta");
	var dice2 = roll("gamma");
	var total = dice1 + dice2;
	outcome.innerHTML = total;
	determineOutcome(total);
}


function determineOutcome(total) {
	if(point == 0){
		if(total == 7 || total == 11){
	
			wins++;
			display("natural", showWins, wins);
		}
		else if(total == 2 || total == 3 || total == 12){
		
			losses++;
			display("craps", showLosses, losses);
		}
		else{
		
			point = total;
	
			show.innerHTML = "Your point is " + point;
		}
	}
	else{
	
		if(total == point){

			wins++;
			display("point", showWins, wins);
			point = 0;
		}


		if(total == 7){

			losses++;
			display("seven", showLosses, losses);
			point = 0;
		}
	}

}


function display(msg, c, w) {
	show.innerHTML = message[msg];
	c.innerHTML = w;
}