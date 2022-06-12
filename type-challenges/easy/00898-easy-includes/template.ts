// 这个错在哪里？
// type Includes<T extends readonly any[], U> = U extends T[number] ? true : false

// ts 模块规范
// 如果有 export / import 的话，这个文件要视作模块
// 没有的话可以视作全局，能在别的文件/模块直接引用

// import type { Equal } from '@type-challenges/utils'

type Equal<X, Y> =
    (<T>() => T extends X ? 1 : 2) extends
    (<T>() => T extends Y ? 1 : 2) ? true : false

export type Includes<T extends readonly any[], U> = T extends [infer First, ...infer Rest] ? Equal<First, U> extends true ? true : Includes<Rest, U> : false


// js

// 1. 
// function Includes(list, key) {
//     for (let i = 0; i < list.length; i++) {
//         const el = list[i]
//         if (el === key) return true
//     }
//     return false
// }

// 2.
// function Includes(list, key) {
//     function fn(list, key) {
//         if (!list.length) return false
//         const [first, ...rest] = list
//         if (first == key) return true
//         else return fn(rest, key)
//     }
//     return fn(list, key)
// }