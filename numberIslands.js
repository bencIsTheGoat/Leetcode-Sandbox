/*
Given a 2d grid map of '1's (land) and '0's (water), count the number of 
islands. An island is surrounded by water and is formed by connecting adjacent 
lands horizontally or vertically. You may assume all four edges of the grid are
all surrounded by water.
*/


var numIslands = function (grid) {
    // keep track where we have visited
    const visited = new Set();
    // keep track of the number of islands
    let count = 0;
    // increment over grid
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            // if the island has been visited continue
            if (visited.has([i, j])) continue;
            // if the current element equal 1, meaning its an island, implement DFS
            // search and stack technqiue
            if (grid[i][j] === '1') {
                // initialize stack
                let stack = [[i, j]];
                // iterate until stack is empty
                while (stack.length > 0) {
                    // deconstruct the indexes
                    const [y, x] = stack.shift();
                    // find the vales of cardinal directions
                    const up = grid[y - 1] ? grid[y - 1][x] : undefined;
                    const down = grid[y + 1] ? grid[y + 1][x] : undefined;
                    const left = grid[y] ? grid[y][x - 1] : undefined;
                    const right = grid[y] ? grid[y][x + 1] : undefined;
                    // check if any of the surrounding elements are islands
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