/*
Given two sorted arrays arr1 and arr2 of passport numbers, implement a function 
findDuplicates that returns an array of all passport numbers that are both in 
arr1 and arr2. Note that the output array should be sorted in an ascending order.
*/

function findDuplicates(arr1, arr2) {
    // find the lengths of both arrays and set counters to zero
    const len1 = arr1.length;
    const len2 = arr2.length;
    let count1 = 0;
    let count2 = 0;
    let result = [];
    // while the counters are both less than the lengths of the arrays, iterate 
    while (count1 < len1 && count2 < len2) {
        // if the elements match, push the result and then increment both arrays
        if (arr1[count1] === arr2[count2]) {
            result.push(arr1[count1]);
            count1++;
            count2++;
        // if the element of arr1 is greater than the element is arr2 we must
        // increment arr2 in order to try and get them equal
        } else if (arr1[count1] > arr2[count2]) {
            count2++;
        } else {
            count1++;
        }
    }
    return result
}