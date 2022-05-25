/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let left = 0,right = height.length - 1,max = 0
    while(left < right){
        max = Math.max(max,Math.min(height[left],height[right]) * (right - left))
        height[left] < height[right]? left++ : right--
    }
    return max
};