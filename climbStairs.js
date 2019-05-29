// You are climbing a stair case.It takes n steps to reach to the top.

// Each time you can either climb 1 or 2 steps.In how many distinct ways can you climb to the top ?

function climbStairs(n, memo = {}) {
    if (n in memo) return memo[n];
    if (n === 0) return 0;
    if (n === 1) return 1;
    if (n === 2) return 2;
    const one = climbStairs(n - 1, memo);
    const two = climbStairs(n - 2, memo);
    memo[n] = one + two;
    return memo[n];
};