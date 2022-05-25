/**
 * @param {number[][]} dominoes
 * @return {number}
 */
var numEquivDominoPairs = function(dominoes) {
    let arr = new Array(100).fill(0),result=0
    dominoes.forEach(item=>{
        let num=item[0]>item[1]?item[1]*10+item[0]:item[0]*10+item[1]
        result+=arr[num]++
    })
    return result
};