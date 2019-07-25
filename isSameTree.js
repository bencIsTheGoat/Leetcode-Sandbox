var isSameTree = function (p, q) {
    if (!p && !q) return true;
    if ((!p && q) || (p && !q)) return false;
    const valCheck = p.val === q.val;
    const leftCheck = isSameTree(p.left, q.left);
    const rightCheck = isSameTree(p.right, q.right);
    return valCheck && leftCheck && rightCheck
};