var solveNQueens = function (n, row = 0, rowSet = new Set(), colSet = new Set(), diagSet = new Set(), output = queenBoard(n), res = []) {
    let i = 0;
    while (i < n) {
        if (safe(row, i, rowSet, colSet, diagSet)) {
            place(row, i, rowSet, colSet, diagSet, output);
            if (row + 1 === n) {
                res.push(stringBoard(output));
            } else {
                res = solveNQueens(n, row + 1, rowSet, colSet, diagSet, output, res);
            }
            remove(row, i, rowSet, colSet, diagSet, output, res);
        }
        output[row][i] = '.'
        i++;
    }
    return res;
};

function stringBoard(board) {
    return board.map(ele => ele.join(''));
}

function queenBoard(n) {
    let board = [...new Array(n)].map(ele => new Array(n).fill('.'));
    return board
}

function safe(row, col, rowSet, colSet, diagSet) {
    const rowCheck = !rowSet.has(row);
    const colCheck = !colSet.has(col);
    for (const pair of diagSet) {
        const arr = pair.split(',');
        const y = parseInt(arr[0]);
        const x = parseInt(arr[1]);
        if (Math.abs(row - y) === Math.abs(col - x)) return false;
    }
    return rowCheck && colCheck;
};

function place(row, col, rowSet, colSet, diagSet, queenBoard) {
    rowSet.add(row);
    colSet.add(col);
    diagSet.add(String([row, col]));
    queenBoard[row][col] = "Q";
};

function remove(row, col, rowSet, colSet, diagSet, queenBoard) {
    queenBoard[row][col] = '.';
    rowSet.delete(row);
    colSet.delete(col);
    for (const pair of diagSet) {
        const arr = pair.split(',');
        const y = parseInt(arr[0]);
        const x = parseInt(arr[1]);
        if (row === y && col === x) diagSet.delete(pair);
    }
};