/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var search = function(nums, target) {
    let left = 0,right = nums.length - 1,mid = -1
    while(left <= right){
        // 假如right和left都很大，那么right + left会溢出，而(right - left)/2 + left 先做减法不会溢出。 所以好处是让mid变量避免溢出
        mid = Math.floor((right - left) / 2 + left)
        if(nums[mid] === target) {
            return mid
        }else if(nums[mid] > target){
            right = mid - 1
        }else {
            left = mid + 1
        }
    }
    return -1
};