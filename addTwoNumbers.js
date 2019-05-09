/*
You are given two non - empty linked lists representing two non - negative 
integers.The digits are stored in reverse order and each of their nodes contain
a single digit. Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.
*/

// ugly and not very DRY but still linear time and constant space, so whats good
var addTwoNumbers = function (l1, l2) {
    
    let current1 = l1;
    let current2 = l2;
    let remainder = 0;
    let value = current1.val + current2.val;
    if (value >= 10) {
        value = value % 10
        remainder = 1;
    };
    let head = new ListNode(value);
    let runHead = head;
    let nextRemainder = 0;
    current1 = current1.next ? current1.next : 0
    current2 = current2.next ? current2.next : 0;

    while (remainder || nextRemainder || current1 || current2) {
        const val1 = current1 ? current1.val : 0;
        const val2 = current2 ? current2.val : 0;
        let nextValue = val1 + val2 + remainder + nextRemainder;
        nextRemainder = 0;
        remainder = 0;
        if (nextValue >= 10) {
            nextValue = nextValue % 10;
            nextRemainder = 1;
        }
        runHead.next = new ListNode(nextValue);
        runHead = runHead.next;
        current1 = current1.next ? current1.next : 0;
        current2 = current2.next ? current2.next : 0;
    };

    return head;
};