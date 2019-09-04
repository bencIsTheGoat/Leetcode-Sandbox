var isPerfectSquare = function (num, start = 0, end = num) {
    if (num === 0) return false;
    const half = Math.floor((end + start) / 2);
    const square = half * half;
    if (square === num) {
        return true;
    } else if (square > num) {
        return start >= end ? false : isPerfectSquare(num, start, half);
    } else {
        return start >= end ? false : isPerfectSquare(num, half + 1, end);
    }
};