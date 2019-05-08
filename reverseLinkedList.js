// Reverse a singly Linked lis

var reverseList = function (head) {
    if (!head) return head
    let stack = [];
    let current = head;
    while (current) {
        stack.unshift(current);
        current = current.next;
    }
    // console.log(stack)
    head = stack[0];
    let newNode = head;
    // console.log(newNode.next)
    for (let i = 1; i < stack.length; i++) {
        newNode.next = stack[i];
        newNode = newNode.next;
    }
    newNode.next = stack[stack.length - 1];
    newNode.next = null;
    // console.log(head)
    return head;
};