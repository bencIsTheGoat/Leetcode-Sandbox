var sortArray = function (nums) {
    if (nums.length <= 1) return nums;
    const half = Math.floor(nums.length / 2);
    const left = nums.slice(0, half);
    const right = nums.slice(half);
    const sortLeft = sortArray(left);
    const sortRight = sortArray(right);
    return merge(sortLeft, sortRight);
};

function merge(left, right) {
    const result = [];
    let leftIdx = 0;
    let rightIdx = 0;
    while (leftIdx < left.length && rightIdx < right.length) {
        if (left[leftIdx] <= right[rightIdx]) {
            result.push(left[leftIdx]);
            leftIdx++;
        } else {
            result.push(right[rightIdx]);
            rightIdx++;
        }
    }
    return result.concat(left.slice(leftIdx)).concat(right.slice(rightIdx));
}