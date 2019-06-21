// Given a binary tree, find its maximum depth.

// The maximum depth is the number of nodes along the longest path from the 
// root node down to the farthest leaf node.

var maxDepth = function (root) {
    if (root === null) return 0;
    const left = maxDepth(root.left);
    const right = maxDepth(root.right);
    return 1 + Math.max(left, right);
};

var maxDepth = function (root) {
    if (!root) return 0;
    let max = 0;
    const stack = [[root, 1]];
    while (stack.length > 0) {
        const [node, depth] = stack.pop();
        if (!node.left && !node.right && depth > max) {
            max = depth
        }
        if (node.right) stack.push([node.right, depth + 1]);
        if (node.left) stack.push([node.left, depth + 1]);
    }
    return max;
};