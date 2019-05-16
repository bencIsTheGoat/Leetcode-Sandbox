/*
Given a binary tree, return the zigzag level order traversal of its nodes' 
values. (ie, from left to right, then right to left for the next level and 
alternate between).
*/

// similar to level traversal function but we do shift and unshift depending on
// whether index is odd or even
var zigzagLevelOrder = function (root) {
    // initialize empty levels array that will turn into 2D array with levels
    let levels = [];
    // edge case: if no tree then return empty array
    if (!root) return levels;
    // recursion helper function in which we pass in level and array
    const recurHelper = (root, level) => {
        // base case: if the root doesnt exist just return, meaning we've reached the
        // bottom of the current tree route/root??
        if (!root) return;
        // adding new empty subarray for each level
        // if the length of the levels array is equal to the level (arg passed in)
        // then push new empty subarray in
        if (levels.length === level) levels.push([]);
        // save a bool to variable checking whether then level is even or not
        const evenBool = level % 2 === 0;
        // if the level is even we want to push element into array indicating
        // a level traversal from left to right
        if (evenBool) {
            // push element into correct subarray using level from arg
            levels[level].push(root.val);
        // if the level is odd we want to unshift the element, indicating a level
        // traversal from right to left
        } else {
            // unshift element into correct subarray using level from arg
            levels[level].unshift(root.val);
        }
        // call the recursive function on the left and right child while increment
        // the level by 1
        recurHelper(root.left, level + 1);
        recurHelper(root.right, level + 1);
    }
    // call the recursive helper function on the root node passing it zero for level
    recurHelper(root, 0);
    return levels;
};