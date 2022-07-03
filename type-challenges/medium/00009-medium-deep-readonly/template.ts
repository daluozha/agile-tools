// type DeepReadonly<T> = {
//     readonly [P in keyof T]: keyof T[P] extends never
//         ? T[P]
//         : DeepReadonly<T[P]>;
// };

// 2.
type DeepReadonly<T> = keyof T extends never
    ? T
    : {
          readonly [key in keyof T]: DeepReadonly<T[key]>;
      };
