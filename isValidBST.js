// given root of tree, determine whether its valid BST

var isValidBST = function (root, max = Infinity, min = -Infinity) {
    if (!root) return true;
    const leftBool = isValidBST(root.left, root.val, min);
    const rightBool = isValidBST(root.right, max, root.val);
    return max > root.val && min < root.val && leftBool && rightBool;
};