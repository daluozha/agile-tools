/**
 * 巴什博弈
 * tag:动态规划
 * @param {number} n
 * @return {boolean}
 */
var canWinNim = function(n) {
    // 法一：
    // return n % 4 

    // 法二：
    // if(n < 4) return true
    // let dp = new Array(n+1).fill(false)
    // dp[1] = dp[2] = dp[3] = true
    // for(let i = 4;i <= n;i++) 
    //     dp[i] = !(dp[i - 1] && dp[i - 2] && dp[i - 3])
    // return dp[n]

    // 法二优化版
    if(n < 4) return true
    let one = true,two = true,three = true,cur
    for(let i = 4;i <= n;i++){
        cur = !(one && two && three)
        one = two
        two = three
        three = cur
    }
    return cur
};