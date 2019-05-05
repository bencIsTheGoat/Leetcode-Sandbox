function getHeight(root) {
    // return -1 when the node is empty, since empty nodes have height of -1
    if (!root) return -1;
    // recursively calls the function of the nodes right and left children,
    // taking the maximum of the height of either the left or right tree
    // add 1 to indicate a recursive call has been made, aka step down a level of tree
    return 1 + Math.max(getHeight(root.right), getHeight(root.left));
}

function isBalanced(root) {
    if (!root) return true;
    let difference = Math.abs(getHeight(root.left) - getHeight(root.right)) <= 1;
    return difference && isBalanced(root.right) && isBalanced(root.left);
}