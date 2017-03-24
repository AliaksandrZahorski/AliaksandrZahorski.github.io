var fruits = ['Apple', 'Banana'];
var noMoreFruits = null;
var notOnlyFruits = ['Apple', 'Banana', null,,,'Apple', false];
var sameNumbers = [1, 2, 1, 3];

console.log(isArray(fruits));
console.log(isArray(noMoreFruits));
console.log(range(5));
console.log(range(1, 5));
console.log(compact(notOnlyFruits));
console.log(sum(range(5)));
console.log(unique(sameNumbers));
console.log(last(fruits));
console.log(excludeLast(range(5)));
console.log(excludeLast(range(5), 1));

function isArray(obj){
  return !!obj && obj.constructor === Array;
}

/* No 2
function isArray(obj)
{
  return Object.prototype.toString.call(obj) === '[object Array]';
}
*/

/* No 3
function isArray(obj)
{
  return obj instanceof Array;
}
*/

function range(a, b) {
  if (b === undefined) {
    b = a;
    a = 0;
  }
  var result=[];
  while(b--) {
    result[b] = a + b;
  }
  return result;
};

/*
function compact(obj) {
  var result = new Array();
  for (var i = 0; i < obj.length; i++) {
    if (obj[i]) {
      result.push(obj[i]);
    }
  }
  return result;
}
*/

function compact(obj) {
  var result = new Array();
  result = obj.filter(function(e){
    return e;
  });  
  return result;
}

/*
function sum(obj) {
  var result = 0;
  for (var i = obj.length; i--;) {
    result += obj[i];
  }
  return result;
}
*/

function sum(obj) {
  return obj.reduce(function(a, b) {
    return a + b;
  });
}

function onlyUnique(value, index, self) { 
    return self.indexOf(value) === index;
}

function unique(obj) {
  return obj.filter(onlyUnique);
}

function last(obj) {
  return obj[obj.length - 1];
}

function excludeLast(arr, len = 0) {
  return arr.slice(0, -1 - len);;
}