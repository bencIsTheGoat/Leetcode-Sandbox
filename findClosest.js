var closestValue = function (root, target, prev = Infinity) {
    const round = Math.round(target);
    if (!root) return prev;

    const prevDiff = Math.abs(prev - target);
    const currDiff = Math.abs(root.val - target);
    prev = prevDiff < currDiff ? prev : root.val

    if (round === root.val) {
        return round;
    } else if (round > root.val) {
        return closestValue(root.right, target, prev);
    } else if (round < root.val) {
        return closestValue(root.left, target, prev);
    }
};