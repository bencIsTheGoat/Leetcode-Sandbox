function getHeight(root) {
    // return -1 when the node is empty, since empty nodes have height of -1
    if (!root) return -1;
    // recursively calls the function of the nodes right and left children,
    // taking the maximum of the height of either the left or right tree
    // add 1 to indicate a recursive call has been made, aka step down a level of tree
    return 1 + Math.max(getHeight(root.right), getHeight(root.left));
}

function isBalanced(root) {
    // if every subtree has been checked return true
    if (!root) return true;
    // calls helper getHeight function to get height of each subtree and checks
    // if the difference is greater than 1, use absolute value because right or 
    // left tree could be taller
    let difference = Math.abs(getHeight(root.left) - getHeight(root.right)) <= 1;
    // checks if entire tree and every subtree is balanced recursively
    return difference && isBalanced(root.right) && isBalanced(root.left);
}