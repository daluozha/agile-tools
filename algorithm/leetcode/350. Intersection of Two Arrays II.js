/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    let res = [],
        p1=0,p2=0
    nums1.sort((a,b)=>a-b)
    nums2.sort((a,b)=>a-b)
    while(p1<nums1.length && p2<nums2.length){
        if(nums1[p1]===nums2[p2]){
            res.push(nums1[p1])
            p1++
            p2++
        }else if(nums1[p1]>nums2[p2]) p2++
        else p1++
    }
    return res
};