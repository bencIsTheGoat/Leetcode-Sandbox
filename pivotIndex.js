/*
Given an array of integers nums, write a method that returns the "pivot" index of this array.

We define the pivot index as the index where the sum of the numbers to the 
left of the index is equal to the sum of the numbers to the right of the index.

If no such index exists, we should return -1. If there are multiple pivot 
indexes, you should return the left-most pivot index.
*/

var pivotIndex = function (nums) {
    if (nums.length <= 2) return -1;
    let rightSum = [nums[nums.length - 1]];
    for (let i = nums.length - 2; i >= 0; i--) {
        const sum = nums[i] + rightSum[0];
        rightSum.unshift(sum);
    }
    let currSum = 0;
    if (rightSum[1] === 0) return 0
    for (let j = 0; j < nums.length; j++) {
        if (j === nums.length - 1 && currSum === 0) return j
        currSum += nums[j]
        const nextSum = rightSum[j + 2] !== null ? rightSum[j + 2] : 0;
        if (currSum === nextSum) return j + 1;
    }
    return -1;
};