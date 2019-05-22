// Count the number of prime numbers less than a non-negative number, n.

var countPrimes = function (n) {
    const nums = Array(n).fill(true);
    nums[0] = false;
    nums[1] = false;
    for (let i = 2; i < Math.sqrt(n); i++) {
        if (nums[i]) {
            for (let j = i * i; j <= n;) {
                nums[j] = false;
                j = j + i;
            }
        }
    }
    let count = 0;
    for (let ele of nums) {
        if (ele) count++
    }
    return count;
}

console.log(countPrimes(10))