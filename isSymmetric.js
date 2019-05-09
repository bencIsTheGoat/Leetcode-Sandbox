// Given a binary tree, check whether it is a mirror of itself (ie, symmetric around its center).

var isSymmetric = function (root) {
    if (!root) return true;
    if (!root.right && !root.left) return true;
    if (!root.right || !root.left) return false;
    return recurHelper(root.left, root.right);
};

function recurHelper(left, right) {
    if (!left && !right) return true;
    if (!right || !left) return false;
    const innerCheck = left.val === right.val;
    const recurCheck1 = recurHelper(left.right, right.left);
    const recurCheck2 = recurHelper(left.left, right.right);
    return innerCheck && recurCheck1 && recurCheck2;
}