/**
 * tag:动态规划
 * @param {number} n
 * @return {number}
 */
// var climbStairs = function(n) {
//     // dp[i]的含义为表示爬到第i级台阶的方案数
//     // let dp=new Array(n+1).fill(0)
//     // dp[0]=1,dp[1]=1,dp[2]=2
//     // for(let i=3;i<n+1;i++){
//     //     dp[i]=dp[i-1]+dp[i-2]
//     // }
//     // return dp[n]

//     // 优化：因为dp[i]只跟前两项有关，因此可以只维护两个变量而不是整个数组
//     if(n < 3) return n
//     let one = 1,two = 2,cur
//     for(let i = 3;i <= n;i++){
//         cur = one + two
//         one = two
//         two = cur
//     }
//     return cur
// };

// 尾递归优化
var climbStairs = function (n, res1 = 1, res2 = 1) {
  if (n === 1) return res1;
  return climbStairs(n - 1, res1 + res2, res1);
};
