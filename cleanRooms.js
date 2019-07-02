var cleanRoom = function (robot, visited = new Set()) {
    const directions = [[-1, 0], [0, 1], [1, 0], [0, -1]];
    if (robot.needClean <= 0) return;
    robot.clean();
    visited.add(String([robot.row, robot.col]));
    let i = 0;
    while (i < 4) {
        const row = robot.row;
        const col = robot.col;
        const dir = robot.direction;
        const cell = [row + directions[dir][0], col + directions[dir][1]];
        if (!visited.has(String(cell)) && robot.move()) {
            cleanRoom(robot, visited);
            robot.turnRight();
            robot.turnRight();
            robot.move();
            robot.turnRight();
            robot.turnRight();
        }
        robot.turnRight();
        i++;
    }

};