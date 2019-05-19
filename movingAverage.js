// Given a stream of integers and a window size, calculate the moving average 
// of all integers in the sliding window.

var MovingAverage = function (size) {
    this.obj = {};
    this.dll = new DoubleLinkedList ();
    this.size = size;
    this.currentSize = 0;
    this.sum = 0;
};

MovingAverage.prototype.next = function (val) {
    this.dll.append(val);
    this.sum += val;
    this.currentSize++;
    if (this.currentSize > this.size) {
        const delNode = this.dll.removeFirst();
        this.sum -= delNode.val;
        this.currentSize--;
    }
    return this.sum / this.currentSize
};

class ListNode {
    constructor(val) {
        this.next = null;
        this.prev = null;
        this.val = val;
    }
    remove() {
        this.prev.next = this.next;
        this.next.prev = this.prev;
        this.next = null;
        this.prev = null;
    }
}

class DoubleLinkedList {
    constructor() {
        this.tail = new ListNode ();
        this.head = new ListNode ();
        this.head.next = this.tail;
        this.tail.prev = this.head;
    }

    append(val) {
        const node = new ListNode (val);
        const prev = this.tail.prev;
        prev.next = node;
        node.prev = prev;
        node.next = this.tail;
        this.tail.prev = node;
    }

    removeFirst () {
        const node = this.head.next;
        node.remove();
        return node;
    }
}