// Given an array of numbers, find the greatest common factor

// Amazon practice assesment question

function gcfArray(array) {
    // grab first element of array to pass into helper function initially
    let result = array[0];
    // iterate thru the array checking the previous gcf with the current number
    for (let i = 0; i < array.length - 1; i++) {
        // get the new gcf by comparing the previous gcf with the next number
        result = gcf(result, array[i + 1]);
    }
    return result
}

// euclid algo that finds the gcf of 2 numbers in linear time
function gcf(num1, num2) {
    // when the first argument is zero return the second
    if (num1 === 0) {
        return num2;
    } else {
        // pass in the remainder of the second argument divided by first argument
        // and then pass in first argument into second on next recursive call
        return gcf(num2 % num1, num1);
    }
}

console.log(gcfArray([36, 28, 16, 4]));
