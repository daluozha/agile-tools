// index.js : 用作打包 example 的文件，相当于这是 mini-webpack 的入口文件

import fs from "fs";
import parser from "@babel/parser";
import traverse from "@babel/traverse";
import path from "path";
import ejs from "ejs";
import { transformFromAst } from "babel-core";

function createAsset(filePath) {
  // 1. 获取文件的内容
  // 2. 获取依赖关系
  //    ast：抽象语法树
  const source = fs.readFileSync(filePath, {
    encoding: "utf-8",
  });

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
  const { code } = transformFromAst(ast, null, {
    presets: ["env"],
  });

  return {
    filePath,
    deps,
    code,
  };
}
// const asset = createAsset();

function createGraph() {
  const mainAsset = createAsset("./example/main.js");
  let result = [];
  const queue = [mainAsset];
  while (queue.length) {
    let curSize = queue.length;
    while (curSize) {
      let cur = queue.shift();
      result.push(cur);
      cur.deps.forEach((item) => {
        const asset = createAsset(path.resolve("./example", item));
        queue.push(asset);
      });
      curSize--;
    }
  }
  return result;
}

const graph = createGraph();

function build(graph) {
  const template = fs.readFileSync("./bundle.ejs", {
    encoding: "utf-8",
  });
  const data = graph.map((asset) => {
    return {
      filePath: asset.filePath,
      code: asset.code,
    };
  });
  const code = ejs.render(template, { data });

  console.log(data);
  fs.writeFileSync("./dist/bundle.js", code);
}
build(graph);
