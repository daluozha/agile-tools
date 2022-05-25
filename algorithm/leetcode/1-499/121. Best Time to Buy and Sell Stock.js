/**
 * tag:动态规划
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    // dp[10]含义：前11只股票中能获取的最大利润

    // let len = prices.length,dp = new Array(prices.length).fill(0),minPrice = prices[0]
    // dp[0] = 0;
    // for(let i = 1;i < len;i++){
    //     min = Math.min(minPrice,prices[i])
    //     dp[i] = Math.max(dp[i-1],prices[i] - minPrice)
    // }
    // return dp.pop()

    // 优化：因为遍历过程只需要用到dp的前一个数，因此无需保存整个dp，使用一个max保存dp[i-1]就可以
    let minPrice = prices[0],max = 0
    for(let price of prices){
        minPrice = Math.min(minPrice,price)
        max = Math.max(max,price - minPrice)
    }
    return max
};