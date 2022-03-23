const pug = require('pug')

const compiledFunction = pug.compileFile('template.pug')

console.log(compiledFunction({
    name: 'tim'
}))