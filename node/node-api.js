#!/usr/bin/env node

// 设置 shebang 后可以直接运行 ./node/node-api.js

// 在node.js中没有bom和dom, 但是有global
// console.log(document)
// console.log(window)

// console.log(process.env.NODE_ENV);

// NODE_ENV=production ./node-api.js
console.log(process.env)

// process.exit();

// 第一个参数是 node 命令的完整路径。第二个参数是正被执行的文件的完整路径。所有其他的参数从第三个位置开始。
// console.log(process.argv)

// console.log(global);

