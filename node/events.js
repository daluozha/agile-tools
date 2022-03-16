// var events = require('events')
// var event = new events.EventEmitter()

var EventEmitter = require('events').EventEmitter
var event = new EventEmitter()

event.on('some', function(a, b){
    console.log('chufa1', a, b)
})

event.on('some', function(a, b){
    console.log('chufa2', a, b)
})

// setTimeout(() => {
//     event.emit('some',1 ,2)
// }, 1000);

event.emit('error')

console.log('11')