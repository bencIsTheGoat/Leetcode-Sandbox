// Question from pramp

// Given a sorted array of numbers, return the lowest index at which the index 
// is equal to the value at that index, otherwise return -1

// function indexEquality(array) {
//     // grab the middle index of the sorted array, indicates the 'root' node
//     // of binary tree
//     let middleIdx = Math.floor(array.length / 2);
//     let current = array[middleIdx];
//     // find the height of tree for max number of iterations
//     let log = Math.ceil(Math.log2(array.length + 1)) - 1;
//     // keep track of current height of tree for the middle index of the right
//     // side of the sorted array, want to make sure we are finding the middle index of
//     // increasingly shorter range
//     let rightCount = 0
//     while (log >= 0) {
//         rightCount += 1;
//         log -= 1
//         // if the index and element equal return the element
//         if (array[middleIdx] === middleIdx) {
//             return array[middleIdx];
//         } else if (middleIdx < current) {
//             // if the index is less than the middle element we know we have to 
//             // go down the left side of the tree
//             middleIdx = Math.floor(middleIdx / 2);
//         } else {
//             // otherwise we go down the right side of the tree
//             middleIdx = middleIdx + Math.round(middleIdx / (2 * rightCount));
//         } 
//     }
//     return -1;
// }

function indexEquality(array) {
    let start = 0;
    let end = array.length;
    let ans = -1;
    while (start < end) {
        const midIdx = Math.floor((start + end) / 2);
        if (array[midIdx] === midIdx) {
            ans = midIdx;
            end = midIdx;
        } else if (array[midIdx] < midIdx) {
            start = midIdx + 1;
        } else {
            end = midIdx;
        }
    }
    return ans;
}

console.log(indexEquality([0, 1, 2, 3, 4]));