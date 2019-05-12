// Given a linked list, return the node where the cycle begins. If there is no cycle, return null.

var detectCycle = function (head) {
    if (!head || !head.next || !head.next.next) return null;
    let oneSpeed = head.next;
    let twoSpeed = head.next.next;
    while (twoSpeed !== oneSpeed) {
        if (!twoSpeed.next || !twoSpeed.next.next) return null;
        twoSpeed = twoSpeed.next.next;
        oneSpeed = oneSpeed.next;
    }
    twoSpeed = head;
    while (twoSpeed !== oneSpeed) {
        twoSpeed = twoSpeed.next;
        oneSpeed = oneSpeed.next;
    }

    return twoSpeed
};