var search = function (nums, target, start = 0, end = nums.length) {
    if (start === end) return -1;
    const mid = Math.floor((start + end) / 2);
    if (nums[mid] < target) {
        return search(nums, target, mid + 1, end);
    } else if (nums[mid] === target) {
        return mid;
    } else {
        return search(nums, target, start, mid);
    }
};       