/**
 * tag：动态规划
 * @param {number} n
 * @return {number}
 */
 var waysToStep = function(n) {
    // let m = 1e9 + 7,
    //     dp = [0,1,2,4]
    // //  dp = new Array(n+1).fill(0)
    // // dp[0] = 0,dp[1] = 1,dp[2] = 2,dp[3] = 4
    // for(let i = 4;i < n + 1;i++){
    //     dp[i] = (dp[i-1] + dp[i-2] + dp[i-3]) % m
    // }
    // return dp[n]

    // 优化
    if(n < 3) return n
    let one = 1,
        two = 2,
        three = 4,
        cur = 4
    for(let i = 4; i <= n; i++){
      cur = (one + two + three) % 1000000007
      one = two
      two = three
      three = cur
    }
    return cur
};