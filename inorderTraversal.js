var inorderTraversal = function (root) {
    if (!root) return [];
    const left = inorderTraversal(root.left);
    const right = inorderTraversal(root.right);
    return [...left, root.val, ...right];
};