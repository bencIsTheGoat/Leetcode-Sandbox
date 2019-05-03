// grab middle idx and create node
// set left and right to recur call of left and right slice
var sortedArrayToBST = function (nums) {
    if (nums.length === 0) return null;
    const midIdx = Math.floor(nums.length / 2);
    const node = new TreeNode(nums[midIdx]);
    const left = nums.slice(0, midIdx);
    const right = nums.slice(midIdx + 1);
    node.right = sortedArrayToBST(right);
    node.left = sortedArrayToBST(left);

    return node;
};