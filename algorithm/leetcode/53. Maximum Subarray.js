/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxSubArray = function(nums) {
    // 法一：dp

    // 动态规划1: 20.63% 99.16%
    // let ending_here = nums[0],max = nums[0],len = nums.length
    // for(let i = 1;i < len;i++){
    //     ending_here = Math.max(nums[i],ending_here + nums[i])
    //     max = Math.max(max,ending_here)
    // }
    // return max
     
    // 动态规划2：94.23% 8.26%
    let cur = 0,max = nums[0]
    for(let num of nums){
        cur = cur > 0 ? cur + num : num
        max = Math.max(max,cur)
    }
    return max

    // todo 用dp维护
    
    // todo 法二：分治
};