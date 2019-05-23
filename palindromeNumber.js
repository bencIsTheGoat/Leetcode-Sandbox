// Determine whether an integer is a palindrome.An integer is a palindrome when 
// it reads the same backward as forward.

var isPalindrome = function (x) {
    if (x < 0) return false;
    let val = x;
    let palNum = 0;
    while (val > 0) {
        const mod = val % 10;
        palNum = (palNum * 10) + mod;
        val = Math.floor(val / 10);
    }
    return palNum === x
};