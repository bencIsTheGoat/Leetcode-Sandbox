var generateParenthesis = function (n, string = '', out = [], left = 0, right = 0) {
    if (string.length === n * 2) {
        out.push(string);
        return
    }
    if (left < n) {
        generateParenthesis(n, string + '(', out, left + 1, right);
    }
    if (right < left) {
        generateParenthesis(n, string + ')', out, left, right + 1);
    }
    return out;
};