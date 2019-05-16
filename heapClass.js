class MaxHeap {
    // initialize with array
    constructor() {
        this.array = [null];
    }

    // call to insert val into heap
    insert(val) {
        // push the val into array
        this.array.push(val);
        // call recursive siftUp method construct heap
        this.siftUp(this.array.length - 1);
    }

    deleteMax() {
        // if the heap only has one number just remove it
        if (this.array.length === 2) return this.array.pop();
        // if the heap has no nums then return null
        if (this.array.length <= 1) return null;
        // grab the old max to return later, gangster
        let max = this.array[1];
        this.array[1] = this.array.pop()
        this.siftDown(1);
        return max;
    }

    siftUp(idx) {
        if (idx === 1) return;
        const parentIdx = this.getParent(idx);
        if (this.array[parentIdx] < this.array[idx]) {
            [this.array[parentIdx], this.array[idx]] = [this.array[idx], this.array[parentIdx]];
            this.siftUp(parentIdx);
        }
    }

    siftDown(idx) {
        const left = this.getLeftChild(idx);
        const right = this.getRightChild(idx);
        const leftVal = this.array[left] ? this.array[left] : -Infinity;
        const rightVal = this.array[right] ? this.array[right] : -Infinity;
        if (this.array[idx] > Math.max(leftVal, rightVal)) return;
        let swapIdx = 0;
        if (rightVal > leftVal) {
            swapIdx = right;
        } else {
            swapIdx = left;
        }
        [this.array[idx], this.array[swapIdx]] = [this.array[swapIdx], this.array[idx]];
        this.siftDown(swapIdx);
    }

    getParent(idx) {
        return Math.floor(idx / 2);
    }

    getLeftChild(idx) {
        return idx * 2;
    }

    getRightChild(idx) {
        return idx * 2 + 1;
    }
}