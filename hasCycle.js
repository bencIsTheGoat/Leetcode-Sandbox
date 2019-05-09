// Given a linked list, determine if it has a cycle in it.

// use two pointer method

var hasCycle = function (head) {
    // use two pointer method that has one iterating one node at a time
    let oneSpeed = head;
    // has the other going down the ll two nodes at a time #lightspeedbitch
    let twoSpeed = head;
    // prolly dont need to check that both nodes are valid but too scared to change
    // honestly worried about the twospeed skipping past the null, but pretty irrational thought
    // especially since i have another check on line 14
    while (oneSpeed && twoSpeed) {
        // basically checking if there is a null value in linked list
        // if there is we know there cant possible be a cycle
        if (!twoSpeed.next || !twoSpeed.next.next) return false;
        twoSpeed = twoSpeed.next.next;
        const currBool = twoSpeed.next === oneSpeed;
        const nextBool = twoSpeed === oneSpeed;
        if (currBool || nextBool) return true;
        oneSpeed = oneSpeed.next;
    }
    return false;
};