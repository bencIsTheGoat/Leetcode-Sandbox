var topKFrequent = function (words, k) {
    const dict = {};
    for (const word of words) {
        dict[word] = dict[word] !== undefined ? dict[word] + 1 : 1;
    }
    const max = Math.max(...Object.values(dict));
    const array = Array.from({ length: max });
    for (const key in dict) {
        if (array[dict[key]]) {
            array[dict[key]].push(key)
        } else {
            array[dict[key]] = [key];
        }
    }
    const output = [];
    for (const ele of array) {
        if (ele) {
            const sort = ele.sort();
            output.unshift(...sort)
        }
    }
    return output.slice(0, k)
};