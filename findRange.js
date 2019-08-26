var searchRange = function (nums, target) {
    const firstIdx = bSearch(nums, target);
    return firstIdx === -1 ? [-1, -1] : [firstIdx, highSearch(nums, target, firstIdx)]
};

function highSearch(nums, target, start = 0, end = nums.length - 1) {
    if (start >= end) return end;
    const midIdx = Math.floor((start + end) / 2);

    const right = nums[midIdx + 1];
    const middle = nums[midIdx];

    if (right > middle && middle === target) {
        return midIdx;
    } else if (middle > target) {
        return highSearch(nums, target, start, midIdx);
    } else {
        return highSearch(nums, target, midIdx + 1, end);
    }

}

function bSearch(nums, target, start = 0, end = nums.length - 1) {
    const midIdx = Math.floor((start + end) / 2);

    const left = nums[midIdx - 1];
    const middle = nums[midIdx];

    if ((left < middle || left === undefined) && middle === target) {
        return midIdx;
    } else if (middle < target) {
        if (start >= end) return -1;
        return bSearch(nums, target, midIdx + 1, end);
    } else {
        if (start >= end) return -1;
        return bSearch(nums, target, start, midIdx);
    }

}