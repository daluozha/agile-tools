var fs = require('fs')

// 阻塞代码
// var data = fs.readFileSync('input.txt')
// console.log(data.toString()) // data 目前是 buffer 对象

// 非阻塞代码
fs.readFile('input.txt', function(err, data){
    if(err) return console.error(err)
    console.log(data.toString())
})

