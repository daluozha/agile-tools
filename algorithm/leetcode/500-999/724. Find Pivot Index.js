/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
    // 1.
    // let sum = 0,
    //     leftSum = 0;
    // nums.forEach((item) => {
    //     sum += item;
    // });
    // for (let i = 0; i < nums.length; i++) {
    //     if (sum - nums[i] - leftSum === leftSum) return i;
    //     else leftSum += nums[i];
    // }
    // return -1;

    // 2.
    const total = nums.reduce((pre, cur) => pre + cur, 0);
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        if (2 * sum + nums[i] === total) return i;
        sum += nums[i];
    }
    return -1;
};
