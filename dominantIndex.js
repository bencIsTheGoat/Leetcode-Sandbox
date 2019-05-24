/*
In a given integer array nums, there is always exactly one largest element.

Find whether the largest element in the array is at least twice as much as 
every other number in the array.

If it is, return the index of the largest element, otherwise return -1.
*/

// one iteration
var dominantIndex = function (nums) {
    // set max to first ele
    let max = nums[0];
    // keep track of max index
    let maxIdx = 0;
    // keep track of second largest element's index
    let secondMax = -Infinity;
    for (let i = 1; i < nums.length; i++) {
        // if the current element is greater than max, set the current max to 
        // second largest max, set the current element to new largest max, and
        // max index
        if (nums[i] > max) {
            secondMax = max;
            max = nums[i];
            maxIdx = i;
        // if the current index is smaller than or equal to max but greater than
        //  current second max, reassign the second max to the currrent elememnt
        } else if (nums[i] > secondMax) {
            secondMax = nums[i];
        }
    }
    return max >= secondMax * 2 ? maxIdx : -1;
};

// two iterations
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