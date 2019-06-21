var minDepth = function (root) {
    if (!root) return 0;
    const stack = [[root, 1]];
    let min = Infinity;
    while (stack.length > 0) {
        const [node, depth] = stack.pop()
        if (!node.left && !node.right && depth < min) {
            min = depth;
        }
        if (node.left) stack.push([node.left, depth + 1]);
        if (node.right) stack.push([node.right, depth + 1]);
    }
    return min
};