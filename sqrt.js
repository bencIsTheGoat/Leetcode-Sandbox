var mySqrt = function (x, start = 1, end = Math.ceil(x / 2)) {
    const mid = Math.floor((start + end) / 2)
    const smallSqrt = mid * mid;
    const largeSqrt = end * end;
    if (smallSqrt === x) return Math.floor(mid);
    if (largeSqrt === x) return Math.floor(end);
    if (end - start <= 1) return Math.floor(mid);
    if (smallSqrt < x) {
        return mySqrt(x, mid, end);
    } else {
        return mySqrt(x, start, mid);
    }
};