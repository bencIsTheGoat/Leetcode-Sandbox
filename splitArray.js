var splitArray = function (nums, m, idx = 0, parts = 0, subMax, totalMax = 0, ans = Infinity) {
    if (idx === nums.length && m === parts) {
        ans = Math.min(ans, totalMax);
        return ans
    }
    if (idx === nums.length) {
        return Infinity
    }
    let ans1 = Infinity
    if (idx > 0) {
        ans1 = splitArray(nums, m, idx + 1, parts, subMax + nums[idx], Math.max(totalMax, subMax + nums[idx]), ans)
    }
    let ans2 = Infinity
    if (parts < m) {
        ans2 = splitArray(nums, m, idx + 1, parts + 1, nums[idx], Math.max(totalMax, nums[idx]), ans)
    }
    return Math.min(ans1, ans2)
};