// Given a linked list, determine if it has a cycle in it.

var hasCycle = function (head) {
    let oneSpeed = head;
    let twoSpeed = head;
    while (oneSpeed && twoSpeed) {
        if (!twoSpeed.next || !twoSpeed.next.next) return false;
        twoSpeed = twoSpeed.next.next;
        const currBool = twoSpeed.next === oneSpeed;
        const nextBool = twoSpeed === oneSpeed;
        if (currBool || nextBool) return true;
        oneSpeed = oneSpeed.next;
    }
    return false;
};