/**
 * //tag:滑动窗口
 * @param {number[]} cardPoints
 * @param {number} k
 * @return {number}
 */
var maxScore = function(cardPoints, k) {
    // 建立一个cardPoints.length-k大小的滑动窗口，里面的最小就是外面的最大
    let length=cardPoints.length,right=length-k,cur=0,sum=0,min=+Infinity 
    cardPoints.forEach(item=>sum+=item)
    for(let i=0;i<right;i++) cur+=cardPoints[i]
    min=Math.min(min,cur)
    while(right<length){
        cur=cur+cardPoints[right]-cardPoints[right-length+k]
        min=Math.min(min,cur)
        right++
    }
    return sum-min
};