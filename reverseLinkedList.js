// Reverse a singly Linked list

// recursive way
var reverseList = function (head, prev = null) {
    if (head === null) return prev;
    const oldHead = head.next
    const oldPrev = prev;
    prev = head;
    prev.next = oldPrev;
    return reverseList(oldHead, prev)
};

// slick way, no space complexity
var reverseList = function (head) {
    // init prev to null for new tail to point to null
    let prev = null;
    // while the head of the ll is a valid node
    while (head) {
        // save the pointer of current head
        const newHead = head.next;
        // set the current head's pointer to prev head's pointer
        head.next = prev;
        // set the prev to the current head
        prev = head;
        // set the head to the current head's pointer to iterate
        head = newHead;

    }
    
    return prev;
};

// Use a stack to implement

var reverseList = function (head) {
    // if the head is undefined then just return undefined since theres no ll
    if (!head) return head;
    // use stack to implement 
    let stack = [];
    // set head to variable so we can iterate over ll
    let current = head;
    // iterate until we hit the tail
    while (current) {
        // add each node to top of stack
        stack.unshift(current);
        // reassign so we can iterate over ll
        current = current.next;
    }
    // set the head of the ll to the first element in the stack (last node added)
    head = stack[0];
    // save to variable so we can iterate over;
    let newNode = head;
    // iterate over the stack but leave last one in for assignment of tail
    for (let i = 1; i < stack.length; i++) {
        // set each nodes pointer to the element in the stack
        newNode.next = stack[i];
        // reassign to move down ll
        newNode = newNode.next;
    }
    // set the last node to the tail
    newNode.next = stack[stack.length - 1];
    newNode.next = null;
    return head;
};

