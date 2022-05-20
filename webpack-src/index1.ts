// // import { hi } from "./hi";
// // function sum(a: number, b: number): number {
// //     return a + b;
// // }
// // hi()

// // const obj = { name: 'hyc', age: 33 }
// // console.log(obj)
// // obj.age = 18
// // console.log(obj)
// // // console.log(Promise)
// // console.log(sum(1, 2))

// abstract class Animal{
//     name2: string
//     age2: number
//     constructor(age2:number,name2: string){
//         this.name2 = name2
//         this.age2 = age2
//     }
//     sayHello(){
//         console.log('ddd')
//     }
//     abstract say(): void
// }
// class Person extends Animal {
//     // name: string = 'hyc'
//     // age1: number
//     // name1: string
//     // constructor(age1: number, name1: string){
//     //     this.age1 = age1
//     //     this.name1 = name1
//     // }
//     // static readonly age: number = 18
//     // static say(): void {
//     //     console.log(this.name)
//     // }
//     constructor(age2:number,name2: string){
//         super(age2,name2)
//     }
//     sayHello(){
//         // console.log('dd')
//         super.sayHello()
//     }
//     say(){
//         console.log('ddddd')
//     }
// }

// class Monkey extends Animal{
//     say(){
//         console.log('ddddd')
//     }
// }
// const person = new Person(18, 'hh')
// const monkey = new Monkey(4,'daf')
// // Person.say()
// // // Person.age = 20
// // console.log(Person.age)
// // console.log(person.name)

// type myType = {
//     name: string
//     age: number
// }

// interface myIF {
//     name: string
//     age: number
// }

// const obj: myType = {
//     name: 'sss',
//     age: 111
// }
// class MyClass implements myIF {
//     name = 'dd';
//     private name1 = 'ddd';
//     age = 18
// }

// const myclass = new MyClass()
// console.log(myclass.age)

// class Person {
//     // private _name: string 
//     constructor(public name: string, public age: number) {

//         // this._name = 'hyc'
//     }
//     // get name() {
//     //     return this._name
//     // }
//     // set name(value: string) {
//     //     this._name = value
//     // }
// }

// let person = new Person('ccc', 18)
// console.log(person.name)

// function fn<T>(a: T): T {
//     return a;
// }

// fn(10) // 不指定范型，类型自动推断为 number
// fn<string>('hello') // 手动指定范型

// interface Inter {
//     length: number
// }

// function fn2<T extends Inter>(a: T): number {
//     return a.length
// }

// fn2('hello')
// fn2({ length: 10 })

class Person<T>{
    name: T
    constructor(name: T) {
        this.name = name
    }
}

const person = new Person<string>('luozha')