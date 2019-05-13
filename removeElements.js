// Remove all elements from a linked list of integers that have value val.

var removeElements = function (head, val) {
    // if the head doesnt exist just return it
    if (!head) return head;
    // assign curr to head in order to iterate
    let curr = head
    while (curr) {
        // save the current pointer to variable
        let next = curr.next
        // if the pointer exists and the pointers val is equal to val passed in,
        // check if any consecutive nodes also have the same value
        if (next && next.val === val) {
            while (next && next.val === val) {
                next = next.next;
            }
            // set the current pointer to new pointer where value doesnt equal val
            curr.next = next;
        }
        // set the curr to next to iterate down ll
        curr = next;
    }
    // covers the edge case when the head value is equal to val passed in
    if (head.val === val) {
        head = head.next ? head.next : null
    }
    return head
};