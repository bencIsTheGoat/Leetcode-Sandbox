// Given a matrix of m x n elements (m rows, n columns), return all elements of 
// the matrix in spiral order.

var spiralOrder = function (matrix) {
    let output = [];
    if (matrix.length === 0 || matrix[0].length === 0) return output;
    let x = 0;
    let y = 0;
    const numElements = matrix.length * matrix[0].length - 1;
    let count = 0;
    output.push(matrix[0][0]);
    let countDirection = 0;
    while (count < numElements) {
        count++;
        const right = matrix[y] ? matrix[y][x + 1] : undefined;
        const down = matrix[y + 1] ? matrix[y + 1][x] : undefined;
        const left = matrix[y] ? matrix[y][x - 1] : undefined;
        const up = matrix[y - 1] ? matrix[y - 1][x] : undefined;
        if (countDirection === 0) {
            if (right === undefined) {
                countDirection++;
                output.push(down);
                matrix[y][x] = undefined;
                y++;
            } else {
                output.push(right);
                matrix[y][x] = undefined;
                x++;
            }
        } else if (countDirection === 1) {
            if (down === undefined) {
                countDirection++;
                output.push(left);
                matrix[y][x] = undefined;
                x--;
            } else {
                output.push(down);
                matrix[y][x] = undefined;
                y++;
            }
        } else if (countDirection === 2) {
            if (left === undefined) {
                countDirection++;
                output.push(up);
                matrix[y][x] = undefined;
                y--;
            } else {
                output.push(left);
                matrix[y][x] = undefined;
                x--;
            }
        } else {
            if (up === undefined) {
                countDirection = 0;
                output.push(right);
                matrix[y][x] = undefined;
                x++;
            } else {
                output.push(up);
                matrix[y][x] = undefined;
                y--;
            }
        }
    }
    return output;
};