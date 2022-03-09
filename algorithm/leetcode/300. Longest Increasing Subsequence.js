/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    // 法一：动态规划
    // dp[i] 以nums[i]结尾的子序列最大长度
    // let len = nums.length
    // if(len === 1) return 1
    // let dp = new Array(len).fill(1),max = 1
    // for(let i = 1;i < len;i++){
    //     for(let j = 0;j < i;j++){
    //         if(nums[j] < nums[i]){
    //             dp[i] = Math.max(dp[i],dp[j] + 1)
    //         }
    //     }
    //     max = Math.max(max,dp[i])
    // }
    // return max

    // 贪心+二分
    let len = nums.length
    if(!len) return 0
    let tail = new Array(len + 1).fill(0), n = 1
    tail[n] = nums[0]
    for(let i = 1; i < len; i++){
        if(nums[i] > tail[n]) tail[++n] = nums[i]
        else {
            let left = 1, right = n, mid , pos = 0
            while(left <= right){
                mid = Math.floor((right - left) / 2 + left)
                if(tail[mid] < nums[i]) {
                    pos = mid
                    left = mid + 1
                }else {
                    right = mid - 1
                }
            }
            tail[pos + 1] = nums[i]
        }
    }
    return n
};