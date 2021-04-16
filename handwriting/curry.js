/**
 * @param { (...args: any[]) => any } fn
 * @returns { (...args: any[]) => any }
 */

// 理解柯里化 ：用闭包把参数保存起来，当参数的数量足够执行函数了，就开始执行函数
// function curry(func) {
//   return function curried(...args) {
//     if (args.length >= func.length) {
//       return func.apply(this, args);
//     } else {
//       return function (...args2) {
//         return curried.apply(this, args.concat(args2));
//       };
//     }
//   };
// }

var curry = (fn) => curried = (...args) => fn.length === args.length ? fn(...args) : (...args2) => curried(...args,...args2)

const join = (a, b, c) => {
  console.log(`${a}_${b}_${c}`);
};

// const curriedJoin = curry(join);

curry(join)(1, 2, 3); // '1_2_3'

curry(join)(1)(2, 3); // '1_2_3'

curry(join)(1, 2)(3); // '1_2_3'
