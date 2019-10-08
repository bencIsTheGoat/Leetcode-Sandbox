class Node {
    constructor(val) {
        this.val = val;
        this.children = {}
        this.isEnd = false;
    }
}
/**
 * Initialize your data structure here.
 */
var Trie = function () {
    this.root = new Node('');
};



/**
 * Inserts a word into the trie. 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
    let children = this.root.children;
    for (let i = 0; i < word.length; i++) {
        const char = word[i];
        const lastChar = i === (word.length - 1);
        if (char in children) {
            if (lastChar) {
                children[char].isEnd = true
            }
            children = children[char].children
        } else {
            children[char] = new Node(char)
            if (lastChar) {
                children[char].isEnd = true
            }
            children = children[char].children
        }
    }


};

/**
 * Returns if the word is in the trie. 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
    let children = this.root.children;
    for (let i = 0; i < word.length; i++) {
        const char = word[i];
        const lastChar = i === (word.length - 1);
        if (char in children) {
            if (lastChar) {
                return children[char].isEnd
            }
            children = children[char].children
        } else {
            return false
        }
    }
};

/**
 * Returns if there is any word in the trie that starts with the given prefix. 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
    let children = this.root.children;
    for (let i = 0; i < prefix.length; i++) {
        const char = prefix[i];
        const lastChar = i === (prefix.length - 1)
        if (char in children) {
            if (lastChar) {
                return true
            }
            children = children[char].children
        } else {
            return false
        }
    }
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */