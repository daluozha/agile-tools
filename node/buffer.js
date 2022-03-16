// const buf = Buffer.from('runoob', 'ascii')

// console.log(buf.toString('hex'))
// console.log(buf.toString('base64'))

// const buf1 = Buffer.alloc(256)
// var len = buf1.write('www.runoob.com')

// console.log(len)

const buf2 = Buffer.alloc(26)
for(var i = 0; i < 26; i++){
    buf2[i] = i + 97;
}

console.log(buf2.toString('ascii'))
console.log(buf2.toString('ascii', 0, 5))
console.log(buf2.toString('utf8', 0, 5))
console.log(buf2.toString(undefined, 0, 5))