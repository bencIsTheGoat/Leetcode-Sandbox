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
    // pass in digits and combo of letters that correspond to digit
    const backtrack = (nextDigits, combo = '') => {
        // if all digits have been checked push the combination in
        // keep track of combination in argument passed in
        if (nextDigits === '') {
            output.push(combo);
        } else {
            // grab the letters for number from phone
            let letters = phone[nextDigits[0]];
            // iterate thru each letter calling the backtrack func recursively
            // decrement the phone number by 1 as we step down tree for every recursive
            // call, and add the current letter to end of combination
            letters.split('').forEach(letter => {
                backtrack(nextDigits.slice(1), combo + letter);
            })
        }
    }
    // call backtracking algo within function to get combinations in the output
    backtrack(digits);
    return output;
};