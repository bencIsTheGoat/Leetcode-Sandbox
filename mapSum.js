/**
 * Initialize your data structure here.
 */
var MapSum = function () {
    this.head = new Node('', 0);
    this.words = {}
};

class Node {
    constructor(key, val) {
        this.key = key;
        this.val = val;
        this.children = {}
    }
}

/** 
 * @param {string} key 
 * @param {number} val
 * @return {void}
 */
MapSum.prototype.insert = function (key, val, idx = 0, children = this.head.children) {
    if (idx === key.length) {
        this.words[key] = val;
        return null;
    }
    if (key[idx] in children) {
        children[key[idx]].val = key in this.words ? children[key[idx]].val - this.words[key] + val : children[key[idx]].val + val;
    } else {
        children[key[idx]] = new Node(key[idx], val);
    }
    this.insert(key, val, idx + 1, children[key[idx]].children);
};

/** 
 * @param {string} prefix
 * @return {number}
 */
MapSum.prototype.sum = function (prefix, idx = 0, children = this.head.children) {
    if ((prefix.length - 1) === idx) {
        return prefix[idx] in children ? children[prefix[idx]].val : 0;
    }
    if (prefix[idx] in children) {
        return this.sum(prefix, idx + 1, children[prefix[idx]].children);
    } else {
        return 0;
    }
};

/**
 * Your MapSum object will be instantiated and called as such:
 * var obj = new MapSum()
 * obj.insert(key,val)
 * var param_2 = obj.sum(prefix)
 */ 