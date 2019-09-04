var search = function (reader, target, start = 0, end = findLength(reader)) {
    const mid = Math.floor((start + end) / 2);
    const val = reader.get(mid);
    if (val === target) {
        return mid;
    } else if (val < target) {
        return start === end ? -1 : search(reader, target, mid + 1, end)
    } else {
        return start === end ? -1 : search(reader, target, start, mid)
    }
};

function findLength(reader, start = 0, end = 20000) {
    const mid = Math.floor((start + end) / 2);
    if (start === end) return start
    const val = reader.get(mid);
    if (val === 2147483647) {
        return findLength(reader, start, mid);
    } else {
        return findLength(reader, mid + 1, end);
    }
} 