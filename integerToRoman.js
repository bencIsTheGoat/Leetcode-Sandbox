// Convert Integer to Roman numeral

var intToRoman = function (num) {
    // store integer to roman info in obj for constant lookup
    obj = {
        '1': 'I',
        '4': 'IV',
        '5': 'V',
        '9': 'IX',
        '10': 'X',
        '40': 'XL',
        '50': 'L',
        '90': 'XC',
        '100': 'C',
        '400': 'CD',
        '500': 'D',
        '900': 'CM',
        '1000': 'M'
    };
    // base case
    if (num === 0) return '';
    // recursive function basically grabs the leftmost digit and finds the corresponding
    // roman numeral in object and builds a string with it
    if (num >= 1000) {
        const thou = Math.floor(num / 1000);
        return obj['1000'].repeat(thou) + intToRoman(num % 1000);
    } else if (num >= 900) {
        return obj['900'] + intToRoman(num % 900);
    } else if (num >= 500) {
        return obj['500'] + intToRoman(num % 500);
    } else if (num >= 400) {
        return obj['400'] + intToRoman(num % 400);
    } else if (num >= 100) {
        const hund = Math.floor(num / 100);
        return obj['100'].repeat(hund) + intToRoman(num % 100);
    } else if (num >= 90) {
        return obj['90'] + intToRoman(num % 90);
    } else if (num >= 50) {
        return obj['50'] + intToRoman(num % 50);
    } else if (num >= 40) {
        return obj['40'] + intToRoman(num % 40);
    } else if (num >= 10) {
        const hund = Math.floor(num / 10)
        return obj['10'].repeat(hund) + intToRoman(num % 10);
    } else if (num === 9) {
        return obj['9'];
    } else if (num >= 5) {
        return obj['5'] + intToRoman(num % 5);
    } else if (num === 4) {
        return obj['4'];
    } else {
        return obj[1].repeat(num);
    }
};