function addFiles (array) {
    console.log(array);
    if (array.length === 2) return array[0] + array[1];
    let [firstMin, array1] = findMin(array);
    let [secondMin, array2] = findMin(array1);
    array2.push(firstMin + secondMin);
    return firstMin + secondMin + addFiles(array2);
}

function findMin(array) {
    if (array.length === 0) return [0, []];
    if (array.length === 1) return [array[0], []];
    let min = array[0];
    let minIdx = 0;
    for (let i = 1; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i];
            minIdx = i;
        }
    }
    array = array.slice(0, minIdx).concat(array.slice(minIdx + 1));
    return [min, array];
}

console.log(addFiles([4, 6, 8, 10]))
