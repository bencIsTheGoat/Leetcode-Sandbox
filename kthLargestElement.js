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
    heap.push(num);
    const siftUp = (idx) => {
        const parentIdx = Math.floor(idx / 2);
        if (idx === 1) return;
        if (heap[idx] > heap[parentIdx]) {
            [heap[parentIdx], heap[idx]] = [heap[idx], heap[parentIdx]];
            siftUp(parentIdx);
        }
    }
    siftUp(heap.length - 1);
}

function removeMax(heap) {
    heap[1] = heap.pop();
    const siftDown = (idx) => {
        const leftIdx = idx * 2;
        const rightIdx = idx * 2 + 1;
        const left = heap[leftIdx] ? heap[leftIdx] : -Infinity;
        const right = heap[rightIdx] ? heap[rightIdx] : -Infinity;
        if (heap[idx] > Math.max(left, right)) return;
        if (left > right) {
            var swapIdx = leftIdx;
        } else {
            var swapIdx = rightIdx;
        }
        [heap[idx], heap[swapIdx]] = [heap[swapIdx], heap[idx]];
        siftDown(swapIdx);
    }
    siftDown(1);
}