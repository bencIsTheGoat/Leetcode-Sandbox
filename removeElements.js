var removeElements = function (head, val) {
    if (!head) return head;
    let curr = head

    while (curr) {
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