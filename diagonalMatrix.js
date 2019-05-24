// Given a matrix of M x N elements (M rows, N columns), return all elements 
// of the matrix in diagonal order as shown in the below image.

var findDiagonalOrder = function (matrix) {
    // initialize output matrix;
    let output = [];
    // if the matrix is empty of a 1-D matrix is given return empty
    if (matrix.length === 0 || matrix[0].length === 0) return []
    // seed output with top left hand value
    output = [matrix[0][0]]
    // x represents right and left
    let x = 0;
    // y represents up and down
    let y = 0;
    // max represents the number of elements in matrix
    let max = (matrix[0].length * matrix.length) - 1
    // initialize counter representing how many elements traversed
    let count = 0
    // while the number of elements traversed it less than number of elements
    while (count < max) {
        count++
        const up = matrix[y - 1] ? matrix[y - 1][x] : undefined;
        const right = matrix[y] ? matrix[y][x + 1] : undefined;
        const downLeft = matrix[y + 1] ? matrix[y + 1][x - 1] : undefined;
        const down = matrix[y + 1] ? matrix[y + 1][x] : undefined;
        const left = matrix[y] ? matrix[y][x - 1] : undefined;
        const upRight = matrix[y - 1] ? matrix[y - 1][x + 1] : undefined;
        const evenIdxBool = (x + y) % 2 === 0;
        if (evenIdxBool) {
            if (right === undefined) {
                output.push(down);
                y++;
            } else if (up === undefined) {
                output.push(right);
                x++;
            } else {
                output.push(upRight);
                x++;
                y--;
            }
        } else {
            if (down === undefined) {
                output.push(right);
                x++;
            } else if (left === undefined) {
                output.push(down);
                y++;
            } else {
                output.push(downLeft);
                x--;
                y++;
            }
        }
    }
    return output;
};