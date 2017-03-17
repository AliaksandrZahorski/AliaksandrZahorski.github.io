console.log(plus(1, 1));
console.log(plus(1, "1"));
console.log(plus(1, true));
console.log(plus(1, false));


function plus(a, b) {
	var result = a + b;
	return result;
}