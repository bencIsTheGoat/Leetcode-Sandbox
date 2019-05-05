// Question from pramp

// Given a sorted array of numbers, return the lowest index at which the index 
// is equal to the value at that index, otherwise return -1

function indexEquality(array) {
    let middleIdx = Math.floor(array.length / 2);
    let current = array[middleIdx];
    let log = Math.ceil(Math.log2(array.length + 1)) - 1;;
    let rightCount = 0
    while (log >= 0) {
        rightCount += 1;
        log -= 1
        if (array[middleIdx] === middleIdx) {
            return array[middleIdx];
        } else if (middleIdx < current) {
            middleIdx = Math.floor(middleIdx / 2);
        } else {
            middleIdx = middleIdx + Math.round(middleIdx / (2 * rightCount));
        } 
    }
    return -1;
}

console.log(indexEquality([-10, -9, -2, 0, 4]));