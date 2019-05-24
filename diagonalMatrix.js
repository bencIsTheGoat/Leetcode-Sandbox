// Given a matrix of M x N elements (M rows, N columns), return all elements 
// of the matrix in diagonal order as shown in the below image.

var findDiagonalOrder = function (matrix) {
    // initialize output matrix;
    let output = [];
    // if the matrix is empty of a 1-D matrix is given return empty
    if (matrix.length === 0 || matrix[0].length === 0) return []
    output = [matrix[0][0]]
    let x = 0;
    let y = 0;
    let max = (matrix[0].length * matrix.length) - 1
    let count = 0
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