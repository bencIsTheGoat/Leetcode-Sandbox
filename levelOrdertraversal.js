var levelOrder = function (root, level = 0, out = []) {
    if (!root) return [];
    if (out[level]) {
        out[level].push(root.val);
    } else {
        out[level] = [root.val];
    }
    levelOrder(root.left, level + 1, out);
    levelOrder(root.right, level + 1, out);
    return out;
};