

var dominantIndex = function (nums) {
    let max = nums[0];
    let maxIdx = 0;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > max) {
            max = nums[i];
            maxIdx = i;
        }
    }
    for (let i = 0; i < nums.length; i++) {
        if (i !== maxIdx && nums[i] * 2 > max) return -1;
    }
    return maxIdx;
};