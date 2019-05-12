// Given a linked list, remove the n-th node from the end of list and return its head.

var removeNthFromEnd = function (head, n) {
    if (n === 1 && !head.next) return head = null;
    let lastPointer = head;
    let counter = 0;
    while (counter <= n) {
        if (!lastPointer) {
            head = head.next;
            return head;
        }
        lastPointer = lastPointer.next
        counter++;
    }
    let curr = head;
    while (lastPointer) {
        curr = curr.next;
        lastPointer = lastPointer.next;
    }
    const next = curr.next.next
    curr.next = next;
    return head;


};