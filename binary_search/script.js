var sortedNumbers = [1, 2, 3, 4];

console.log(binarySearch(sortedNumbers, 1));
console.log(binarySearch(sortedNumbers, 2));
console.log(binarySearch(sortedNumbers, -5));
console.log(binarySearch(sortedNumbers, 5));
console.log(binarySearch(sortedNumbers, 2.5));

function binarySearch(arr, key) {
  var lo = 0, up = arr.length - 1, mid, el;
  while (lo <= up) {
    mid = (lo + up) >> 1;
    el = arr[mid];
    if (key > el) {
      lo = mid + 1;
    } else if (key < el) {
      up = mid - 1;
    } else {
      return mid;
    }
  }
  return -mid - 1;
}
