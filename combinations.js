var combine = function (n, k, out = [], first = 1, combo = []) {
    const copy = [...combo];
    if (copy.length === k) {
        out.push(copy);
    }
    while (first <= n) {
        copy.push(first);
        combine(n, k, out, first + 1, copy);
        copy.pop();
        first++;
    }
    return out;
}