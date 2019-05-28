function convertToSentenceArray(array) {
    const str = array.join(' ');
    const regex = /[.!?]\s(?=[A-Z])/;
    const split = str.split(regex);
    return split;
}

function exceptionHelper(array) {
    const exceptionRegex = /^\w\.\w/;
    for (let i = 0; i < array.length; i++) {
        const sentence = array[i];
        let lastWord = sentence[sentence.length - 1];
        if (exceptionRegex.test(lastWord)) {
            array[i][array[i].length - 1] = array[i][array[i].length - 1] + '.';
            array[i] = array[i].concat(array[i + 1]);
            array.splice(i + 1, 1)
        }
    }
    return array;
}

function sentenceSplitter(array) {
    // console.log(array)
    return array.map(sentence => {
        const splitSentence = sentence.toLowerCase().split(" ");
        // console.log(splitSentence)
        return splitSentence.map(word => {
            return wordCleaner(word);
        })
    })
}

function wordCleaner(word) {
    const wordExceptions = new Set(["i.e.", "e.g."]);
    const regexExceptions = /^\w\.\w/;
    if (wordExceptions.has(word) || regexExceptions.test(word)) {
        return word;
    } else {
        return word.replace(/\W/g, '');
    }
}

function generateObject (cleanSentenceArray) {
    const wordObj = {};
    cleanSentenceArray.forEach((sentence, sentIdx) => {
        sentence.forEach((word) => {
            if (word in wordObj) {
                let { freq, sentenceIndexArray } = wordObj[word];
                freq++;
                sentenceIndexArray.push(sentIdx);
                wordObj[word] = { freq: freq, sentenceIndexArray: sentenceIndexArray };
            } else {
                wordObj[word] = { freq: 1, sentenceIndexArray: [sentIdx] };
            }
        })
    })
    return wordObj;
}

function formatObject(obj) {
    return Object.keys(obj).sort().map((key) => {
        const { freq, sentenceIndexArray } = obj[key];
        const value = freq + ":" + sentenceIndexArray;
        console.log(`${key}: { ${value} }`)
    })
}

function generateAndPrintConcordance(inputLines) {
    const sentenceArray = convertToSentenceArray(inputLines);
    

    const cleanSentenceArray = sentenceSplitter(sentenceArray);
    const exceptionArray = exceptionHelper(cleanSentenceArray);
    // console.log(exceptionArray);
    const wordObj = generateObject(exceptionArray);
    formatObject(wordObj);
}

sentence = ['Given an arbitrary text i.e. Ben document written in English, write a program that will generate a',
    'concordance, i.e. an alphabetical list of all word occurrences, labeled with word frequencies.',
    'Bonus: label each word with the sentence numbers in which each occurrence appeared.']

console.log(generateAndPrintConcordance(sentence));