// Find the longest palindrome in a string, this answer does it in quadratic time
// complexity rather than cubic, use Manachers algo to get in linear time complex

const longestPalindrome = function (s) {
    // edge case coverage
    if (s.length <= 1) return s;
    // initialize longest variable to keep track of longest
    let longest = '';
    // iterate thru string calling helper function, expand, on current index of letter
    // and the current index and index + 1 pair to check all possible palindromes
    // of even and odd length
    for (let i = 0; i < s.length; i++) {
        let palindrome1 = expand(s, i, i);
        if (palindrome1.length > longest.length) {
            longest = palindrome1;
        }
        let palindrome2 = expand(s, i, i + 1)
        if (palindrome2.length > longest.length) {
            longest = palindrome2
        }
    }
    return longest;

};

function expand(str, start, end) {
    // takes in the string with starting and end index
    // since the corresponding letter mirrored around center letter (median) in
    // palindromes have to be equal, this function finds longest possible given
    // a current index
    while (start >= 0 && end < str.length && str[start] == str[end]) {
        start--;
        end++;
    }
    return str.slice(start + 1, end)
}

