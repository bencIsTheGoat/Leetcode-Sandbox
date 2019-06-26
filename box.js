var twoSum = function (nums, target) {
    const obj = {}
    for (let i = 0; i < nums.length; i++) {
        const diff = target - nums[i];
        if (nums[i] in obj) return [obj[nums[i]], i];
        obj[diff] = i;
    }
    return -1;
};

console.log(twoSum([2, 7, 11, 15], 9));