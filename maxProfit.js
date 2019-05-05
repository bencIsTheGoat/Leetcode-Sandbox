// Given array of stock prices, find the maximum profit
// Only buy and sell once


const maxProfit = function (prices) {
    // keep track of runningchange and totalchange, very much like largest
    // contiguous subsum problem
    let largestChange = 0;
    let runningChange = 0;
    for (let i = 0; i < prices.length - 1; i++) {
        // find the daily change or profit
        const change = prices[i + 1] - prices[i];
        // add the daily change to the running change
        runningChange += change;
        // if the running change dips below zero reset it to 0
        if (runningChange < 0) runningChange = 0;
        // if the running change is ever greater than the largest change then
        // set the largest change equal to the running
        if (runningChange > largestChange) largestChange = runningChange;
    }
    return largestChange;
};