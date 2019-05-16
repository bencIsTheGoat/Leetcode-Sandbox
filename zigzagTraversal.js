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
        const evenBool = level % 2 === 0;
        if (evenBool) {
            levels[level].push(root.val);
        } else {
            levels[level].unshift(root.val);
        }
        recurHelper(root.left, level + 1);
        recurHelper(root.right, level + 1);
    }
    recurHelper(root, 0);
    return levels;
};