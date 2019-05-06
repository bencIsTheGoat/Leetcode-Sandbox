

function reverseString(array) {
    if (array.length === 0) return [];
    array = [array[array.length - 1]].concat(reverseString(array.slice(0, -1)));
    return array;
}

console.log(reverseString(["h", "e", "l", "l", "o"]))