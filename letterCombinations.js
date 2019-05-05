// Return every combination of letters and phone number can have

const letterCombinations = function (digits) {
    // initialize object/graph that indicates the possible letters a number has
    // on a phone
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
    // edge case where if no digits passed in just return empty array
    if (digits === '') return [];
    // keep track of possible combos
    let output = [];
    // use backtracking algo which is recursive func that explores all possible
    // answers, if answer is not valid then the func discards it by making changes
    // on the previous step and then trys again
    const backtrack = (nextDigits, combo = '') => {
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