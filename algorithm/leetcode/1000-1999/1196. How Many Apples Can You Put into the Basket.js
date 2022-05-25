/**
 * @param {number[]} arr
 * @return {number}
 */
var maxNumberOfApples = function(arr) {
    // 贪心
    if(!arr.length) return 0
    arr = arr.sort((a, b) => a - b)
    let weight = 0, sum = 0
    for(let i = 0, len = arr.length; i < len; i++){
        if((5000 - weight) >= arr[i]){
            weight += arr[i]
            sum++
        }
    }
    return sum
};