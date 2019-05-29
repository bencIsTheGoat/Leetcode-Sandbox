// The Fibonacci numbers, commonly denoted F(n) form a sequence, called the 
// Fibonacci sequence, such that each number is the sum of the two preceding 
// ones, starting from 0 and 1.

var fib = function (N, memo = {}) {
    if (N in memo) return memo[N];
    if (N === 0) {
        memo[N] = 0;
        return memo[N];
    }
    if (N === 1) {
        memo[N] = 1;
        return memo[N];
    }
    memo[N] = fib(N - 1) + fib(N - 2);
    return memo[N];
};