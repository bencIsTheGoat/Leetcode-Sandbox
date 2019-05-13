// is the given array a max heap?

function isMaxHeap(array, idx = 1) {
    if (idx >= array.length - 1) return true;
    const left = array[idx * 2] ? array[idx * 2] : -Infinity;
    const right = array[idx * 2 + 1] ? array[idx * 2 + 1] : -Infinity;
    if (array[idx] < Math.max(left, right)) return false;
    return isMaxHeap(array, idx + 1);
}

function isMaxHeap(array) {
    for (let i = 1; i < array.length; i++) {
        const left = array[i * 2] ? array[i * 2] : -Infinity;
        const right = array[i * 2 + 1] ? array[i * 2 + 1] : -Infinity;
        if (array[i] < Math.max(left, right)) return false;
    }
    return true;
}
