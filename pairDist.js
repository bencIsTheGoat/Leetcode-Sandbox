function smallestDistancePair(nums, k) {
    const sorted = nums.sort((a, b) => a - b);
    let low = 0;
    let high = sorted[sorted.length - 1] - sorted[0];

    while (low < high) {
        console.log('high', high)
        console.log('low', low)
        const mid = Math.floor((high + low) / 2);
        const validGuessBool = validGuess(sorted, mid, k);
        if (validGuessBool) {
            high = mid;
        } else {
            low = mid + 1
        }
    }
    return low;
}

function validGuess(nums, guess, k) {
    let left = 0, count = 0;
    for (let i = 0; i < nums.length; i++) {
        while (nums[i] - nums[left] > guess) {
            left++
        }
        count += i - left
    }
    return count >= k
}