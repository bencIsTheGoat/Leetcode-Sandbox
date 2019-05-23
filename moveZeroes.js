function moveZeroes(nums) {
    let len = nums.length
    for (let lastNonZero = 0, curr = 0; curr < len; curr++) {
        if (nums[curr] !== 0) {
            const prev = nums[curr];
            nums[curr] = nums[lastNonZero];
            nums[lastNonZero] = prev;
            lastNonZero++;
        }
    }
    return nums
}