// Given an array containing n distinct numbers taken from 0, 1, 2, ..., n, 
// find the one that is missing from the array.

var missingNumber = function (nums) {
    let sum = 0;
    for (let i = 0; i <= nums.length; i++) {
        sum += i;
    }
    for (let num of nums) {
        sum -= num;
    }
    return sum;
};

// binary search implementation
function missNumber (nums) {
    let start = 0;
    let end = nums.length - 1;
    const diff = nums[0];
    while (start < end) {
        const middle = Math.floor((start + end)/ 2);
        const check = diff + middle;
        if (check === nums[middle]) {
            start = middle + 1;
        } else {
            end = middle;
        }
    }
    return start + diff !== nums[start] ? start + diff : -1
 }

console.log(missNumber([6, 7, 8, 9, 10]))