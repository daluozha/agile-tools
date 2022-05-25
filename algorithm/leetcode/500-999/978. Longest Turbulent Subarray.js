/**
 * tag:滑动窗口
 * @param {number[]} arr
 * @return {number}
 */
var maxTurbulenceSize = function(arr) {
    //todo dp解法
    let pre='=',left=0,right=1,max=1
    while(right<arr.length){
        let cur=arr[right-1]===arr[right]?'=':arr[right-1]>arr[right]?'>':'<'
        if(cur===pre) left=right-1
        if(cur==='=') left=right
        right++
        max=Math.max(max,right-left)
        pre=cur
    }
    return max
};