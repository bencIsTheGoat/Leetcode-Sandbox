var findMedianSortedArrays = function (nums1, nums2) {
    const totalNum = nums1.length + nums2.length;
    const isEven = totalNum % 2 === 0;
    const kthNum = isEven ? Math.floor(totalNum / 2) - 1 : Math.floor(totalNum / 2);

    let i = 0;
    let j = 0;
    let count = 1
    while (count <= kthNum) {
        const num1 = nums1[i] !== undefined ? nums1[i] : Infinity
        const num2 = nums2[j] !== undefined ? nums2[j] : Infinity
        if (num1 <= num2) {
            i++;
        } else {
            j++;
        }
        count++
    }

    const num1 = nums1[i] !== undefined ? nums1[i] : Infinity
    const num2 = nums2[j] !== undefined ? nums2[j] : Infinity

    if (num1 <= num2) {
        const nextNum = nums1[i + 1] <= num2 ? nums1[i + 1] : num2
        return isEven ? (num1 + nextNum) / 2 : num1
    } else {
        const nextNum = nums2[j + 1] <= num1 ? nums2[j + 1] : num1
        return isEven ? (num2 + nextNum) / 2 : num2
    }

};