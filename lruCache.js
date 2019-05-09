/*
Design and implement a data structure for Least Recently Used (LRU) cache. It 
should support the following operations: get and put.

get(key) - Get the value (will always be positive) of the key if the key 
exists in the cache, otherwise return -1.

put(key, value) - Set or insert the value if the key is not already present. 
When the cache reached its capacity, it should invalidate the least recently 
used item before inserting a new item.
*/


var LRUCache = function (capacity) {
    this.capacity = capacity;
    this.obj = {};
    this.dll = new DoubleLinkedList();
    this.size = 0;
};

LRUCache.prototype.get = function (key) {
    const ele = this.obj[key];
    if (!ele) return -1;
    ele.remove();
    this.obj[key] = this.dll.append(ele.key, ele.val);
    return ele.val;
};


LRUCache.prototype.put = function (key, value) {
    const ele = this.obj[key];
    if (ele) {
        ele.remove()
        this.size--;
    }
    this.obj[key] = this.dll.append(key, value);
    this.size++;
    if (this.size > this.capacity) {
        const rNode = this.dll.removeFirst();
        delete this.obj[rNode.key];
        this.size--;
    }
};

class DoubleLinkedList {
    constructor() {
        this.head = new ListNode();
        this.tail = new ListNode
        this.head.next = this.tail;
        this.tail.prev = this.head;
    }

    append(key, val) {
        const node = new ListNode(key, val);
        const prevTail = this.tail.prev;
        prevTail.next = node;
        node.prev = prevTail;
        node.next = this.tail;
        this.tail.prev = node;
        return node;
    }

    removeFirst() {
        const firstNode = this.head.next;
        firstNode.remove();
        return firstNode;
    }
}

class ListNode {
    constructor(key, val) {
        this.val = val;
        this.key = key;
        this.next = null;
        this.prev = null;
    }

    remove() {
        this.prev.next = this.next;
        this.next.prev = this.prev;
        this.next = null;
        this.prev = null;
    }
}