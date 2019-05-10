/*
Given a binary tree, return the level order traversal of its nodes' 
values. (ie, from left to right, level by level).
*/

var levelOrder = function (root, level = 0) {
    let levels = [];
    if (!root) return levels;
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