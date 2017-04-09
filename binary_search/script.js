var sortedNumbers = [-1, 0, 3, 4];

console.log(binarySearch(sortedNumbers, -1));
console.log(binarySearch(sortedNumbers, 0));
console.log(binarySearch(sortedNumbers, -5));
console.log(binarySearch(sortedNumbers, 5));
console.log(binarySearch(sortedNumbers, 2.5));

/*
function binarySearch(arr, key) {
  var lower = 0;
  var upper = arr.length - 1;
  var mid;
  var current;
  while (lower <= upper) {
    mid = (lower + upper) >> 1;
    current = arr[mid];
    if (key > current) {
      lower = mid + 1;
    } else if (key < current) {
      upper = mid - 1;
    } else {
      return mid;
    }
  }
  return -1;
}
*/

function binarySearch(arr, key) {
  var lower = 0;
  var upper = arr.length - 1;
  var mid;
  var current;
  mid = (lower + upper) >> 1;
  current = arr[mid];
  if (current > key) {
    return binarySearch(arr.slice(0, mid), key);
  } else if (current < key) {
    return binarySearch(arr.slice(mid + 1, arr.length), key);
  } else {
    return arr[mid] || arr[mid] == 0 ? mid: -1;
  }
}
