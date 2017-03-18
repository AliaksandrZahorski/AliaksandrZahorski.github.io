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
//new tests
console.log(div(3.5, 2));
console.log(divT(3.5, 2));
console.log(div(-1.5, 2));
console.log(divT(-1.5, 2));
console.log(div(5, 3));
console.log(divT(5, 3));


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

function divT(a, b) {
  return trunc(a/b);;
}

function trunc(x) {
  if (isNaN(x)) {
    return NaN;
  }
  if (x > 0) {
    return Math.floor(x);
  }
  return Math.ceil(x);
};
