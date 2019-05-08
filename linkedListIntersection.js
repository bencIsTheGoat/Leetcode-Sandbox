// Write a program to find the node at which the intersection of two singly linked lists begins.


// used set to store first LL and then check second LL in set
var getIntersectionNode = function (headA, headB) {
    const set = new Set();
    let current1 = headA;
    while (current1) {
        set.add(current1);
        current1 = current1.next;
    }
    let current2 = headB;
    while (current2) {
        if (set.has(current2)) return current2;
        current2 = current2.next;
    }
    return null;
};