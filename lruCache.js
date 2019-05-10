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
    // initialize lrucache by setting capacity
    this.capacity = capacity;
    // create obj
    this.obj = {};
    // create double linked list
    this.dll = new DoubleLinkedList();
    // init size to keep track
    this.size = 0;
};

// high level: grab the element with the given key from the obj and use that to
// remove from double linked list and add to the front since its most recently used
LRUCache.prototype.get = function (key) {
    // find element in object
    const ele = this.obj[key];
    // if theres no element return -1
    if (!ele) return -1;
    // remove the element from the dll
    ele.remove();
    // overwrite the element in the object with dll element that has been added
    // to end of dll
    this.obj[key] = this.dll.append(ele.key, ele.val);
    // return the value
    return ele.val;
};

// basically does the same thing as get but also prunes the cache if size is greater
// than the capacity
LRUCache.prototype.put = function (key, value) {
    // find the node in the object
    const ele = this.obj[key];
    // if the element exists remove it from the dll
    if (ele) {
        ele.remove()
        // decrease length of lrucache
        this.size--;
    }
    // add the node to the end of dll (cause most recent) and overwrite old value
    this.obj[key] = this.dll.append(key, value);
    // increase legnth of lrucache
    this.size++;
    // if the size of the lru cache is greater than the capacity prune the lrucache
    if (this.size > this.capacity) {
        // call dll remove first method that returns the node to be removed
        const rNode = this.dll.removeFirst();
        // delete the node from the object
        delete this.obj[rNode.key];
        this.size--;
    }
};

class DoubleLinkedList {
    // init dll with head and tail that point to eachother
    constructor() {
        this.head = new ListNode();
        this.tail = new ListNode();
        this.head.next = this.tail;
        this.tail.prev = this.head;
    }

    // appends new item just before tail
    append(key, val) {
        // create new list node with key value
        const node = new ListNode(key, val);
        // save previous node to tail
        const prevTail = this.tail.prev;
        // set the previous node pointer to new node inserting
        prevTail.next = node;
        // set the new nodes prev pointer to old prev tail
        node.prev = prevTail;
        // set the new nodes next pointer tail
        node.next = this.tail;
        // set the tails prev pointer new node
        this.tail.prev = node;
        return node;
    }

    removeFirst() {
        // grab the first node after the head
        const firstNode = this.head.next;
        // call remove method from list node class
        firstNode.remove();
        // return the removed node (makes it easy to delete from obj in lrucache)
        return firstNode;
    }
}

class ListNode {
    // basic double linked node class with 2 pointers, prev and next
    constructor(key, val) {
        this.val = val;
        this.key = key;
        this.next = null;
        this.prev = null;
    }

    // remove method that set the prev pointer's next pointer to next pointer and
    // vice versa
    remove() {
        this.prev.next = this.next;
        this.next.prev = this.prev;
        this.next = null;
        this.prev = null;
    }
}