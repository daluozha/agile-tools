var fs = require('fs')
var data = 'daluozha'

var writerStream = fs.createWriteStream('output.txt')

writerStream.write(data, 'UTF8')

writerStream.end();

writerStream.on('finish', function(){
    console.log('finish')
})

writerStream.on('error', function(err){
    console.log(err.stack)
})

console.log('over')