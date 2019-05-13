// Remove all elements from a linked list of integers that have value val.

var removeElements = function (head, val) {
    // if the head doesnt exist just return it
    if (!head) return head;
    // assign curr to head in order to iterate
    let curr = head
    while (curr) {
        // save the current pointer to variable
        let next = curr.next
        if (next && next.val === val) {
            while (next && next.val === val) {
                next = next.next;
            }
            curr.next = next;
        }
        curr = next;
    }
    if (head.val === val) {
        head = head.next ? head.next : null
    }
    return head
};