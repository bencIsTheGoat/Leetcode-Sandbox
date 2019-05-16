// Given a linked list, return the node where the cycle begins. If there is no cycle, return null.

// uses the floyd algorithm
var detectCycle = function (head) {
    // if the head, heads pointer or heads pointers pointer doesnt exist then return null
    // cause we need at least 3 nodes to have cycle
    if (!head || !head.next || !head.next.next) return null;
    // set 2 variables going at different speeds, we set them immediately to new values
    // because the while loop needs to enter iteration initially
    let oneSpeed = head.next;
    let twoSpeed = head.next.next;
    // iterate until the pointers are equal indicating that a cycle exists
    while (twoSpeed !== oneSpeed) {
        // if the faster pointer is null we know there is no cycle
        if (!twoSpeed.next || !twoSpeed.next.next) return null;
        // iterate down the ll at one speed and at two speed
        twoSpeed = twoSpeed.next.next;
        oneSpeed = oneSpeed.next;
    }
    // set one of the pointers back to the head
    twoSpeed = head;
    // iterate until they are equal, due to floyds algo proof we know that those
    // equal pointers indicate the intersection
    while (twoSpeed !== oneSpeed) {
        // iterate down ll
        twoSpeed = twoSpeed.next;
        oneSpeed = oneSpeed.next;
    }
    return twoSpeed
};