/**
 * tag:滑动窗口
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    // 法一
    // let left=0,right=0,max=0
    // while(right<nums.length){
    //     if(nums[right++]===0) left=right
    //     max=Math.max(max,right-left)
    // }
    // return max

    // 法二
    return Math.max(...nums.join('').split('0').map(el=>el.length))
};