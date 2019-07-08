this.solved = false;

var solveSudoku = function (board, rowObj, colObj, secObj, row = 0, col = 0) {
    const [trowObj, tcolObj, tsecObj] = getRow(board);
    rowObj = rowObj || trowObj;
    colObj = colObj || tcolObj;
    secObj = secObj || tsecObj;

    if (board[row][col] === '.') {
        let i = 1;
        while (i < 10) {
            if (valid(rowObj, colObj, secObj, row, col, i)) {
                place(board, row, col, i, rowObj, colObj, secObj);
                if (row === 8 && col === 8) {
                    this.solved = true;
                } else {
                    this.solved = false;
                    solveSudoku(board, rowObj, colObj, secObj, col === 8 ? row + 1 : row, col === 8 ? 0 : col + 1);
                }
                if (this.solved === false) {
                    remove(board, row, col, i, rowObj, colObj, secObj)
                }
            }
            i++
        }
    } else {
        if (row === 8 && col === 8) {
            this.solved = true;
        } else {
            this.solved = false;
            board = solveSudoku(board, rowObj, colObj, secObj, col === 8 ? row + 1 : row, col === 8 ? 0 : col + 1);
        }
    }
};

function remove(board, row, col, num, rowObj, colObj, secObj) {
    board[row][col] = '.';
    rowObj[row].delete(String(num));
    colObj[col].delete(String(num));
    const rowSec = Math.floor(row / 3);
    const colSec = Math.floor(col / 3);
    if (rowSec === 0 && colSec === 0) secObj[0].delete(String(num));
    if (rowSec === 0 && colSec === 1) secObj[1].delete(String(num));
    if (rowSec === 0 && colSec === 2) secObj[2].delete(String(num));
    if (rowSec === 1 && colSec === 0) secObj[3].delete(String(num));
    if (rowSec === 1 && colSec === 1) secObj[4].delete(String(num));
    if (rowSec === 1 && colSec === 2) secObj[5].delete(String(num));
    if (rowSec === 2 && colSec === 0) secObj[6].delete(String(num));
    if (rowSec === 2 && colSec === 1) secObj[7].delete(String(num));
    if (rowSec === 2 && colSec === 2) secObj[8].delete(String(num));
    return board;
}

function place(board, row, col, num, rowObj, colObj, secObj) {
    board[row][col] = String(num);
    rowObj[row].add(String(num));
    colObj[col].add(String(num));
    const rowSec = Math.floor(row / 3);
    const colSec = Math.floor(col / 3);
    if (rowSec === 0 && colSec === 0) secObj[0].add(String(num));
    if (rowSec === 0 && colSec === 1) secObj[1].add(String(num));
    if (rowSec === 0 && colSec === 2) secObj[2].add(String(num));
    if (rowSec === 1 && colSec === 0) secObj[3].add(String(num));
    if (rowSec === 1 && colSec === 1) secObj[4].add(String(num));
    if (rowSec === 1 && colSec === 2) secObj[5].add(String(num));
    if (rowSec === 2 && colSec === 0) secObj[6].add(String(num));
    if (rowSec === 2 && colSec === 1) secObj[7].add(String(num));
    if (rowSec === 2 && colSec === 2) secObj[8].add(String(num));
    return board;
}

function valid(rowObj, colObj, secObj, row, col, num) {
    const rowCheck = !rowObj[row].has(String(num));
    const colCheck = !colObj[col].has(String(num));
    const rowSec = Math.floor(row / 3);
    const colSec = Math.floor(col / 3);
    let secCheck;
    if (rowSec === 0 && colSec === 0) secCheck = !secObj[0].has(String(num));
    if (rowSec === 0 && colSec === 1) secCheck = !secObj[1].has(String(num));
    if (rowSec === 0 && colSec === 2) secCheck = !secObj[2].has(String(num));
    if (rowSec === 1 && colSec === 0) secCheck = !secObj[3].has(String(num));
    if (rowSec === 1 && colSec === 1) secCheck = !secObj[4].has(String(num));
    if (rowSec === 1 && colSec === 2) secCheck = !secObj[5].has(String(num));
    if (rowSec === 2 && colSec === 0) secCheck = !secObj[6].has(String(num));
    if (rowSec === 2 && colSec === 1) secCheck = !secObj[7].has(String(num));
    if (rowSec === 2 && colSec === 2) secCheck = !secObj[8].has(String(num));
    return rowCheck && colCheck && secCheck;
}

function getRow(board) {
    const rowObj = {};
    const colObj = {};
    const secObj = {};
    const emptyArr = [];
    let u = 0;
    while (u < 9) {
        secObj[u] = new Set();
        u++;
    }
    for (let i = 0; i < board.length; i++) {
        rowObj[i] = new Set();
        colObj[i] = new Set();
        for (let j = 0; j < board[0].length; j++) {
            if (board[i][j] !== '.') rowObj[i].add(board[i][j]);
            if (board[j][i] !== '.') colObj[i].add(board[j][i]);
            const iSec = Math.floor(i / 3);
            const jSec = Math.floor(j / 3);
            if (iSec === 0 && jSec === 0 && board[i][j] !== '.') secObj[0].add(board[i][j]);
            if (iSec === 0 && jSec === 1 && board[i][j] !== '.') secObj[1].add(board[i][j]);
            if (iSec === 0 && jSec === 2 && board[i][j] !== '.') secObj[2].add(board[i][j]);
            if (iSec === 1 && jSec === 0 && board[i][j] !== '.') secObj[3].add(board[i][j]);
            if (iSec === 1 && jSec === 1 && board[i][j] !== '.') secObj[4].add(board[i][j]);
            if (iSec === 1 && jSec === 2 && board[i][j] !== '.') secObj[5].add(board[i][j]);
            if (iSec === 2 && jSec === 0 && board[i][j] !== '.') secObj[6].add(board[i][j]);
            if (iSec === 2 && jSec === 1 && board[i][j] !== '.') secObj[7].add(board[i][j]);
            if (iSec === 2 && jSec === 2 && board[i][j] !== '.') secObj[8].add(board[i][j]);

        }
    }
    return [rowObj, colObj, secObj];
}