

var getRow = function (rowIndex) {
    if (rowIndex === 0) return [1];
    if (rowIndex === 1) return [1, 1];
    const prev = getRow(rowIndex - 1);
    const newRow = [1];
    let i = 1;
    while (i < prev.length) {
        const val = prev[i - 1] + prev[i];
        newRow.push(val);
        i++;
    }
    newRow.push(1);
    return newRow;
};