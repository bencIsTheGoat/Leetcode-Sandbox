var merge = function (nums1, m, nums2, n) {
    if (m === 0) {
        nums2.forEach((ele, idx) => {
            nums1[idx] = ele;
        })
    }
    while (n > 0) {
        if (nums1[m - 1] >= nums2[n - 1]) {
            nums1[m + n - 1] = nums1[m - 1];
            m--;
        } else {
            nums1[m + n - 1] = nums2[n - 1];
            n--;
        }
    }
};