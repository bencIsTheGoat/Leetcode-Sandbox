// Given a non-negative integer numRows, generate the first numRows of Pascal's triangle.

var generate = function (numRows) {
    // initialize an array to hold levels of triangle
    let triangle = [];
    // count indicates current level
    let count = 1;
    while (count <= numRows) {
        // first level of triangle is 1
        if (count === 1) {
            triangle.push([1]);
        // second level of triangle is 1, 1
        } else if (count === 2) {
            triangle.push([1, 1]);
        } else {
            // initialize level with 1 at the start
            let level = [1];
            // grab the last level to help create newest level
            const lastLevel = triangle[count - 2];
            // iterate over last level
            for (let i = 0; i < lastLevel.length - 1; i++) {
                // new number is sum of curr index and prev
                const newNum = lastLevel[i] + lastLevel[i + 1];
                // push the new num
                level.push(newNum);
            }
            // end the level with 1
            level.push(1);
            // push the level in the triangle
            triangle.push(level);
        }
        count++;
    }
    return triangle;
};