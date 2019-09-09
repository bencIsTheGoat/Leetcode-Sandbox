var intersection = function (nums1, nums2) {
    const set1 = new Set(nums1)
    const result = new Set;
    for (const num of nums2) {
        if (set1.has(num)) {
            result.add(num)
        }
    }
    return Array.from(result)
};

var intersect = function (nums1, nums2) {
    const dic1 = {}
    for (const num of nums1) {
        dic1[num] = dic1[num] !== undefined ? dic1[num] + 1 : 1
    }


    const result = []
    for (const num of nums2) {
        if (dic1[num] && dic1[num] > 0) {
            result.push(num)
            dic1[num]--
        }
    }

    return result

};