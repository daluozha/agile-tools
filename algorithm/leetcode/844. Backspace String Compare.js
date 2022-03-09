/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
var backspaceCompare = function(S, T) {
    return backspace(S)==backspace(T)
};

var backspace=function(t){
    let result=[],arr = t.split('')
    arr.forEach(item=>
        item=="#"&&result? result.pop():result.push(item)
    )
    return result.join('')
}