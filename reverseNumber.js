var reverse = function (x) {
    let result = 0;
    let num = Math.abs(x);
    while (num > 0) {
        const mod = num % 10;
        result = (result * 10) + mod;
        num = Math.floor(num / 10);
    }
    result = x < 0 ? result * -1 : result;
    const posMax = 2 ** 31;
    return (result > posMax || result < (-1 * posMax)) ? 0 : result

};