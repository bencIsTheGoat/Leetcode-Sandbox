// A string S of lowercase letters is given. We want 
// to partition this string into as many parts as possible so that each letter 
// appears in at most one part, and return a list of integers representing the size of these parts.

var partitionLabels = function (string) {
    // call helper function that stores the last index of letter in string
    let obj = lastIndex(string);
    let result = [];
    // initialize farIdx variable which keeps track of farthest index of letter
    let farIdx = 0;
    // total keeps the running sum of lengths in result to allow for efficient calc
    let total = 0;
    for (let i = 0; i < string.length; i++) {
        let current = string[i];
        // resets the farthest index to current letters farthest index if it
        // greater than current
        farIdx = obj[current] > farIdx ? obj[current] : farIdx;
        // if we reach the farthest index we know we've found all the letter
        if (farIdx === i) {
            // calc the length of the current word with partitioned letters
            let length = farIdx - total + 1;
            result.push(length); 
            total += length;
        }
    }
    return result;
};

function lastIndex (string) {
    // iterate thru string adding key of letter and value of index
    // obj will have last index because it will overwrite previous index
    let obj = {};
    for (let i = 0; i < string.length; i++) {
        obj[string[i]] = i;
    }
    return obj;
}
console.log(partitionLabels("ababcbacadefegdehijhklij"));
