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
        // remove the last element and set the first to it
        this.array[1] = this.array.pop()
        // call siftdown method
        this.siftDown(1);
        return max;
    }

    siftUp(idx) {
        // base case: if the index is 1 we know were at the max
        if (idx === 1) return;
        // get the parents index
        const parentIdx = this.getParent(idx);
        // if the parent is less than the child then perform switch
        if (this.array[parentIdx] < this.array[idx]) {
            [this.array[parentIdx], this.array[idx]] = [this.array[idx], this.array[parentIdx]];
            // call recursively on same but sifted up element
            this.siftUp(parentIdx);
        }
    }

    siftDown(idx) {
        // get the left childs index
        const left = this.getLeftChild(idx);
        // get the right childs index
        const right = this.getRightChild(idx);
        // get the val of the left child if it exists
        const leftVal = this.array[left] ? this.array[left] : -Infinity;
        // get the val of the right child if it exists
        const rightVal = this.array[right] ? this.array[right] : -Infinity;
        // if the current index is greater than both of its children we know its good
        if (this.array[idx] > Math.max(leftVal, rightVal)) return;
        // find the index of the child that has greater value and save to swapIdx
        if (rightVal > leftVal) {
            var swapIdx = right;
        } else {
            var swapIdx = left;
        }
        // 
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