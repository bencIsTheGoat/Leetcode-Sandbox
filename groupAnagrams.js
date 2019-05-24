// Group the anagrams of an array of strings

var groupAnagrams = function (strs) {
    // initialize hashmap of letters and their indexes
    const alpha = { 'a': 0, 'b': 1, 'c': 2, 'd': 3, 'e': 4, 'f': 5, 'g': 6, 'h': 7, 'i': 8, 'j': 9, 'k': 10, 'l': 11, 'm': 12, 'n': 13, 'o': 14, 'p': 15, 'q': 16, 'r': 17, 's': 18, 't': 19, 'u': 20, 'v': 21, 'w': 22, 'x': 23, 'y': 24, 'z': 25 };
    // initialize object
    const obj = {};
    // iterate thru array of words
    for (let word of strs) {
        // create array of length 26 to fill with frequency of letters
        const arr = Array(26).fill(0);
        // iterate thru each letter 
        for (let char of word) {
            // find the idx of from the alphabet hashmap and increment the index
            // in array
            const idx = alpha[char];
            arr[idx]++;
        }
        // if the array exists in the output object, push the word into group
        if (arr in obj) {
            obj[arr].push(word);
        // otherwise initialize an array with word as the value
        } else {
            obj[arr] = [word];
        }
    }
    // return the objects values, which will be a 2D array grouped by anagrams
    return Object.values(obj)
};