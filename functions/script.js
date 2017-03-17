console.log(plus(1, 1));
console.log(plus(1, "1"));
console.log(plus(1, +"1"));
console.log(plus(1, false));
console.log(plus(1, true));
console.log(div(10, 3));
console.log(plus());//undefined->NaN
console.log(plus(1));//undefined->NaN
console.log(plus(null, null));//null->0
console.log(plus("test ", "me"));
console.log(plus("test ", "me", "again"));

function plus(a, b) {
  return a + b;
}

function minus(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function div(a, b) {
  return (a - a % b) / b;
}
