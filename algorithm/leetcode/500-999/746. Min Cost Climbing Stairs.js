/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    let len = cost.length
    if(len <= 2) return 0
    let dp = new Array(len + 1).fill(0)
    // dp[0] = dp[1] = 0
    for(let i = 2;i <= len;i++){
        dp[i] = Math.min(dp[i - 1] + cost[i - 1],dp[i - 2] + cost[i - 2]) 
    }
    return dp[len]
};