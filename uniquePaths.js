var uniquePaths = function (m, n) {
    const matrix = Array.from({ length: m }, () => Array.from({ length: n }));

    let i = 0;
    while (i < Math.min(m, n)) {
        traverse(matrix, i, i);
        i++;
    }
    console.log(matrix)
    return matrix[m - 1][n - 1];
};

function traverse(matrix, row, col) {
    const rowCopy = row;
    const colCopy = col;
    while (col < matrix[0].length) {
        if (rowCopy === 0) {
            matrix[row][col] = 1;
        } else {
            matrix[row][col] = matrix[row][col - 1] + matrix[row - 1][col];
        }
        col++;
    }
    row = rowCopy;
    col = colCopy;
    while (row < matrix.length) {
        if (colCopy === 0) {
            matrix[row][col] = 1;
        } else {
            matrix[row][col] = matrix[row][col - 1] + matrix[row - 1][col];
        }
        row++;
    }
}