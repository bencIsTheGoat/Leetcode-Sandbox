// Find the minimum number of deletions needed to make two strings equal

// do recursively
// base: if either of the strings are empty return combined string length
// if the letters are the same we can delete and not count
// if the letters are different we can delete and count
// recursive call on each string

function deletionDistance (str1, str2, memo = {}) {
    // create new key for every function call to reduce time complexity
    const key = str1 + '#' + str2;
    // if the same func has been called return the answer from memo
    if (memo[key]) return memo[key];
    // base case: if either string is empty just return the length of the string
    if (str1 === '' || str2 === '') return (str1.length + str2.length);
    // if both the first letters are the same we can just delete without counting
    // and call recursively
    if (str1[0] === str2[0]) {
        memo[key] = deletionDistance(str1.slice(1), str2.slice(1));
        return memo[key];
    } else {
        // if the first letters are different, call func on each variation of
        // difference in strings, creates tree
        const recur1 = deletionDistance(str1.slice(1), str2);
        const recur2 = deletionDistance(str1, str2.slice(1));
        // memoize the minimum value of the deletion distance and add one for the 
        // step down tree
        memo[key] = 1 + Math.min(recur1, recur2);
        return memo[key];
    }
}

console.log(deletionDistance('heasdfdgggggfdst', 'hiahhhhhsdafeqaft'));