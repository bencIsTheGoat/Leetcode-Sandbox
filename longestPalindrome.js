var longestPalindrome = function (s) {
    if (s.length <= 1) return s;
    let longest = '';
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
    while (start >= 0 && end < str.length && str[start] == str[end]) {
        start--;
        end++;
    }
    return str.slice(start + 1, end)
}