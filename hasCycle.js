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
        // reassign the twospeed so that it goes down ll twice as fast
        twoSpeed = twoSpeed.next.next;
        // basic logic here is if the twospeed pointer overtakes the onespeed,
        // we know its a circle, so each time we iterate down the ll with the two diff
        // pointers we will check if the twosped has caught up
        const currBool = twoSpeed.next === oneSpeed;
        // i check both the pointer of twospeed and itself because i was worried
        // about skipping over in odd length ll
        const nextBool = twoSpeed === oneSpeed;
        // if either of those conditions are true then return true
        if (currBool || nextBool) return true;
        // reassign slower pointer
        oneSpeed = oneSpeed.next;
    }
    // if the onespeed or twospeed pointer is null we can return false cause 
    // circle ll cant have null value
    return false;
};