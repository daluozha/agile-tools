/**
 * @param {string} S
 * @return {string}
 */
var removeDuplicates = function(S) {
    // 法一：递归
    // let pointer=0,len=S.length
    // while(pointer<len-1){
    //     if(S[pointer]===S[pointer+1]){
    //         let arr=S.split('')
    //         arr.splice(pointer,2)
    //         return removeDuplicates(arr.join(''))
    //     } 
    //     else pointer++
    // }
    // return S

    // 法二：利用栈
    let stack=[]
    for(let cur of S){
        let pop = stack.pop()
        if(pop !== cur) stack.push(pop) && stack.push(cur)
    }
    return stack.join('')
};