function searchMatrix(matrix, target, x1 = 0, x2 = matrix[0] ? matrix[0].length : 0, y1 = 0, y2 = matrix.length) {
    let x = Math.floor((x1 + x2) / 2);
    let y = Math.floor((y1 + y2) / 2);
    if (x1 === x2 || y1 === y2) return false;
    if (matrix[y][x] === target) {
        return true;
    } else if (matrix[y][x] < target) {
        const topRight = searchMatrix(matrix, target, x + 1, x2, y1, y2);
        const bottomRight = searchMatrix(matrix, target, x + 1, x2, y + 1, y2);
        const bottomLeft = searchMatrix(matrix, target, x1, x2, y + 1, y2);
        return topRight || bottomRight || bottomLeft;
    } else {
        const topLeft = searchMatrix(matrix, target, x1, x, y1, y);
        const topRight = searchMatrix(matrix, target, x + 1, x2, y1, y2);
        const bottomRight = searchMatrix(matrix, target, x + 1, x2, y + 1, y2);
        return topLeft || bottomRight || bottomRight;
    }
}