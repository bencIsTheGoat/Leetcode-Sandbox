// Find the minimum number of deletions needed to make two strings equal

// do recursively
// base: if either of the strings are empty return combined string length
// if the letters are the same we can delete and not count
// if the letters are different we can delete and count
// recursive call on each string

function deletionDistance (str1, str2, memo = {}) {
    const key = str1 + '#' + str2;
    if (memo[key]) return memo[key];
    if (str1 === '' || str2 === '') return (str1.length + str2.length);
    if (str1[0] === str2[0]) {
        memo[key] = deletionDistance(str1.slice(1), str2.slice(1));
        return memo[key];
    } else {
        const recur1 = deletionDistance(str1.slice(1), str2);
        const recur2 = deletionDistance(str1, str2.slice(1));
        memo[key] = 1 + Math.min(recur1, recur2);
        return memo[key];
    }
}

console.log(deletionDistance('heasdfdgggggfdst', 'hiahhhhhsdafeqaft'));