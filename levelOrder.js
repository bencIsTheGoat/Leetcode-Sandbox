/*
Given a binary tree, return the level order traversal of its nodes' 
values. (ie, from left to right, level by level).
*/

// done recursively
var levelOrder = function (root) {
    // initialize 2D array that will hold levels
    let levels = [];
    // if there is no tree passed in just return empty array
    if (!root) return levels;
    // define recursive helper function, easier in my mind to do this way since
    // were continually interacting with levels
    const helper = (root, level = 0) => {
        // add an array for each level into the levels array
        if (levels.length === level) {
            levels.push([]);
        }
        // key into levels in order to push the root value into its appropriate level
        levels[level].push(root.val);
        // call the function on the level and right node if they exist
        if (root.left) {
            helper(root.left, level + 1);
        }
        if (root.right) {
            helper(root.right, level + 1)
        }
    }
    // call the function here to run the recursion helper
    helper(root, 0);
    return levels;
}