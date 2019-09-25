function findMedianSortedArrays(nums1, nums2) {
    let smallArr;
    let largeArr;
    let smallLeft;
    let smallRight;
    if (nums2.length >= nums1.length) {
        return medianHelper(nums1, nums2)
    } else {
        return medianHelper(nums2, nums1)
    }
}

function medianHelper(shortArray, longArray, smallLeft = 0, smallRight = shortArray.length) {
    const midShort = Math.floor((smallLeft + smallRight) / 2);
    const midLong = Math.floor((shortArray.length + longArray.length + 1) / 2) - midShort;
    if (midShort < smallRight && shortArray[midShort] < longArray[midLong - 1]) {
        return medianHelper(shortArray, longArray, smallLeft + 1, smallRight);
    } else if (midShort > smallLeft && shortArray[midShort - 1] > longArray[midLong]) {
        return medianHelper(shortArray, longArray, smallLeft, smallRight - 1);
    } else {
        let maxLeft = Math.max(shortArray[midShort - 1], longArray[midLong - 1]);
        if (midShort === 0) maxLeft = longArray[midLong - 1];
        if (midLong === 0) maxLeft = shortArray[midShort - 1];
        if ((shortArray.length + longArray.length) % 2 === 1) return maxLeft;
        let minRight = Math.min(shortArray[midShort], longArray[midLong]);
        if (midShort === shortArray.length) minRight = longArray[midLong];
        if (midLong === longArray.length) minRight = shortArray[midShort];

        return (maxLeft + minRight) / 2
    }
}

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