// Given an array of numbers, move all of the zeroes to the end in constant space

function moveZeroes(nums) {
    let len = nums.length;
    // iterate thru the array, keep track of last non zero number and current idx
    for (let lastNonZero = 0, curr = 0; curr < len; curr++) {
        // when we hit a non zero number perform switching operations
        if (nums[curr] !== 0) {
            // save current non zero to prev
            const prev = nums[curr];
            // set the current index element to last non zero index
            nums[curr] = nums[lastNonZero];
            // set the last non zero index to current
            nums[lastNonZero] = prev;
            // increment the lastnonzero number for switching later
            lastNonZero++;
        }
    }
    return nums
}