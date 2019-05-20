

var generate = function (numRows) {
    let triangle = [];
    let count = 1;
    while (count <= numRows) {
        if (count === 1) {
            triangle.push([1]);
        } else if (count === 2) {
            triangle.push([1, 1]);
        } else {
            let level = [1];
            const lastLevel = triangle[count - 2];
            for (let i = 0; i < lastLevel.length - 1; i++) {
                const newNum = lastLevel[i] + lastLevel[i + 1];
                level.push(newNum);
            }
            level.push(1);
            triangle.push(level);
        }
        count++;
    }
    return triangle;
};