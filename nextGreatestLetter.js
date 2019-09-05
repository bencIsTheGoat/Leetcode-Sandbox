var nextGreatestLetter = function (letters, target, start = 0, end = letters.length - 1) {
    const mid = Math.floor((start + end) / 2);

    const left = letters[mid - 1] ? letters[mid - 1] : -Infinity;
    const right = letters[mid];

    if (target >= left && target < right) {
        return right;
    } else if (target < right) {
        return start >= end ? letters[0] : nextGreatestLetter(letters, target, start, mid);
    } else {
        return start >= end ? letters[0] : nextGreatestLetter(letters, target, mid + 1, end);
    }

}; 