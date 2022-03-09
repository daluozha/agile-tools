/**
 * @param {number} n
 * @return {number}
 */

// 法一
// var tribonacci = function(n) {
//     let dp = new Array(n + 1).fill(0)
//     dp[0] = 0,dp[1] = 1,dp[2] = 1 
//     for(let i = 3;i <= n;i++){
//         dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3]
//     }
//     return dp[n]
// };

// 法二 尾递归
var tri = function(n,res1,res2,res3) {
    if(n <= 0) return res1
    return tri(n - 1,res2,res3,res1 + res2 + res3)
};
var tribonacci = function(n) {
    return tri(n,0,1,1)
};