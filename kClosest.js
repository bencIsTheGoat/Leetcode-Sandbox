var findClosestElements = function (arr, k, x) {
    const idx = bSearch(arr, x);
    return idx === Infinity ? arr.slice(-k, -1) : getSlice(arr, idx, k, x)
};

function getSlice(arr, start, len, target) {
    const res = [arr[start]];
    let count = 1
    let leftIdx = start - 1;
    let rightIdx = start + 1;
    while (count < len) {
        const left = arr[leftIdx] !== undefined ? arr[leftIdx] : Infinity;
        const right = arr[rightIdx] !== undefined ? arr[rightIdx] : Infinity;
        const leftDiff = Math.abs(target - left);
        const rightDiff = Math.abs(target - right);
        if (leftDiff <= rightDiff) {
            res.unshift(left);
            leftIdx--;
        } else {
            res.push(right);
            rightIdx++;
        }
        count++
    }
    return res
}


function bSearch(arr, target, start = 0, end = arr.length - 1) {
    const midIdx = Math.floor((end + start) / 2);
    const left = arr[midIdx - 1] !== undefined ? arr[midIdx - 1] : -Infinity
    const bool = (arr[midIdx] === target) || (left < target && arr[midIdx] > target)
    if (arr[midIdx] === target) {
        return midIdx;
    } else if (left < target && arr[midIdx] > target) {
        const leftDiff = Math.abs(target - left);
        const rightDiff = Math.abs(target - arr[midIdx]);
        return leftDiff <= rightDiff ? midIdx - 1 : midIdx
    } else if (arr[midIdx] > target) {
        if (start >= end) return Infinity;
        return bSearch(arr, target, start, midIdx);
    } else {
        if (start >= end) return Infinity;
        return bSearch(arr, target, midIdx + 1, end)
    }
}