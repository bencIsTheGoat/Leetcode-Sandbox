



function findNumOfValidWords(words, puzzles) {
    const puzzleMasks = [];
    for (const puzzleWord of puzzles) {
        puzzleMasks.push(createBitMask(puzzleWord))
    }

    const test1 = createBitMask("aboveyz")
    const test2 = createBitMask("g")

    // console.log()
    const output = new Array(puzzles.length).fill(0)
    for (const word of words) {
        const wordMask = createBitMask(word);

        let firstCharBit = 0
        for (let i = 0; i < puzzles.length; i++) {
            firstCharBit = 1 << puzzles[i][0].charCodeAt() - 'a'.charCodeAt();
            if ((puzzleMasks[i] & wordMask) === wordMask && ((wordMask & firstCharBit) === firstCharBit)) {
                output[i]++
            }
        }


    }
    return output
}

function createBitMask(word) {
    const zero = 'a'.charCodeAt();
    let mask = 0;
    for (const char of word) {
        mask |= 1 << (char.charCodeAt() - zero)
    }
    return mask;
}

// var findNumOfValidWords = function(words, puzzles) {
//     const output = new Array (puzzles.length)
//     output.fill(0);
//     for (let i = 0; i < puzzles.length; i++) {
//         const puzzleWord = puzzles[i];
//         const puzzleSet = setConvert(puzzleWord);
//         const firstChar = puzzleWord[0];
//         for (const word of words) {
//             let hasKey = false;
//             let validWord = true;
//             for (const char of word) {
//                 if (!puzzleSet.has(char)) {
//                     validWord = false
//                     break
//                 }
//                 if (firstChar === char) {
//                     hasKey = true;
//                 }
//             }
//             if (hasKey && validWord) {
//                 output[i]++
//             }
//         }
//     }
//     return output
// };

// function setConvert(word) {
//     const set = new Set ()
//     for (const char of word) {
//         set.add(char)
//     }
//     return set;
// }