type MyReadonly2<T, K extends keyof T = keyof T> = {
    readonly [P in K]: T[P];
} & MyOmit<T, K>;


// 2. 这样写不行
// type MyReadonly2<T, K extends keyof T = keyof T> = T & {
//     readonly [P in K]: T[P];
// };
