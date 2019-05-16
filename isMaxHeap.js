// is the given array a max heap?

// recursive solution
function isMaxHeap(array, idx = 1) {
    // base case: if the idx were passing in is greater than or equal to the last
    // index return true - pass in idx here instead of slice
    if (idx >= array.length - 1) return true;
    // find the left child of the current element in the array, if no left child
    // exists then replace with -Infinity because we cant do undefined in binary operation
    const left = array[idx * 2] ? array[idx * 2] : -Infinity;
    // find the right child of the current element in the array
    const right = array[idx * 2 + 1] ? array[idx * 2 + 1] : -Infinity;
    // if the current index is less than the max of the left and right child then
    // we can return false because its not a valid max heap
    if (array[idx] < Math.max(left, right)) return false;
    return isMaxHeap(array, idx + 1);
}

// iterate solution
function isMaxHeap(array) {
    // start from the first index because the zero index will be null
    for (let i = 1; i < array.length; i++) {
        // grab left child
        const left = array[i * 2] ? array[i * 2] : -Infinity;
        // grab right child
        const right = array[i * 2 + 1] ? array[i * 2 + 1] : -Infinity;
        // if at any time the current index is smaller than the left or right
        // we can just return false
        if (array[i] < Math.max(left, right)) return false;
    }
    return true;
}
