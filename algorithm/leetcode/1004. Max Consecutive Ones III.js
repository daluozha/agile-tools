/**
 * tag:滑动窗口
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var longestOnes = function(A, K) {
    let left=0,right=0,max=0,count=0,len=A.length
    while(right<len){
        if(!A[right]) count++
        right++
        while(count>K){
            if(!A[left]) count--
            left++
        } 
        max=Math.max(max,right-left)
    }
    return max
};