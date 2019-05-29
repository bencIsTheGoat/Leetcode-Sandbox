// Given a binary tree, find its maximum depth.

// The maximum depth is the number of nodes along the longest path from the 
// root node down to the farthest leaf node.

var maxDepth = function (root) {
    if (root === null) return 0;
    const left = 1 + maxDepth(root.left);
    const right = 1 + maxDepth(root.right);
    return Math.max(left, right);
};