function candyCrush(string) {
    let count = 1;
    for (let i = 0; i < string.length; i++) {
        if (string[i] === string[i + 1]) {
            count++;
        } else {
            if (count >= 3) {
                string = candyCrush(string.slice(0, i - count + 1).concat(string.slice(i + 1)));
            }
            count = 1;
        }
    }
    return string;
}
