/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if((s.length & 1) === 1) return false
    let stack = [],map = {'}':'{',']':'[',')':'('}
    for(let item of s){
        // if(['(','{','['].indexOf(item) !== -1) stack.push(item)
        if(!map[item]) stack.push(item)
        else if(map[item] !== stack.pop()) return false
    }
    return !stack.length
};