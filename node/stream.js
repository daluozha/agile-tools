var fs = require('fs')
var data = ''

var readerStream = fs.createReadStream('input.txt')

readerStream.setEncoding('UTF8')

readerStream.on('data', function(chunk){
    console.log(1)
    data += chunk
})

readerStream.on('end', function(){
    console.log(2)
    console.log(data)
})

readerStream.on('error', function(err){
    console.log(err.stack)
})

console.log('over')