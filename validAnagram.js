var isAnagram = function (s, t) {
    if (s.length !== t.length) return false;
    const obj = {};
    for (let i = 0; i < s.length; i++) {
        const charS = s[i];
        const charT = t[i];
        obj[charS] = obj[charS] ? obj[charS] + 1 : 1;
        obj[charT] = obj[charT] ? obj[charT] - 1 : -1;
    }
    for (const key in obj) {
        if (obj[key] !== 0) return false;
    }
    return true;
};