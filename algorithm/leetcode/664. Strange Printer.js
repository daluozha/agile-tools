/**
 * @param {string} s
 * @return {number}
 */
var strangePrinter = function(s) {
    let len = s.length
    if(!len) return 0
    let dp = new Array(len).fill(0).map(() => new Array(len).fill(Infinity))
    // dp[i][j] 代表的是 s[i, j] 这段字符串打印的最少次数
    for(let i = 0; i < len; i++){
        // 打印一个元素只需要一次
        dp[i][i] = 1
    }
    for(let i = len - 2; i >= 0; i--){
        for(let j = i + 1; j < len; j++){
            // i 单独打印，s[i + 1, j]这段另外打印
            dp[i][j] = 1 + dp[i + 1][j]
            
            // 尝试将 s[i, j] 分成 s[i, k] 和 s[k + 1, j]
            for(let k = i + 1; k < j; k++){
                if(s[i] === s[k]){
                    // 表示 i 放到 s[i + 1, k]里面一起打印
                    dp[i][j] = Math.min(dp[i][j], dp[i + 1][k] + dp[k + 1][j])
                }
            }

            if(s[i] === s[j]){
                // 表示 i 放到 s[i + 1, j]里面一起打印
                dp[i][j] = Math.min(dp[i][j], dp[i + 1][j])
            }
        }
    }
    return dp[0][len - 1]
};