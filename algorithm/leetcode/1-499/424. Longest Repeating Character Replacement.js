/**
 * tag:滑动窗口
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    let left=0,right=0,max=0
        arr=new Array(26).fill(0),
        A_CODE='A'.charCodeAt()
    while(right<s.length){
        let index = s[right].charCodeAt()-A_CODE
        arr[index]++
        max=Math.max(max,arr[index])
        right++
        if(right-left>max+k){
            arr[s[left].charCodeAt()-A_CODE]--
            left++
        }
    }
    return right-left 
};