// Given a binary tree, check whether it is a mirror of itself (ie, symmetric around its center).

var isSymmetric = function (root) {
    // if there is no root just return true
    if (!root) return true;
    // if there is no left child and right child just return true
    if (!root.right && !root.left) return true;
    // if there is one child but not another return false since its not symm
    if (!root.right || !root.left) return false;
    // call recursion helper function on children
    return recurHelper(root.left, root.right);
};

function recurHelper(left, right) {
    // if there is no left or right child we can return true
    if (!left && !right) return true;
    // if there is on child but not the other the tree is not symm
    if (!right || !left) return false;
    // this is just checking that the values are equal cause they must be
    const innerCheck = left.val === right.val;
    // this is the inner check, or the check that two nodes closest to each other
    // but accross the 'mirror' axis are equal
    const recurCheck1 = recurHelper(left.right, right.left);
    // this is the outercheck or the check that the outermost mirror children are equal
    const recurCheck2 = recurHelper(left.left, right.right);
    return innerCheck && recurCheck1 && recurCheck2;
}