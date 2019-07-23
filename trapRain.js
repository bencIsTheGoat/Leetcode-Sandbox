var trap = function (height) {
    const maxIdx = height.indexOf(Math.max(...height));
    const globalMax = Math.max(...height);
    let total = 0;
    let diffs = [];
    let i = 0;
    while (i <= maxIdx) {
        diffs.push(globalMax - height[i]);
        i++;
    }
    let max = diffs[0];
    for (let j = 1; j < diffs.length; j++) {
        if (diffs[j] > max) {
            total += (diffs[j] - max);
        } else {
            max = diffs[j]
        }
    }
    i = height.length - 1;
    diffs = [];
    while (i >= maxIdx) {
        diffs.push(globalMax - height[i]);
        i--;
    }
    max = diffs[0];
    for (let j = 1; j < diffs.length; j++) {
        if (diffs[j] > max) {
            total += (diffs[j] - max);
        } else {
            max = diffs[j]
        }
    }
    return total;
};