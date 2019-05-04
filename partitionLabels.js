var partitionLabels = function (string) {
    let obj = lastIndex(string);
    let result = [];
    let farIdx = 0;
    let total = 0;
    for (let i = 0; i < string.length; i++) {
        let current = string[i];
        farIdx = obj[current] > farIdx ? obj[current] : farIdx;
        if (farIdx === i) {
            let length = farIdx - total + 1;
            result.push(length); 
            total += length;
        }
    }
    return result;
};

function lastIndex (string) {
    let obj = {};
    for (let i = 0; i < string.length; i++) {
        obj[string[i]] = i;
    }
    return obj;
}
console.log(partitionLabels("ababcbacadefegdehijhklij"));
