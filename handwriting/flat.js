function flatten1(arr) {
    while(arr.some(ele => Array.isArray(ele))){
        arr = [].concat(...arr)
    }
    return arr
}

function flatten2(arr) {
    let res = []
    for(let i = 0, len = arr.length; i < len; i++){
        if(Array.isArray(arr[i])){
            res = res.concat(flatten2(arr[i]))
        }else
            res.push(arr[i])
    }
    return res
}
console.log(flatten1([1, [2, [3]]]))
console.log(flatten2([1, [2, [3]]]))