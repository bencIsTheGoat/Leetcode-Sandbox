var findDuplicate = function (nums) {
    const sorted = quickSort(nums);
    return findDupe(sorted);
};

function findDupe(array, start = 0, end = array.length - 1) {
    const mid = Math.floor((start + end) / 2);
    if (mid === array[mid] && mid === array[mid - 1]) {
        return array[mid];
    } else if (array[mid] > mid) {
        return findDupe(array, mid + 1, end);
    } else {
        return findDupe(array, start, mid)
    }
}


function quickSort(array) {
    if (array.length === 0) return []
    const first = array[0];
    const left = array.filter((ele, idx) => idx === 0 ? false : first >= ele);
    const right = array.filter((ele, idx) => idx === 0 ? false : first < ele);
    return quickSort(left).concat([first]).concat(quickSort(right));
} 