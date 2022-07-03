// typeof
// as const
// 遍历数组

type TupleToObject<T extends readonly (string | number | symbol)[]> = {
    [P in T[number]]: P
}
