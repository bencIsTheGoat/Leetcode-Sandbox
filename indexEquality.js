// Question from pramp

// Given a sorted array of numbers, return the lowest index at which the index 
// is equal to the value at that index, otherwise return -1

// can do easily in linear time but can do better in log time

function indexEquality(array) {
    // create two pointers, start and end
    let start = 0;
    let end = array.length;
    // keep track of ans because we want the leftmost element that matches with its
    // index
    let ans = -1;
    // perform operations while the start pointer is less than the end pointer
    while (start < end) {
        // calculate the average index, need this as we change pointers and need to
        // grab the middle index
        const midIdx = Math.floor((start + end) / 2);
        // if the index and element match each other set the ans to the index, then
        // set the end pointer to middle index because we want to keep checking left
        if (array[midIdx] === midIdx) {
            ans = midIdx;
            end = midIdx;
        // if the array element is less than the index we know we must go right, so
        // set the start pointer to the middle
        } else if (array[midIdx] < midIdx) {
            start = midIdx + 1;
        // if the array element is greater than the index we must go left
        } else {
            end = midIdx;
        }
    }
    return ans;
}

console.log(indexEquality([0, 1, 2, 3, 4]));