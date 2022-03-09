/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
    stones=stones.sort((a,b)=>a-b)
    while(stones.length>1){
        let s1=stones.pop(),s2=stones.pop()
        if(s1!=s2) {
            stones.push(s1-s2)
            stones=stones.sort((a,b)=>a-b)
        }
    }
    return stones[0] || 0
};