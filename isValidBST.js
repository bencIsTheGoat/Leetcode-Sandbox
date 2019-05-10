// given root of tree, determine whether its valid BST


var isValidBST = function (root, max = Infinity, min = -Infinity) {
    // if there is no root passed in just return true
    if (!root) return true;
    // check that the left child is valid by passing in an upper bound of the 
    // current root's value and minimum of -infinity
    const leftBool = isValidBST(root.left, root.val, min);
    // check that the right child is valid by passing in a lower bound of the
    // current root's value and max of infinity
    const rightBool = isValidBST(root.right, max, root.val);
    // the max must be greater than the root's val and min must be less than
    // the root's val and the same must hold for the recursive calls of the children
    return max > root.val && min < root.val && leftBool && rightBool;
};