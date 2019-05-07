/*
Given n non-negative integers a1, a2, ..., an , where each represents a point at
coordinate (i, ai). n vertical lines are drawn such that the two endpoints of
line i is at (i, ai) and (i, 0). Find two lines, which together with x-axis 
forms a container, such that the container contains the most water.
*/

// Same technique as deletion distance where you have two pointers and keep track
// of max
var maxArea = function (height) {
    // total keeps track of max
    let total = 0;
    // starting point at front of array
    let start = 0;
    // ending point at last idx
    let end = height.length - 1;
    // iterate until the start passes or is equal to the ending
    while (start <= end) {
        // get the width of current rectangle
        const width = end - start;
        // get the heigh of the rectangle which can only be as high as the smaller
        // length otherwise water will spill out of rectangle
        const minHeight = Math.min(height[start], height[end]);
        // calculate the basic rectangle base * height formula
        const area = minHeight * width;
        // if the running area is greater than the most recent max (total) then
        // replace the total with new max
        if (area > total) total = area;
        // if the left side of rectangle is smaller than the right side, increment
        // inside the array towards the right to try next rectangle with larger
        // right side
        if (height[start] < height[end]) {
            start++;
        // same thing but opposite
        } else if (height[start] > height[end]) {
            end--;
        // if the heights are equal we already have that max height so lets move
        // both pointers in to keep others
        } else {
            start++;
            end--;
        }
    }
    return total
};