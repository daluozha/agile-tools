/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    let length=flowerbed.length,i=0
    while(i<length && n>0){
        if(!flowerbed[i] && (i+1>=length || !flowerbed[i+1])) (n-- , i+=2)
        else if(flowerbed[i]) i+=2
        else i++
    }
    return n == 0
};