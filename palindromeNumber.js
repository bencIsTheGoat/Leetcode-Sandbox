// Determine whether an integer is a palindrome.An integer is a palindrome when 
// it reads the same backward as forward.

var isPalindrome = function (x) {
    // any negative number is false
    if (x < 0) return false;
    // save num for later comparison
    let val = x;
    // create variable for palindrome number
    let palNum = 0;
    // while the val is greater than zero, grab the tens digit and add it to pal
    // number while multiplying old pal number by 10 to move it over 1
    while (val > 0) {
        const mod = val % 10;
        palNum = (palNum * 10) + mod;
        val = Math.floor(val / 10);
    }
    return palNum === x
};