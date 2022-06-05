/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 * tag: dp 动态规划
 */
 var minDistance = function(word1, word2) {
    let len1 = word1.length;
    let len2 = word2.length;
    // dp[x][y]表示strA的前x个字符串编辑成 strB的前y个字符所花费的代价
    let dp = new Array(len1 + 1).fill(0).map(() => new Array(len2 + 1).fill(0));
    for(let i = 0; i <= len1; i++){
      for(let j = 0; j <= len2; j++){
        if(i == 0) dp[i][j] = j
        else if(j == 0) dp[i][j] = i
        else if(word1[i - 1] == word2[j - 1]) dp[i][j] = dp[i - 1][j - 1]
        else dp[i][j] = Math.min(
        dp[i - 1][j - 1] + 1,
        dp[i - 1][j] + 1,
        dp[i][j - 1] + 1)
      }
    }
    return dp[len1][len2]
  };