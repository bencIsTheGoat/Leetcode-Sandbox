// Given a linked list, remove the n-th node from the end of list and return its head.

var removeNthFromEnd = function (head, n) {
    // covers edge case 
    if (n === 1 && !head.next) return head = null;
    // set last pointer to head
    let lastPointer = head;
    let counter = 0;
    // this loop iterates down the ll n times in order to get last kth ele with
    // 2 pointer method
    while (counter <= n) {
        // covers edge case when n is larger than size of ll
        if (!lastPointer) {
            head = head.next;
            return head;
        }
        // reassign to iterate down ll
        lastPointer = lastPointer.next
        // increment counter
        counter++;
    }
    // iterate the 2 pointers down the ll, with the lastPointer starting n nodes down
    // when the last pointer hits the end the other pointer will be at the kth node
    let curr = head;
    while (lastPointer) {
        curr = curr.next;
        lastPointer = lastPointer.next;
    }
    // remove the kth node from the ll
    const next = curr.next.next
    curr.next = next;
    return head;
};