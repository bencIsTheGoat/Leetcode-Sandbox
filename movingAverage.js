// Given a stream of integers and a window size, calculate the moving average 
// of all integers in the sliding window.

// Utilize LRU Cache methodology
var MovingAverage = function (size) {
    // define dll
    this.dll = new DoubleLinkedList ();
    // define maximum size for window
    this.size = size;
    // keep track of the current size
    this.currentSize = 0;
    // keep track of the sum of integers
    this.sum = 0;
};

MovingAverage.prototype.next = function (val) {
    // append the new value into the dll
    this.dll.append(val);
    // increment the sum by the val
    this.sum += val;
    // increment the current size by the size
    this.currentSize++;
    // if the current size is greater than max size then we must prune
    if (this.currentSize > this.size) {
        // remove the first node of the dll
        const delNode = this.dll.removeFirst();
        // delete the node val from total sum
        this.sum -= delNode.val;
        // decrement the current size after removal
        this.currentSize--;
    }
    // return the movingaverage
    return this.sum / this.currentSize
};

class ListNode {
    constructor(val) {
        // has to have prev and next for dll
        this.next = null;
        this.prev = null;
        this.val = val;
    }
    remove() {
        // set the prev next to next
        this.prev.next = this.next;
        // set the next prev to prev
        this.next.prev = this.prev;
        this.next = null;
        this.prev = null;
    }
}

class DoubleLinkedList {
    constructor() {
        // set tail to new empty ListNode
        this.tail = new ListNode ();
        // set head to new empty ListNode
        this.head = new ListNode ();
        // set the head nexr pointer to tail
        this.head.next = this.tail;
        // set the tail prev pointer to head
        this.tail.prev = this.head;
    }

    // add node to end of ll
    append(val) {
        // create new node
        const node = new ListNode (val);
        // save the tails prev pointer
        const prev = this.tail.prev;
        // set the tails prev pointer to node
        prev.next = node;
        // set the nodes prev pointer to tail
        node.prev = prev;
        // set the node next pointer to tail
        node.next = this.tail;
        // set the tails prev pointer to node
        this.tail.prev = node;
    }

    removeFirst () {
        // grab the first node in the list after head
        const node = this.head.next;
        // call node remove method on it
        node.remove();
        // return the removed node for later use
        return node;
    }
}