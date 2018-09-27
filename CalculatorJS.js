function add() {
	var answer;
	var	input1 = document.getElementById("numb1").value;
	var	input2 = document.getElementById("numb2").value;
	input1 = Number(input1);
	input2 = Number(input2);
	console.log('I AM ADDING: ' + input1 + ' and ' + input2);
	answer = input1 + input2;

	document.getElementById("answer").innerHTML = answer;
}

function subtract() {
	var answer;
	var	input1 = document.getElementById("numb1").value;
	var	input2 = document.getElementById("numb2").value;
	input1 = Number(input1);
	input2 = Number(input2);
	console.log('I AM SUBTRACTING ' + input1 + ' and ' + input2);
	answer = input1 - input2;

	document.getElementById("answer").innerHTML = answer;
}

function multiply() {
	var answer;
	var	input1 = document.getElementById("numb1").value;
	var	input2 = document.getElementById("numb2").value;
	input1 = Number(input1);
	input2 = Number(input2);
	console.log('I AM MULTIPLYING ' + input1 + ' and ' + input2);
	answer = input1 * input2;

	document.getElementById("answer").innerHTML = answer;
}

function divide() {
	var answer;
	var	input1 = document.getElementById("numb1").value;
	var	input2 = document.getElementById("numb2").value;
	input1 = Number(input1);
	input2 = Number(input2);
	console.log('I AM DIVIDING ' + input1 + ' and ' + input2);
	answer = input1 / input2;

	document.getElementById("answer").innerHTML = answer;
}

function exponent() {
	var answer;
	var input1 = document.getElementById("numb1").value;
	var input2 = document.getElementById("numb2").value;
	console.log(input1 + ' TO THE POWER OF ' + input2)
	answer = Math.pow(input1, input2);

	document.getElementById("answer").innerHTML = answer;
}

function modulus() {
	var answer;
	var input1 = document.getElementById("numb1").value;
	var input2 = document.getElementById("numb2").value;
	console.log(input1 + ' modulus of  ' + input2)
	answer = input1 % input2;

	document.getElementById("answer").innerHTML = answer;
}
