var totalNQueens = function (n, row = 0, count = 0, rowSet = new Set(), colSet = new Set(), diagArr = new Set()) {
    let i = 0;
    while (i < n) {
        if (safe(row, i, rowSet, colSet, diagArr)) {
            place(row, i, rowSet, colSet, diagArr);
            if (row + 1 === n) {
                count++;
            } else {
                count = totalNQueens(n, row + 1, count, rowSet, colSet, diagArr);
            }
            remove(row, i, rowSet, colSet, diagArr)
        }
        i++;
    }
    return count;
};

function remove(row, col, rowSet, colSet, diagArr) {
    rowSet.delete(row);
    colSet.delete(col);
    for (let pair of diagArr) {
        const arr = pair.split(',');
        const y = parseInt(arr[0]);
        const x = parseInt(arr[1]);
        if (row === y && col === x) diagArr.delete(pair);
    }
}

function place(row, col, rowSet, colSet, diagArr) {
    rowSet.add(row);
    colSet.add(col);
    diagArr.add(String([row, col]));
}

function safe(row, col, rowSet, colSet, diagArr) {
    const rowCheck = !rowSet.has(row);
    const colCheck = !colSet.has(col);
    let diagCheck = true;
    for (let pair of diagArr) {
        const arr = pair.split(',');
        const y = parseInt(arr[0]);
        const x = parseInt(arr[1]);
        if (Math.abs(row - y) === Math.abs(col - x)) diagCheck = false;
    }
    return rowCheck && colCheck && diagCheck;
}