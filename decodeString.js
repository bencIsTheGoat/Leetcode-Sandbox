var decodeString = function (s) {
    let output = '';
    for (let i = 0; i < s.length; i++) {
        let int = parseInt(s[i]);
        let start = i;
        if (String(int) !== 'NaN') {
            while (String(parseInt(s[i])) !== 'NaN') {
                i++
            }
            int = parseInt(s.slice(start, i));
            i--
            let openCount = 1;
            let j = i + 2;
            while (openCount > 0) {
                if (s[j] === ']') openCount--;
                if (s[j] === '[') openCount++;
                j++;
            }
            output = output.concat(decodeString(s.slice(i + 2, j - 1)).repeat(int));
            i = j - 1
        } else {
            output = output.concat(s[i]);
        }
    }
    return output;
};