// Group the anagrams of an array of strings

var groupAnagrams = function (strs) {
    // initialize hashmap of letters and their indexes
    const alpha = { 'a': 0, 'b': 1, 'c': 2, 'd': 3, 'e': 4, 'f': 5, 'g': 6, 'h': 7, 'i': 8, 'j': 9, 'k': 10, 'l': 11, 'm': 12, 'n': 13, 'o': 14, 'p': 15, 'q': 16, 'r': 17, 's': 18, 't': 19, 'u': 20, 'v': 21, 'w': 22, 'x': 23, 'y': 24, 'z': 25 };
    
    const obj = {};
    for (let word of strs) {
        console.log(word)
        const arr = Array(26).fill(0);
        for (let char of word) {
            const idx = alpha[char];
            arr[idx]++;
        }
        if (arr in obj) {
            obj[arr].push(word);
        } else {
            obj[arr] = [word];
        }
    }
    return Object.values(obj)
};