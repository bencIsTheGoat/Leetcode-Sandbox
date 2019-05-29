// Given a binary tree, find its maximum depth.

// The maximum depth is the number of nodes along the longest path from the 
// root node down to the farthest leaf node.

var maxDepth = function (root) {
    if (root === null) return 0;
    const left = maxDepth(root.left);
    const right = maxDepth(root.right);
    return 1 + Math.max(left, right);
};