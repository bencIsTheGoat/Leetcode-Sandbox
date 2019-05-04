// A rectangle is represented as a list [x1, y1, x2, y2], where (x1, y1) are 
// the coordinates of its bottom-left corner, and (x2, y2) 
// are the coordinates of its top-right corner.

// Two rectangles overlap if the area of their intersection is positive.To be 
// clear, two rectangles that only touch at the corner or edges do not overlap.

// Given two(axis - aligned) rectangles, return whether they overlap.

var isRectangleOverlap = function (rec1, rec2) {
    // find the width and height for each rectangle
    const rec1width = rec1[2] - rec1[0];
    const rec1height = rec1[3] - rec1[1];
    const rec2width = rec2[2] - rec2[0];
    const rec2height = rec2[3] - rec2[1];
    // add the widths and heights for both rectangles to get total width and 
    // height, respectively
    const totalwidth = rec1width + rec2width;
    const totalheight = rec1height + rec2height;
    // find the two possible 'combined' widths
    const combowidth1 = Math.abs(rec1[0] - rec2[2]);
    const combowidth2 = Math.abs(rec2[0] - rec1[2]);
    // 'combined width' indicates the farthest distance between the leftside of the
    // leftmost rectangle and rightside of the rightmost rectangle
    const maxComboWidth = Math.max(combowidth1, combowidth2);
    // find the two possible 'combined' heights
    const comboheight1 = Math.abs(rec1[1] - rec2[3]);
    const comboheight2 = Math.abs(rec2[1] - rec1[3]);
    // 'combined height' indicates the farthest distance between the topside of the
    // topmost rectangle and bottomside of the bottommost rectangle
    const maxComboHeight = Math.max(comboheight1, comboheight2);
    // get booleans indicating whether combined height/width is less than
    // total width/height
    const heightBool = totalheight > maxComboHeight;
    const widthBool = totalwidth > maxComboWidth;


    return heightBool && widthBool;
};

rec1 = [0, 0, 1, 1], rec2 = [1, 0, 2, 1]

console.log(isRectangleOverlap(rec1, rec2));