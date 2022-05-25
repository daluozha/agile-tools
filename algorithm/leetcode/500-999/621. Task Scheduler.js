/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function(tasks, n) {
    let obj={},max=0,maxCount=0
    for(let item of tasks) obj[item]=(obj[item]||0)+1
    for(let item in obj){
        if(max<obj[item]){
            max=obj[item]
            maxCount=1
        }
        else if(max==obj[item]) maxCount++
    }
    return Math.max((max-1)*(n+1)+maxCount,tasks.length)
};