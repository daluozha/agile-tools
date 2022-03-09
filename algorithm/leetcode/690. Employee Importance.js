/**
 * Definition for Employee.
 * function Employee(id, importance, subordinates) {
 *     this.id = id;
 *     this.importance = importance;
 *     this.subordinates = subordinates;
 * }
 */

/**
 * @param {Employee[]} employees
 * @param {number} id
 * @return {number}
 */
var GetImportance = function(employees, id) {
    let res = 0, map = new Map()
    for(let item of employees)
        map.set(item.id, item);
    
    // 法一：dfs
    // function dfs(key){
    //     const ele = map.get(key)
    //     const subs = ele.subordinates
    //     res += ele.importance
    //     for(let sub of subs)
    //         dfs(sub);
    // }
    // dfs(id)
    // return res

    // 法二：bfs
    let arr = [id]
    while(arr.length){
        const key = arr.shift()
        const ele = map.get(key)
        res += ele.importance
        arr.push(...ele.subordinates)
    }
    return res

};