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