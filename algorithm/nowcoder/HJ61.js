// tag: 动态规划 dp

// https://www.nowcoder.com/practice/bfd8234bb5e84be0b493656e390bdebf?tpId=37&tqId=21284&rp=1&ru=/exam/oj/ta&qru=/exam/oj/ta&sourceUrl=%2Fexam%2Foj%2Fta%3Fpage%3D2%26tpId%3D37%26type%3D37&difficulty=undefined&judgeStatus=undefined&tags=&title=

// 设f(m,n) 为m个苹果，n个盘子的放法数目，则先对n作讨论，
// 当n>m：必定有n-m个盘子永远空着，去掉它们对摆放苹果方法数目不产生影响。即if(n>m) f(m,n) = f(m,m)
// 当n<=m：不同的放法可以分成两类：
// 1、有至少一个盘子空着，即相当于f(m,n) = f(m,n-1);
// 2、所有盘子都有苹果，相当于可以从每个盘子中拿掉一个苹果，不影响不同放法的数目，即f(m,n) = f(m-n,n).
// 而总的放苹果的放法数目等于两者的和，即 f(m,n) =f(m,n-1)+f(m-n,n)
// 数据范围 0 <= m <= 10, 1 <= n <= 10


// 解法1 递归
// let str;
// while ((str = readline())) {
//     let [m, n] = str.split(" ");
//     print(fn(m, n));
// }

// function fn(m, n) {
//     if (m == 1 || n == 1) return 1;
//     else if (m < 0 || n <= 0) {
//         return 0;
//     } else return fn(m, n - 1) + fn(m - n, n);
// }


// 解法2 dp
let str;
while ((str = readline())) {
  let [m, n] = str.split(" ").map(Number);
  // dp[m][n] 表示为将m个苹果放入n个盘子中的摆放方法总数
  let dp = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0));
  for (let i = 1; i <= n; i++) {
    dp[0][i] = 1; //0个苹果，一种放法
    dp[1][i] = 1; //1个苹果，一种放法
  }
  for (let i = 0; i <= m; i++) {
    dp[i][0] = 1;
    dp[i][1] = 1;
  }
  for (let i = 2; i <= m; i++) {
    for (let j = 2; j <= n; j++) {
      dp[i][j] = dp[i][j - 1] + (i >= j ? dp[i - j][j] : 0);
    }
  }
  print(dp[m][n]);
}
