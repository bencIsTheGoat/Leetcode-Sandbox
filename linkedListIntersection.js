// Write a program to find the node at which the intersection of two singly linked lists begins.


// used set to store first LL and then check second LL in set
var getIntersectionNode = function (headA, headB) {
    // init set to store the nodes of first ll
    const set = new Set();
    let current1 = headA;
    // iterate thru first ll and add all nodes to set
    while (current1) {
        set.add(current1);
        current1 = current1.next;
    }
    let current2 = headB;
    // iterate thru the second ll and check if any of the nodes are in the set
    while (current2) {
        if (set.has(current2)) return current2;
        current2 = current2.next;
    }
    return null;
};

// linear solution (i think) but constant space complexity
var getIntersectionNode = function (headA, headB) {
    // set a variable to both heads
    let currA = headA;
    let currB = headB;
    // iterate thru both linked lists until they are equal
    // if there is intersection eventually they will catch up with one another at null
    // the intersection
    while (currA !== currB) {
        // reassign the current node to its pointer if its not null, otherwise
        // start it back at the head
        currA = currA === null ? headA : currA.next;
        currB = currB === null ? headB : currB.next;
    }
    return currA
};