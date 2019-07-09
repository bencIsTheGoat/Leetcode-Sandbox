var deckRevealedIncreasing = function (deck) {
    if (deck.length === 0) return [];
    deck.sort((a, b) => b - a);
    const out = [deck[0]];
    for (let i = 1; i < deck.length; i++) {
        out.unshift(out.pop());
        out.unshift(deck[i]);
    }
    return out;
};