const riseFast = (arr) => {
    for (var x = 1, il = arr.length; x < il; x++) {
        if (arr[x] <= arr[x-1]) return false;
    }
    return true;
}

const almostIncreasingSequence = s => riseFast(s);

const sequence = [1, 2, 1, 2];

console.log(almostIncreasingSequence(sequence));
