function findPivot(nums, start = 0, end = nums.length - 1) {
    if (start >= end) return start
    const mid = Math.floor((start + end) / 2);
    const next = nums[mid + 1];
    if (nums[mid] < nums[mid + 1]) {
        if (nums[start] < nums[mid]) {
            return findPivot(nums, mid, end);
        } else {
            return findPivot(nums, start, mid);
        }
    } else {
        return mid
    }
}


function search(nums, target) {
    const piv = findPivot(nums)
    const left = bSearch(nums.slice(0, piv + 1), target);
    const right = bSearch(nums.slice(piv + 1), target);
    if (left !== -1) return left;
    if (right !== -1) return piv + right + 1;
    return -1;
}

function bSearch(nums, target, start = 0, end = nums.length) {
    if (start > end) return -1;
    const mid = Math.floor((start + end) / 2);
    if (nums[mid] === target) return mid
    if (nums[mid] > target) {
        return bSearch(nums, target, start, mid - 1);
    } else {
        return bSearch(nums, target, mid + 1, end);
    }
}