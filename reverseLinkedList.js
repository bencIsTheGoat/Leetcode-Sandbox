// Reverse a singly Linked list

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
    head = stack[0];
    let newNode = head;
    for (let i = 1; i < stack.length; i++) {
        newNode.next = stack[i];
        newNode = newNode.next;
    }
    newNode.next = stack[stack.length - 1];
    newNode.next = null;
    return head;
};