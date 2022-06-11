// 两个 union 的 extends 行为是什么样子的


type MyExclude<T, U> = T extends U ? never : T
