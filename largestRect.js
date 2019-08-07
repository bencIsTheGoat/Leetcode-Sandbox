var largestRectangleArea = function (heights, start = 0, end = heights.length - 1) {
    if (start > end) return 0;
    let minIdx = start;
    let min = heights[start];
    for (let i = start + 1; i <= end; i++) {
        if (heights[i] < min) {
            min = heights[i];
            minIdx = i;
        }
    }
    const left = largestRectangleArea(heights, start, minIdx - 1);
    const right = largestRectangleArea(heights, minIdx + 1, end);
    const area = min * (end - start + 1)
    return Math.max(left, right, area);
}; 