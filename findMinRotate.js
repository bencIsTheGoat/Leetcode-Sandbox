function findMin(nums, start = 0, end = nums.length - 1) {
    if (nums.length === 1) return nums[0]
    if (nums.length === 2) return Math.min(...nums)
    const mid = Math.floor((start + end) / 2);
    if (nums[start] < nums[end]) return nums[start]
    if (nums[mid + 1] < nums[mid]) {
        return nums[mid + 1];
    } else if (nums[mid] < nums[mid - 1]) {
        return nums[mid];
    } else if (nums[mid] < nums[start]) {
        return findMin(nums, start, mid);
    } else {
        return findMin(nums, mid + 1, end)
    }
}