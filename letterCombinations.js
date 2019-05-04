phone = {
    '2': 'abc',
    '3': 'def',
    '4': 'ghi',
    '5': 'jkl',
    '6': 'mno',
    '7': 'pqrs',
    '8': 'tuv',
    '9': 'wxyz'
}

var letterCombinations = function (digits) {
    if (digits === '') return [];
    let output = [];
    let backtrack = (nextDigits, combo = '') => {
        if (nextDigits === '') {
            output.push(combo);
        } else {
            let letters = phone[nextDigits[0]];
            letters.split('').forEach(letter => {
                backtrack(nextDigits.slice(1), combo + letter);
            })
        }
    }
    backtrack(digits);
    return output;
};