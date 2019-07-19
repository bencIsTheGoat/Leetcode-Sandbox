var subarraySum = function (nums, k) {
    if (nums.length === 0) return 0;
    let count;
    for (let i = 0; i < nums.length; i++) {
        count = count ? count + nums[i] : nums[i];
        if (k === count) return 1 + subarraySum(nums.slice(1), k);

    }
    return 0 + subarraySum(nums.slice(1), k)
};