// type TupleToUnion<T> = T extends (infer P)[] ? P : never;

// 2.
// T[number] 是什么用法？
type TupleToUnion<T extends any[]> = T[number];
