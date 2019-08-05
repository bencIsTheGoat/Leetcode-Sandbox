var treeToDoublyList = function (root) {
    let last = null;
    let first = null;
    if (!root) return null;
    function helper(node) {
        if (node) {
            helper(node.left);
            if (last) {
                last.right = node;
                node.left = last;
            } else {
                first = node;
            }
            last = node;
            helper(node.right)
        }

    }
    helper(root);
    first.left = last;
    last.right = first;
    return first;
};