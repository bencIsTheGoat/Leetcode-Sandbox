// Reverse a singly Linked list

var reverseList = function (head) {
    let prev = null;
    while (head) {
        const newHead = head.next;
        head.next = prev;
        prev = head;
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

