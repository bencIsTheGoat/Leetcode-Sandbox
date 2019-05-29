// Implement pow(x, n), which calculates x raised to the power n (xn).

var myPow = function (x, n) {
    if (n < 0) {
        x = 1 / x;
        n = -1 * n
    }
    if (n === 0) return 1;
    if (n % 2 === 0) {
        return myPow(x * x, Math.floor(n / 2));
    } else {
        return myPow(x * x, Math.floor(n / 2)) * x;
    }
};