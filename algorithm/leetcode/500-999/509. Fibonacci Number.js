/**
 * tag:动态规划
 * @param {number} n
 * @return {number}
 */

// 法一

var fib = function (n, map = {}) {
    return n < 2
        ? n
        : map[n]
        ? map[n]
        : (map[n] = fib(n - 1, map) + fib(n - 2, map));
};

var fib = function (n) {
    // 法二 动态规划
    // let dp = new Array(n + 1).fill(0);
    // dp[1] = 1;
    // for (let i = 2; i <= n; i++) {
    //     dp[i] = dp[i - 1] + dp[i - 2];
    // }
    // return dp[n];
    // 法三 dp 优化
    // if (n < 2) return n;
    // let one = 0,
    //     two = 1,
    //     cur;
    // for (let i = 2; i <= n; i++) {
    //     cur = one + two;
    //     one = two;
    //     two = cur;
    // }
    // return cur;
};
