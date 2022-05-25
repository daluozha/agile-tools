/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var fairCandySwap = function(A, B) {
    let sumA=0,sumB=0,result=null
    A.forEach(item=>sumA+=item)
    B.forEach(item=>sumB+=item)
    // 法一
    // A.forEach(a=>{
    //     B.forEach(b=>{
    //         if((sumA+2*b)===(sumB+2*a)) result = [a,b]
    //     })
    // })
    // 法二
    let map = {},c=(sumA-sumB)/2
    A.forEach(a=>map[a]=true)
    B.some(b=>{
        if(map[b+c]){
            result=[b+c,b]
            return true
        }else return false
    })
    return result


};