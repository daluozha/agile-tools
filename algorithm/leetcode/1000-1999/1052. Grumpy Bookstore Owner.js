/**
 * tag:滑动窗口
 * @param {number[]} customers
 * @param {number[]} grumpy
 * @param {number} X
 * @return {number}
 */
var maxSatisfied = function(customers, grumpy, X) {
    // X可看作窗口的最大长度
    let left=0,right=0,
        ret=0,// 肯定感到满意的顾客营业额
        extra=0,// 窗口内最大的不满顾客营业额
        tmp=0,// 当前窗口的不满顾客营业额
        len=customers.length
    while(right<len){
        ret+=(1-grumpy[right])*customers[right]
        tmp+=grumpy[right]*customers[right++]
        extra=Math.max(extra,tmp)
        if(right-left==X) tmp-=grumpy[left]*customers[left++]
    }
    return ret+extra
};