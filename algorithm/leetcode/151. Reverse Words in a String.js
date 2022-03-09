/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    //filter用来应付单词之间有多个空格的情况
    return s.split(" ").filter(v=>v).reverse().join(" ")
};