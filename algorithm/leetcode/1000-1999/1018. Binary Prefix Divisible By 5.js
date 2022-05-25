/**
 * @param {number[]} A
 * @return {boolean[]}
 */
var prefixesDivBy5 = function(A) {
    let temp=0//temp为十进制数
    return A.map(item=>{
        let result=(item+temp<<1)%10
        temp=result
        return result%5===0
    })
};