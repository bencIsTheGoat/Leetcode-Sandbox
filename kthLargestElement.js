// Find the kth largest element in an unsorted array. Note that it is the kth 
// largest element in the sorted order, not the kth distinct element.

var findKthLargest = function (nums, k) {
    let heap = [null];
    for (let num of nums) {
        insert(heap, num);
    }
    for (let i = 0; i < k - 1; i++) {
        removeMax(heap);
    }
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