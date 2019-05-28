/*
Given a linked list, swap every two adjacent nodes and return its head.

You may not modify the values in the list's nodes, only nodes itself may be changed.
*/

var swapPairs = function (head) {
    if (head === null) return null;
    if (head.next === null) return head
    const grandHead = head.next.next;
    const newHead = head.next;
    newHead.next = head;
    head.next = swapPairs(grandHead)
    return newHead;
};