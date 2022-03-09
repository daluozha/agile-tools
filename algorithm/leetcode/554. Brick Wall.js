/**
 * @param {number[][]} wall
 * @return {number}
 */
var leastBricks = function(wall) {
    let res = {}
    let max = 0
    const wallHeight = wall.length
    for(let i = 0; i < wallHeight; i++){
        let data = 0
        for(let j = 0, l = wall[i].length - 1; j < l; j++){
            data += wall[i][j]
            res[data] ? res[data]++ : res[data] = 1
            max = Math.max(max, res[data])
        }
    }
    return wallHeight - max
};