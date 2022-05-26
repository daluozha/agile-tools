/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function (text1, text2) {
    const m = text1.length,
        n = text2.length;

    // dp 表示为 text1[0: i] 和 text2[0: j] 的最长公共子序列的长度
    const dp = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0));
    for (let i = 1; i <= m; i++) {
        const c1 = text1[i - 1];
        for (let j = 1; j <= n; j++) {
            const c2 = text2[j - 1];
            if (c1 === c2) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }
    return dp[m][n];
};


// 最长公共子串和最长公共子序列区别
 
// 举个栗子：
// str1="123ABCD456"  str2 = "ABE12345D"
// 最长公共子串是：123
// 最长公共子序列是：12345
 
// 这两个都可以用动态规划，只是状态转移方程有点区别
 
// 最长公共子序列是：
// dp[i][j] -- 表示子串str1[0...i]和子串str[0...j]的最长公共子序列
// 当str1[i] == str2[j]时，dp[i][j] = dp[i-1][j-1] + 1;
// 否则，dp[i][j] = max(dp[i-1][j], dp[i][j-1]);
// 最优解为dp[len1-1][len2-1];
 
// 最长公共子串是： dp[i][j] -- 表示以str1[i]和str2[j]为结尾的最长公共子串 当str1[i] == str2[j]时，dp[i][j] = dp[i-1][j-1] + 1; 否则，dp[i][j] = 0;
// 最优解为max(dp[i][j]),其中0<=i<len1, 0<=j<len2;