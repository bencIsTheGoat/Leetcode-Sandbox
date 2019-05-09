/*
You are given two non - empty linked lists representing two non - negative 
integers.The digits are stored in reverse order and each of their nodes contain
a single digit. Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.
*/

// ugly and not very DRY but still linear time and constant space, so whats good
// basic idea is to add two tens, hundreds, etc digits and save the remainder if
// greater than single digit
var addTwoNumbers = function (l1, l2) {
    // set two heads to variables to be able to move down ll
    let current1 = l1;
    let current2 = l2;
    // initialize remainder variable 
    let remainder = 0;
    // add up the values of the heads of the lls for new head of output ll
    let value = current1.val + current2.val;
    // if the value is greater than ten take the tens digit and set remainder to 1
    if (value >= 10) {
        value = value % 10
        remainder = 1;
    };
    // initialize new node for output ll and save it here to be able to return
    let head = new ListNode(value);
    // save new head to variable to be able to iterate
    let runHead = head;
    // initialize remainder var that will carry over to pointer
    let nextRemainder = 0;
    // make sure that the pointers exist otherwise set to 0, important to set to zero
    // because of different sizes of lls, also 0 falsey in js which is helpful
    current1 = current1.next ? current1.next : 0
    current2 = current2.next ? current2.next : 0;
    // if any of these exist we must perform iteration, covers edge case such that
    // two ll of length 1 output ll that has length two think [5],[5] => [1 -> 0]
    while (remainder || nextRemainder || current1 || current2) {
        // have to check whether the nodes exist other set to zero
        const val1 = current1 ? current1.val : 0;
        const val2 = current2 ? current2.val : 0;
        // add up the value for the pointer, remainder var only pertains to initial
        // remainder from head, nextRemainder is one used going forward
        let nextValue = val1 + val2 + remainder + nextRemainder;
        nextRemainder = 0;
        remainder = 0;
        if (nextValue >= 10) {
            nextValue = nextValue % 10;
            nextRemainder = 1;
        }
        runHead.next = new ListNode(nextValue);
        runHead = runHead.next;
        current1 = current1.next ? current1.next : 0;
        current2 = current2.next ? current2.next : 0;
    };

    return head;
};