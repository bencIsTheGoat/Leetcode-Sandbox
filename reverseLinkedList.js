// Reverse a singly Linked list

// Use a stack to implement

var reverseList = function (head) {
    if (!head) return head
    let stack = [];
    let current = head;
    while (current) {
        stack.unshift(current);
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