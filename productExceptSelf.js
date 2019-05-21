

var productExceptSelf = function (nums) {
    if (nums.length <= 1) return [];
    let firstPass = [1];
    for (let i = 1; i < nums.length; i++) {
        const prod = nums[i - 1] * firstPass[i - 1];
        firstPass.push(prod);
    }
    let secondPass = [1];
    for (let i = nums.length - 2; i >= 0; i--) {
        const prod = nums[i + 1] * secondPass[0];
        secondPass.unshift(prod);
    }
    let output = [];
    for (let i = 0; i < nums.length; i++) {
        output.push(firstPass[i] * secondPass[i]);
    }
    return output;
};