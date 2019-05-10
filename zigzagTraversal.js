/*
Given a binary tree, return the zigzag level order traversal of its nodes' 
values. (ie, from left to right, then right to left for the next level and 
alternate between).
*/

var zigzagLevelOrder = function (root) {
    let levels = [];
    if (!root) return levels;
    const recurHelper = (root, level) => {
        if (!root) return;
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