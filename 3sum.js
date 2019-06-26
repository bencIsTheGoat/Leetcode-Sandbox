var threeSum = function (nums) {
    let triplets = [];
    const checkSet = new Set();
    for (let i = 0; i < nums.length; i++) {
        const res = twoSum(nums, -1 * nums[i], i);
        for (const pair of res) {
            const strPair = String(pair);
            if (!checkSet.has(strPair)) triplets.push(pair);
            checkSet.add(strPair);
        }
    }
    return triplets;
};

function twoSum(nums, target, skipIdx) {
    const output = [];
    const checkSet = new Set();
    const set = new Set();
    for (let i = 0; i < nums.length; i++) {
        if (skipIdx === i) continue;
        if (set.has(nums[i])) {
            const prop = [target - nums[i], nums[i], target * -1].sort();
            const strProp = String(prop);
            if (!checkSet.has(strProp)) output.push(prop);
            checkSet.add(strProp);
        }
        set.add(target - nums[i]);
    }
    return output;
}