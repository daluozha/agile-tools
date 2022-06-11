// infer

// 1.
type MyAwaited<T extends Promise<any>> = T extends Promise<infer P> ? P extends Promise<any> ? MyAwaited<P> : P : never


// 2.
// type MyReAwaited<T> = T extends Promise<infer P> ? MyReAwaited<P> : T

// type MyAwaited<T extends Promise<unknown>> = MyReAwaited<T>