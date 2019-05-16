// Find the kth largest element in an unsorted array. Note that it is the kth 
// largest element in the sorted order, not the kth distinct element.

// implement heap insert and removemax methods to do this is linear time (avg)
var findKthLargest = function (nums, k) {
    // initialize heap in order to convert nums array into heap
    let heap = [null];
    // call insert method on each element of the array
    for (let num of nums) {
        // pass in heap and current element
        insert(heap, num);
    }
    // call removeMax method the heap k times in order to find the kth largest element
    // basically finding the kth largest value in the nums array
    for (let i = 0; i < k - 1; i++) {
        removeMax(heap);
    }
    // return the first index since zero index is null in heap
    return heap[1];
};

function insert(heap, num) {
    // push the num into the heap
    heap.push(num);
    // create recursive function that is the classic siftUp method used for heaps
    const siftUp = (idx) => {
        // grab the current indexes parent index
        const parentIdx = Math.floor(idx / 2);
        // base case: if the index is at 1 we know its the max
        if (idx === 1) return;
        // if the current index is greater than its parent then switch the two in array
        if (heap[idx] > heap[parentIdx]) {
            [heap[parentIdx], heap[idx]] = [heap[idx], heap[parentIdx]];
            // call the recursive function in on its parentIdx, to check if same
            // element needs to sifted up again
            siftUp(parentIdx);
        }
    }
    // call the recursive helper method on current heap to sift up most recent number
    siftUp(heap.length - 1);
}

function removeMax(heap) {
    // remove the last index of the heap and make it the max
    heap[1] = heap.pop();
    // recursive helper function that is class siftDown method
    const siftDown = (idx) => {
        // find the left childs index
        const leftIdx = idx * 2;
        // find the right childs index
        const rightIdx = idx * 2 + 1;
        // grab the left child if it exists
        const left = heap[leftIdx] ? heap[leftIdx] : -Infinity;
        // grab the right child if it exists
        const right = heap[rightIdx] ? heap[rightIdx] : -Infinity;
        // base case: if the current index is greater than both of the children then okay
        if (heap[idx] > Math.max(left, right)) return;
        // check here is to swtich the current index with the greater of the two children
        // and then set the swapIdx to the greater childs index
        if (left > right) {
            var swapIdx = leftIdx;
        } else {
            var swapIdx = rightIdx;
        }
        // perform sifting down operations 
        [heap[idx], heap[swapIdx]] = [heap[swapIdx], heap[idx]];
        // call recursively on the same element that is sifted down
        siftDown(swapIdx);
    }
    // call function on current heap passing in index 1 for max
    siftDown(1);
}
