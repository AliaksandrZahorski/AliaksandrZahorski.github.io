console.log(plus(1, 1));
console.log(plus(1, "1"));
console.log(plus(1, +"1"));
console.log(plus(1, false));
console.log(plus(1, true));
console.log(div(10, 3));


function plus(a, b) {
	var result = a + b;
	return result;
}

function minus(a, b) {
	var result = a - b;
	return result;
}

function multiply(a, b) {
	var result = a * b;
	return result;
}

function divide(a, b) {
	var result = a / b;
	return result;
}

function div(a, b) {
	var result = (a - a % b) / b;
	return result;
}
