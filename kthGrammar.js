

var kthGrammar = function (N, K) {
    if (N === 1) return 0;
    return (1 - K % 2) ^ kthGrammar(N - 1, Math.floor((K + 1) / 2))
};
console.log(kthGrammar(5, 1));

