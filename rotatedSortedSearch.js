//  [10, -5, -4, 3, -1]

// find the divide or max in array and index
// arr[middle] > arr[end] && range > maxRange
// if 2ndtolast is less than end then decrement end by 1
// basically treat the searches at 2 different arrays

// [0, 1, 5, -4]
function rotatedSearch (array, targ) {
    const partIdx = idxHelper(array);
    if (targ < array[0]) {
        var start = partIdx + 1;
        var end = array.length;
    } else {
        var start = 0;
        var end = partIdx + 1;
    }
    while (start < end) {
        const middle = Math.floor((start + end) / 2);
        if (array[middle] < targ) {
            start = middle + 1;
        } else if (array[middle] === targ) {
            return middle;
        } else {
            end = middle;
        }
    }
    return -1;
}

function idxHelper (array) {
    let start = 0;
    let end = array.length - 1;
    while (start < end - 1) {
        const middle = Math.floor((start + end) / 2);
        if (array[middle] > array[end]) {
            start = middle;
            if (array[end - 1] <= array[end]) end--;
        } else {
            end = middle;
        }
    }
    return start;
}

console.log(rotatedSearch([0, 1, 2, -39, -25, -17, -10, -5, -2], -2))