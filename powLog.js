var myPow = function (x, n) {
    if (n === 0) return 1;
    if (n === 1) return x;
    if (n === -1) return (1 / x);
    const floorDiff = n - (2 * Math.floor(n / 2));
    const recur = myPow(x, Math.floor(n / 2));
    return recur * recur * myPow(x, floorDiff);
}; 