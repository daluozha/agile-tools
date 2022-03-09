/**
 * @param {number} Y
 * @param {number} M
 * @return {number}
 */
var numberOfDays = function(Y, M) {
    let daysArr = [31,28,31,30,31,30,31,31,30,31,30,31]
    // 四年一闰，百年不闰，四百年再闰
    if((Y % 100) && !(Y % 4) || !(Y % 400) ) daysArr[1] = 29
    return daysArr[M - 1]
};