// Given a string containing just the characters 
// '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

var isValid = function (s) {
    // create obj that holds pair values for efficient lookup
    const obj = { '(': ')', '{': '}', '[': ']' };
    // create stack to push/pop opposite pair
    const stack = []
    // iterate thru string
    for (let char of s) {
        // if the char is an opening char, push the corresponding pair onto stack
        if (obj[char]) {
            stack.push(obj[char]);
        // if the char is closing char, the pop the most recent pair off the stack
        // and compare with char to make sure they are a pair
        } else if (stack.pop() !== char) {
            return false;
        }
    }
    // stack must be 0 in order to be true, covers odd cases
    return stack.length === 0;
};