


var numIslands = function (grid) {
    const visited = new Set();
    let count = 0;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (visited.has([i, j])) continue;
            if (grid[i][j] === '1') {
                let stack = [[i, j]];
                while (stack.length > 0) {
                    const [y, x] = stack.shift();
                    const up = grid[y - 1] ? grid[y - 1][x] : undefined;
                    const down = grid[y + 1] ? grid[y + 1][x] : undefined;
                    const left = grid[y] ? grid[y][x - 1] : undefined;
                    const right = grid[y] ? grid[y][x + 1] : undefined;
                    if (up === '1') {
                        grid[y - 1][x] = '0'
                        visited.add([y - 1, x]);
                        stack.unshift([y - 1, x]);
                    }
                    if (down === '1') {
                        grid[y + 1][x] = '0';
                        visited.add([y + 1, x]);
                        stack.unshift([y + 1, x]);
                    }
                    if (right === '1' && !visited.has([y, x + 1])) {
                        grid[y][x + 1] = '0';
                        visited.add([y, x + 1]);
                        stack.unshift([y, x + 1]);
                    }
                    if (left === '1' && !visited.has([y, x - 1])) {
                        grid[y][x - 1] = '0';
                        visited.add([y, x - 1])
                        stack.unshift([y, x - 1]);
                    }
                }
                count++
            }
        }
    }
    return count;
};