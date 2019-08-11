var getSkyline = function(buildings) {
    if (buildings.length === 1) return [  [buildings[0][0], buildings[0][2]], [buildings[0][1], 0]  ];
    if (buildings.length === 0) return []
    
    const mid = Math.floor(buildings.length / 2);
    
    const left = getSkyline(buildings.slice(0, mid));
    const right = getSkyline(buildings.slice(mid));
    
    return merge(left, right);
}

function update (x, y, arr) {
    if (arr.length === 0 || arr[arr.length - 1][0] !== x) {
        arr.push([x, y])
    } else {
        arr[arr.length - 1][1] = y;
    }
}

function merge (left, right) {
    if (left.length === 0 || right.length === 0) return [ ...left, ...right ];
    
    const result = [];
    let [leftY, rightY, currY] = [0, 0, 0];
    let leftIdx = 0;
    let rightIdx = 0;
    
    while (leftIdx < left.length && rightIdx < right.length) {
        const leftX = left[leftIdx][0];
        const rightX = right[rightIdx][0];
        
        if (leftX < rightX) {
            leftY = left[leftIdx][1];
            const maxY = Math.max(leftY, rightY);
            if (maxY !== currY) {
                update(leftX, maxY, result);
            }
            leftIdx++;
            currY = maxY;
        } else {
            rightY = right[rightIdx][1];
            const maxY = Math.max(leftY, rightY);
            if (maxY !== currY) {
                update(rightX, maxY, result);
            }
            currY = maxY
            rightIdx++;
        }
    }
    
    while (leftIdx < left.length) {
        const leftX = left[leftIdx][0];
        let leftY = left[leftIdx][1];
        if (currY !== leftY) {
            update(leftX, leftY, result)
        }
        currY = leftY
        leftIdx++
    }
    
    while (rightIdx < right.length) {
        const rightX = right[rightIdx][0];
        let rightY = right[rightIdx][1];
        if (currY !== rightY) {
            update(rightX, rightY, result)
        }
        currY = rightY
        rightIdx++
    }
    
    return result;
}