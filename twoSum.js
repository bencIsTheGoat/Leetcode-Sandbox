var twoSum = function (numbers, target, start = 0, end = numbers.length - 1) {
    if (start === end) return -1
    if (numbers[start] + numbers[end] === target) {
        return [start + 1, end + 1];
    } else if (numbers[start] + numbers[end] > target) {
        return twoSum(numbers, target, start, end - 1)
    } else {
        return twoSum(numbers, target, start + 1, end)
    }
}; 