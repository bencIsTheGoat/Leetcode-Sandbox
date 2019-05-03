function getHeight(root) {
    if (!root) return -1;
    return 1 + Math.max(getHeight(root.right), getHeight(root.left));
}

function isBalanced(root) {
    if (!root) return true;
    let difference = Math.abs(getHeight(root.left) - getHeight(root.right)) <= 1;
    return difference && isBalanced(root.right) && isBalanced(root.left);
}