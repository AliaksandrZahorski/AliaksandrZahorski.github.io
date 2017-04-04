var sortedNumbers = [1, 2, 3, 4];

console.log(binarySearch(sortedNumbers, 1));
console.log(binarySearch(sortedNumbers, 2));
console.log(binarySearch(sortedNumbers, -5));
console.log(binarySearch(sortedNumbers, 5));
console.log(binarySearch(sortedNumbers, 2.5));

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
