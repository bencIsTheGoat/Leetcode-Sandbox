var nextPermutation = function (nums) {
    for (let i = nums.length - 1; i > 0; i--) {
        if (nums[i - 1] < nums[i]) {
            let start = i;
            let end = nums.length - 1;
            while (start <= end) {
                [nums[start], nums[end]] = [nums[end], nums[start]];
                start++;
                end--;
            }
            let min = nums[i - 1];
            let max = Infinity;
            let swapIdx = i - 1;
            for (let j = i - 1; j < nums.length; j++) {
                if (nums[j] > min && nums[j] < max) {
                    max = nums[j];
                    swapIdx = j;
                }
            }
            [nums[i - 1], nums[swapIdx]] = [nums[swapIdx], nums[i - 1]];
            return nums;
        }
    }
    return nums.reverse();
};