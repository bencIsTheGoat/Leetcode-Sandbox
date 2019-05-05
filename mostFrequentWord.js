// Find the most frequent word in a paragraph that isn't on the banned list
// paragraph can have punctuation

var mostCommonWord = function (paragraph, banned) {
    // initialize object that stores the frequency of words
    const obj = {};
    // initialize set that stores the banned words for quicker lookup
    const bannedSet = new Set();
    // add each banned word into set
    banned.forEach(word => bannedSet.add(word));
    // create array of words by converting to lowercase and using the cool
    // regex characters to remove punctuation from string with regex
    const words = paragraph.toLowerCase().split(/\W/);
    // populate object with word and frequency
    words.forEach(word => obj[word] ? obj[word] += 1 : obj[word] = 1);
    // keep track of most frequent word as we iterate thru obj
    let result = '';
    // keep track of corresponding frequency
    let count = 0;
    // iterate thru object finding the longest word
    for (let word in obj) {
        // longest word cant be in banned set or empty string
        if (obj[word] > count && !bannedSet.has(word) && word !== '') {
            result = word;
            count = obj[word];
        }
    }
    return result;
};