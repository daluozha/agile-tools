/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function(nums) {
    // 排序之后只存在两个负数的时候三数乘积会比res大
    nums.sort((a,b)=>(a-b))
    let n=nums.length-1,res=nums[n]*nums[n-1]*nums[n-2]
    if (nums[1]<0 && nums[0]*nums[1]*nums[n]>res) return nums[0]*nums[1]*nums[n]
    return res
};