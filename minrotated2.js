var findMin = function (nums, start = 0, end = nums.length - 1, minAns = Infinity) {
    let mid = Math.floor((start + end) / 2);
    if (start > end) return minAns
    minAns = Math.min(minAns, nums[mid])
    if (nums[start] < nums[mid] && nums[mid] <= nums[end] || nums[start] > nums[mid]) {
        return findMin(nums, start, mid - 1, minAns)
    } else if (nums[mid] === nums[start] && nums[start] === nums[end]) {
        const temp = nums[mid];
        while (start <= end && nums[start] == temp) {
            start++
        }
        return findMin(nums, start, end, minAns)
    } else {
        return findMin(nums, mid + 1, end, minAns)
    }
}