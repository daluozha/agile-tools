/**
 * @param {number} x
 * @return {boolean}
 */
 var isPalindrome = function(x) {
    // 法一

    // if(x < 0) return false
    // if(x < 10) return true
    // let n = 10 ** Math.floor(Math.log10(x))
    // while(n > 1 && x > 0){
    //     if(Math.floor(x / n) !== x % 10) return false
    //     x = Math.floor((x % n) / 10)
    //     n /= 100
    // }
    // return true

    // 法二
    return Number(`${Math.abs(x)}`.split('').reverse().join('')) === x
};