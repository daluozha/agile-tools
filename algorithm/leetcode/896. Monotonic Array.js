/**
 * @param {number[]} A
 * @return {boolean}
 */
var isMonotonic = function(A) {
    // 法一
    // if(A.length === 2) return true
    // let left = 0,right = 1,
    //     len = A.length
    // while(A[left] === A[right]){
    //     left++ 
    //     right++
    // } 
    // if(A[left] < A[right++]){
    //     while(right < len)
    //         if(A[right - 1] > A[right++]) return false
    // }else{
    //     while(right < len)
    //         if(A[right - 1] < A[right++]) return false
    // }
    // return true

    // 法二
    // slice(0)相当于复制了一次A，避免sort直接影响原数组
    return A.join('') === A.slice(0).sort((a, b) => a - b).join('') || A.join('') === A.sort((a, b) => b - a).join('');

};