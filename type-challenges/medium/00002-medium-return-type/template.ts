type MyReturnType<T extends (...arg: any) => any> = T extends (
    ...arg: any
) => infer P
    ? P
    : never;
let a: ReturnType<() => string>;
