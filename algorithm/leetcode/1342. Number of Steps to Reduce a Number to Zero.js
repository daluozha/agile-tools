/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps  = function(num) {
    // 法一 迭代遍历
    // let sum = 0
    // while(num){
    //     if(num % 2 === 0) num /= 2
    //     else num--
    //     sum++
    // }
    // return sum

    // 法二 递归
    // num & 1 可用于取余
    return num ?  num & 1 ? 1 + numberOfSteps(--num) : 1 + numberOfSteps(num >> 1) : 0
};