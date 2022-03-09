/**
 * @param {number[]} answers
 * @return {number}
 */
var numRabbits = function(answers) {
    // 法一
    // let map = new Map, sum = 0
    // for(let answer of answers)
    //     map.set(answer, (map.get(answer) || 0) + 1)
    // map.forEach((v, k) => {
    //     sum += Math.ceil(v / (k + 1)) * (k + 1)
    // })
    // return sum 

    // 法二
    let map = {}, sum = 0
    for(let answer of answers)
        map[answer] = (map[answer] || 0) + 1
    for(let i in map)
        sum += Math.ceil(+map[i] / (+i + 1)) * (+i + 1)
    return sum 
}; 