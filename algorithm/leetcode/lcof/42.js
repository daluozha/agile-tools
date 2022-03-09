/**
 * 同lc53
 * @param {number[]} nums
 * @return {number}
 */
 var maxSubArray = function(nums) {
    let len = nums.length
    let dp = new Array(len + 1).fill(Number.MIN_VALUE),
        max = nums[0]
    dp[0] = 0,dp[1] = nums[0]
    for(let i = 2;i <= len;i++){
        dp[i]  = dp[i - 1] > 0 ? dp[i - 1] + nums[i - 1] : nums[i - 1]
        max = Math.max(max, dp[i])
    }
    return max
};