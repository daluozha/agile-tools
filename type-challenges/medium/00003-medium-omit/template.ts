// keyof T 会变成联合类型

type MyOmit<T, K extends keyof T> = MyPick<T, MyExclude<keyof T, K>>;
