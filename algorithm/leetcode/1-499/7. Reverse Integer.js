/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    // 法一
    // let y = parseInt(x.toString().split("").reverse().join(""));
    // if (x < 0)
    //     y = - y;
    // return y > 2147483647 || y < -2147483648 ? 0 : y;

    // 法二
    let rev = 0
    while(x){
        const digit = x % 10
        x = parseInt(x / 10)
        // x = ~~(x / 10) 
        rev = rev * 10 + digit
        if(rev < Math.pow(-2, 31) || rev > Math.pow(2, 31) - 1)
            return 0;
    }
    return rev
};