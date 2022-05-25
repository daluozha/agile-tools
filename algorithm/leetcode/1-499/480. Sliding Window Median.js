/**
 * tag:滑动窗口
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var medianSlidingWindow = function(nums, k) {
    let right=k-1,
        arr=nums.slice(0,k),
        i=Math.floor(right/2),
        j=Math.ceil(right/2),
        result=[]
    while(right<nums.length){
        arr.sort((a,b)=>a-b)
        result.push((arr[i]+arr[j])/2)
        right++
        for(let u=0;u<k;u++){
            if(arr[u]===nums[right-k]){
                // 把要移出窗口的值替换成要加入的值，直接slice(right+1-k,right+1)会超出时间限制
                arr[u]=nums[right]
                break
            }
        }
    }
    return result
};