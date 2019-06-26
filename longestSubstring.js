// iterate and create a new string
// add letters if string doesn't include new letter
// keep running and total count of length of string
// if running > total then replace total
// reset running if string includes letter

// Find the length of longest substring (unique letters)

var lengthOfLongestSubstring = function (s) {
    // initialize substring and running/total counts
    let subString = '';
    let runningCount = 0;
    let totalCount = 0;
    // iterate thru string
    for (let i = 0; i < s.length; i++) {
        // if the substring doesnt include the current letter then add it to
        // substring
        if (!subString.includes(s[i])) {
            subString += s[i];
            // set the running count to the length of substring in order to compare
            // to total count
            runningCount = subString.length;
        } else {
            // if the substring does include the current letter, then grab the index
            // of letter one of ahead of the same letter in substring to reset
            // substring
            let badIdx = subString.indexOf(s[i]);
            // reset substring
            subString = subString.slice(badIdx + 1) + s[i];
            runningCount = 0;
        }
        // if the running count is greater than total count then update total count
        if (runningCount > totalCount) totalCount = runningCount;
    }
    return totalCount;

};

var lengthOfLongestSubstring = function (s) {
    if (s.length < 1) return 0;
    let max = 0;
    let runMax = 0;
    let obj = {};
    for (let i = 0; i < s.length; i++) {
        if (s[i] in obj) {
            if (runMax > max) max = runMax;
            runMax = 1;
            i = obj[s[i]] + 1;
            obj = {};
            obj[s[i]] = i;
        } else {
            obj[s[i]] = i;
            runMax++
        }
    }
    return Math.max(runMax, max);
};