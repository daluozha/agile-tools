/**
 * @param {number[]} nums
 */

// todo 使用构造函数

var arr = []

var NumArray = function(nums) {
    arr[0] = nums[0]
    for(let i = 1;i < nums.length;i++){
        arr[i] = arr[i-1] + nums[i]
    }
};
/** 
 * @param {number} i 
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function(i, j) {
    return i === 0 ? arr[j] : arr[j] - arr[i-1]
};

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(i,j)
 */