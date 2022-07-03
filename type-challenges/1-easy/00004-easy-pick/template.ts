// mapped
// union 联合类型
// extends
// keyof lookup
// indexed


type MyPick<T, K extends keyof T> = {
    [P in K]: T[P]
}
