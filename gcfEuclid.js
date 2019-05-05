// Given an array of numbers, find the greatest common factor

// Amazon practice assesment question

function gcfArray(array) {
    let result = array[0];
    for (let i = 0; i < array.length - 1; i++) {
        result = gcf(result, array[i + 1]);
    }
    return result
}

function gcf(num1, num2) {
    if (num1 === 0) {
        return num2;
    } else {
        return gcf(num2 % num1, num1);
    }
}

console.log(gcfArray([36, 28, 16, 4]));
