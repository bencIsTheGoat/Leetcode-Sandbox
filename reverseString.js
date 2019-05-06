// Reverse an array recursively

// Builds a new string, takes O(N) space with array and O(N) time
function reverseString(array) {
    // base case is if we have sliced up the string until its empty, then return
    // an empty array to push shit into
    if (array.length === 0) return [];
    // grab the last element and concat the recursive calls on it
    array = [array[array.length - 1]].concat(reverseString(array.slice(0, -1)));
    return array;
}

// Flips the indexes of current index, takes O(1) time if you don't consider
// call stack
function reverseString(array, low = 0, high = array.length - 1) {
    // if the starting and ending pointer are equal or start is greater then
    // return the original array
    if (low >= high) return array;
    // flip the elements
    [array[low], array[high]] = [array[high], array[low]];
    // do the recursive call such that the start and end indexes are incremented
    return reverseString(array, low + 1, high - 1);
}

console.log(reverseString(["h", "a", "n", "j", "a", 'h']))