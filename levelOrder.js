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
        if (levels.length === level) {
            levels.push([]);
        }
        levels[level].push(root.val);
        if (root.left) {
            helper(root.left, level + 1);
        }
        if (root.right) {
            helper(root.right, level + 1)
        }
    }
    helper(root, 0);
    return levels;
}