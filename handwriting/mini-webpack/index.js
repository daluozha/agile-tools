// index.js : 用作打包 example 的文件，相当于这是 mini-webpack 的入口文件

import fs from "fs";
import parser from "@babel/parser";
import traverse from "@babel/traverse";
function createAsset() {
  // 1. 获取文件的内容
  // 2. 获取依赖关系
  //    ast：抽象语法树
  const source = fs.readFileSync("./example/main.js", {
    encoding: "utf-8",
  });
  //   console.log(source);

  const ast = parser.parse(source, {
    sourceType: "module",
  });
  const deps = [];
  traverse.default(ast, {
    ImportDeclaration({ node }) {
      if (node.source && node.source.value) {
        deps.push(node.source.value);
      }
    },
  });
  //   console.log(ast);
  return {
    deps,
    source,
  };
}
const asset = createAsset();
console.log(asset)
