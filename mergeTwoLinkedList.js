// Merge two sorted linked lists and return it as a new list. The new list 
// should be made by splicing together the nodes of the first two lists.

var mergeTwoLists = function (l1, l2) {
    // base case: if both linked lists have been traversed return null for tails pointer
    // also have to handle the case when the linked lists are different lengths
    if (l1 === null && l2 === null) {
        return null;
    } else if (l1 === null) {
        return l2;
    } else if (l2 === null) {
        return l1
    }
    // check if the node exists, in case of diff lengths
    const val1 = l1 ? l1.val : -Infinity;
    const val2 = l2 ? l2.val : -Infinity;
    // do value comnparison and create node with smaller value
    if (val1 < val2) {
        var node = new ListNode(val1);
        // set pointer to recursive call, while incrementing down appropriate ll
        node.next = mergeTwoLists(l1.next, l2);
    } else {
        var node = new ListNode(val2);
        node.next = mergeTwoLists(l1, l2.next);
    }
    return node;
};