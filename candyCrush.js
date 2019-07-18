var candyCrush = function (board) {
    let active = true;
    while (active) {
        active = false;
        const pos = {};
        for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < board[0].length; j++) {
                check(board, i, j, pos);
            }
        }
        console.log(pos)
        if (Object.keys(pos).length > 0) active = true;
        siftUp(board, pos);
    }
    return board;
};

// [1, 2, 3, 0, 0]
// [1, 0, 0, 2, 3]
function siftUp(board, pos) {
    const colNums = Object.keys(pos);
    for (const col of colNums) {
        const colIdx = parseInt(col);
        let lastIdx = board.length - 1;
        for (let i = board.length - 1; i >= 0; i--) {
            if (!pos[col].has(i)) {
                [board[i][col], board[lastIdx][col]] = [board[lastIdx][col], board[i][col]];
                lastIdx--;
            } else {
                board[i][col] = 0;
            }
        }
    }
}

function check(board, row, col, pos) {
    let i = 1;
    while (board[row][col] === board[row][col + i] && board[row][col] !== 0) {
        i++;
    }
    i--;
    if (i >= 2) {
        while (i >= 0) {
            // const key = String(col + i);
            if (pos[String(col + i)]) {
                pos[String(col + i)].add(row);
            } else {
                pos[String(col + i)] = new Set();
                pos[String(col + i)].add(row);
            }
            i--;
        }
    }

    let j = 1;
    let adjCell = board[row + j] ? board[row + j][col] : undefined;
    while (board[row][col] === adjCell && board[row][col] !== 0) {
        j++;
        adjCell = board[row + j] ? board[row + j][col] : undefined;

    }
    j--;

    if (j >= 2) {
        while (j >= 0) {
            const key = String(col);
            if (pos[key]) {
                pos[key].add(row + j);
            } else {
                pos[key] = new Set();
                pos[key].add(row + j);
            }
            j--;
        }
    }
}