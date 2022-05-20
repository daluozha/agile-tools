// import { hi } from "./hi";
// function sum(a: number, b: number): number {
//     return a + b;
// }
// hi()

// const obj = { name: 'hyc', age: 33 }
// console.log(obj)
// obj.age = 18
// console.log(obj)
// // console.log(Promise)
// console.log(sum(1, 2))

class Animal{
    name2: string
    age2: number
    constructor(age2:number,name2: string){
        this.name2 = name2
        this.age2 = age2
    }
    sayHello(){
        console.log('ddd')
    }
}
class Person extends Animal {
    // name: string = 'hyc'
    // age1: number
    // name1: string
    // constructor(age1: number, name1: string){
    //     this.age1 = age1
    //     this.name1 = name1
    // }
    // static readonly age: number = 18
    // static say(): void {
    //     console.log(this.name)
    // }
    constructor(age2:number,name2: string){
        super(age2,name2)
    }
    sayHello(){
        // console.log('dd')
        super.sayHello()
    }
}

class Monkey extends Animal{

}
const person = new Person(18, 'hh')
const monkey = new Monkey(4,'daf')
// Person.say()
// // Person.age = 20
// console.log(Person.age)
// console.log(person.name)