/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicateLetters = function(s) {
    let counter={}
    for(let item of s) counter[item]=(counter[item]||0)+1
    let stack=[]
    for(let item of s){
        if(stack.indexOf(item)==-1){
            while(stack.length!==0&&stack[stack.length-1]>item&&counter[stack[stack.length-1]]>0) stack.pop()
            stack.push(item)
        }
        counter[item]--
    }
    return stack.join('')
};