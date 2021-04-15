// 参考https://segmentfault.com/a/1190000021272622

// 发布订阅模式
class EventEmitter{
    constructor(){
        this.listeners = {}
    }
    on(type, cb){ // on 即为 subscribe
        this.listeners[type] ? this.listeners[type].push(cb) : this.listeners[type] = [cb]
    }
    emit(type, ...args){ // emit 即为 publish
        this.listeners[type] && this.listeners[type].forEach(cb => {
            cb(...args)
        })
    }
    off(type, cb){
        if(this.listeners[type]){
            const idx = this.listeners[type].findIndex(item => item === cb)
            if(idx > -1)
                this.listeners[type].splice(idx ,1)
            if(!this.listeners[type].length)
                delete this.listeners[type]
        }
    }
    offAll(type){
        if(this.listeners[type])
            delete this.listeners[type]
    }
}

// 观察者模式
class Observer{
    constructor(cb){
        this.cb = cb
    }
    update(){
        this.cb()
    }
}

class Dep{
    constructor(){
        this.list = []
    }
    add(observer){
        this.list.push(observer)
    }
    notify(){
        this.list.forEach(ober => {
            ober.update()
        })
    }
}

// const cb = function(){
//     console.log(12)
// }
// const ob = new Observer(cb)
// const dep = new Dep()
// dep.add(ob)
// dep.notify()