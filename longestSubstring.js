// iterate and create a new string
// add letters if string doesn't include new letter
// keep running and total count of length of string
// if running > total then replace total
// reset running if string includes letter
var lengthOfLongestSubstring = function (s) {

    let subString = '';
    let runningCount = 0;
    let totalCount = 0;
    for (let i = 0; i < s.length; i++) {
        if (!subString.includes(s[i])) {
            subString += s[i];
            runningCount = subString.length;
        } else {
            let badIdx = subString.indexOf(s[i]);
            subString = subString.slice(badIdx + 1) + s[i];
            runningCount = 0;
        }
        if (runningCount > totalCount) totalCount = runningCount;
    }
    return totalCount;

};