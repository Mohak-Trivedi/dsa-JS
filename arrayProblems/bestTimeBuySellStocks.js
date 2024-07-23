// Problem: https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

// Brute Force Approach: TC: O(N^2), SC: O(1)
// Check each possible pairs of days for buying and selling stock.
// You can sell a stock only AFTER the day you buy it.
// We get TLE with this approach.
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let maxProfit = 0;
    for(let buyDay = 0;buyDay < prices.length - 1;buyDay++) {
        for(let sellDay = buyDay + 1;sellDay < prices.length;sellDay++) {
            let currProfit = prices[sellDay] - prices[buyDay];
            maxProfit = Math.max(currProfit, maxProfit);
        }
    }
    return maxProfit;
};


// Optimized Approach: TC: O(N), SC: O(1)
// To maximize profit: 
// 1. buy at minimum price 
// 2. sell at highest price present after the day at which minimum price was found 
// Start with considering 0th day price as minimum, and considering profit as 0.
// At each next day, check:
// if price < our min, then this is the actual min, update min.
// if price > our min, then this is a potential sell price, so store price - min
// in profit if it is > profit stored already.
// In this way, by the time we check all the day's prices, we ge the max profit 
// stored in profit.
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let currMin = prices[0]; // at least buy on day 0
    let profit = 0; // max profit until now 
    
    for(let i = 1;i < prices.length;i++) {
        // can I sell?
        if(prices[i] > currMin) {
            // you can sell, but check if the profit is better than max profit until now
            profit = Math.max(profit, prices[i] - currMin);
        } 
        // can I buy?
        if(prices[i] < currMin) {
            currMin = prices[i];
        }
    }

    return profit;
};