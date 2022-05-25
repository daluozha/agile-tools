/**
 * tag:滑动窗口
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function(s, k) {
    //固定长度的滑动窗口不需要left
    let right=0,sum=0,max=0
    while(right<s.length){
        sum+=isYuan(s[right])
        right++
        if(right>=k){
            //记录一下最大值然后退出左边的
            max=Math.max(max,sum)
            sum-=isYuan(s[right-k])
        }
    }
    return max
};

var isYuan =function(t){
    return ['a','e','i','o','u'].indexOf(t)!==-1?1:0
}