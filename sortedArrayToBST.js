// Convert sorted array to binary search tree

var sortedArrayToBST = function (nums) {
    // if the length of current array is empty return null since no left/right node
    if (nums.length === 0) return null;
    // grab the middle index of the array in order to find parent node
    const midIdx = Math.floor(nums.length / 2);
    // create node instance with element in nums
    const node = new TreeNode(nums[midIdx]);
    // get left subtree
    const left = nums.slice(0, midIdx);
    // get right subtree
    const right = nums.slice(midIdx + 1);
    // initialize left and right node children with subtrees by recursive call
    node.right = sortedArrayToBST(right);
    node.left = sortedArrayToBST(left);
    return node;
};