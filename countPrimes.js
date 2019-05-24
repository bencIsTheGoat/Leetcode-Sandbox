// Count the number of prime numbers less than a non-negative number, n.

var countPrimes = function (n) {
    // initialize array of length n with true values
    const nums = Array(n).fill(true);
    // set the 0 and 1 indexes to false
    nums[0] = false;
    nums[1] = false;
    // basic idea is to set assume all numbers are prime unless they are factors
    // of 2, 3 and 5
    // iterate up until the sqrt of n
    for (let i = 2; i < Math.sqrt(n); i++) {
        // checks if we've already marked the index as not prime (false)
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