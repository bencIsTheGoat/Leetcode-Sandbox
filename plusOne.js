/*
Given a non-empty array of digits representing a non-negative integer, 
plus one to the integer.

The digits are stored such that the most significant digit is at the head of 
the list, and each element in the array contain a single digit.

You may assume the integer does not contain any leading zero, except the 
number 0 itself.
*/

var plusOne = function (digits) {
    let last = digits[digits.length - 1] + 1;
    let remainder = 0;
    if (last >= 10) {
        last %= 10;
        remainder = 1;
    }
    digits[digits.length - 1] = last;
    for (let i = digits.length - 2; i >= 0; i--) {
        let newNum = digits[i] + remainder;
        remainder = 0;
        if (newNum >= 10) {
            newNum %= 10;
            remainder = 1;
        }
        digits[i] = newNum;
    }
    if (remainder) digits.unshift(1);
    return digits
};