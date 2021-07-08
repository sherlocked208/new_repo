
function check(){
	var aquestion1 = document.quiz1.question1.value;

	var correct = 0;


	if (aquestion1 == "08-07-2004") {
		correct++;

	
	var messages = ["Fine, make me your villain."];
	var score;

	if (correct == 1) {
		score = 0;
	}


	document.getElementById("after_submit1").style.visibility = "visible";

	document.getElementById("message1").innerHTML = messages[score];
	
	
	}
	
}

function check2(){
	var aquestion2 = document.quiz2.question2.value;

	var correct = 0;


	if (aquestion2 == "heathens") {
		correct++;


	var messages = ["@coconut_sharks_in_the_water21"];
	var score;

	if (correct == 1) {
		score = 0;
	}


	document.getElementById("after_submit2").style.visibility = "visible";

	document.getElementById("message2").innerHTML = messages[score];


	}
	
}


function check3(){
	var aquestion3 = document.quiz3.question3.value;

	var correct = 0;


	if (aquestion3 == "kod") {
		correct++;

	var messages = ["7777 88 22 6 2 777 444 66 33"];
	var pictures = ["img/mlot.jpg" ];	
	var score;

	if (correct == 1) {
		score = 0;
	}


	document.getElementById("after_submit3").style.visibility = "visible";

	document.getElementById("message3").innerHTML = messages[score];
	
	document.getElementById("picture3").src = pictures[score];

	}
	
}

function check4(){
	var aquestion4 = document.quiz4.question4.value;

	var correct = 0;


	if (aquestion4 == "submarine") {
		correct++;

	

	var messages = ["Tylko nie spalcie domu"];
		var pictures = ["img/adres.png" ];	
	var score;

	if (correct == 1) {
		score = 0;
	}


	document.getElementById("after_submit4").style.visibility = "visible";

	document.getElementById("message4").innerHTML = messages[score];
	
	document.getElementById("picture4").src = pictures[score];



	}
	
}

	

