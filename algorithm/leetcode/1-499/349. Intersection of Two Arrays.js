/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    return nums1.filter((item,index)=>nums2.indexOf(item)>-1&&nums1.indexOf(item)===index)
};