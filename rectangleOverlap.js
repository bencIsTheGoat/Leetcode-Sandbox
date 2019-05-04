// A rectangle is represented as a list [x1, y1, x2, y2], where (x1, y1) are 
// the coordinates of its bottom-left corner, and (x2, y2) 
// are the coordinates of its top-right corner.

// Two rectangles overlap if the area of their intersection is positive.To be 
// clear, two rectangles that only touch at the corner or edges do not overlap.

// Given two(axis - aligned) rectangles, return whether they overlap.

var isRectangleOverlap = function (rec1, rec2) {
    rec1width = rec1[0] - rec1[2];
    rec1height = rec1[1] - rec1[3];
    rec2width = rec2[0] - rec2[2];
    rec2height = rec2[1] - rec2[3];
    totalwidth = rec1width + rec2width;
    totalheight = rec1height + rec2height;

};