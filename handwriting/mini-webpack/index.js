// index.js : 用作打包 example 的文件，相当于这是 mini-webpack 的入口文件

import fs from "fs";
import parser from "@babel/parser";
import traverse from "@babel/traverse";
import path from "path";
import ejs from "ejs";
import { transformFromAst } from "babel-core";
import { jsonLoader } from "./jsonLoader.js";

const webpackConfig = {
  module: {
    rules: [
      {
        test: /\.json$/,
        use: [jsonLoader],
      },
    ],
  },
};

let id = 0;
function createAsset(filePath) {
  // 1. 获取文件的内容
  // 2. 获取依赖关系
  //    ast：抽象语法树
  let source = fs.readFileSync(filePath, {
    encoding: "utf-8",
  });

  // json 转换
  const loaders = webpackConfig.module.rules;
  const loaderContext = {
    addDeps(dep) {
      console.log("addDeps", dep);
    },
  };
  loaders.forEach(({ test, use }) => {
    if (test.test(filePath)) {
      if (Array.isArray(use)) {
        use.reverse().forEach((fn) => {
          source = fn.call(loaderContext, source);
        });
      }
    }
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
    mapping: {},
    id: id++,
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
      cur.deps.forEach((relativePath) => {
        const child = createAsset(path.resolve("./example", relativePath));
        cur.mapping[relativePath] = child.id;
        queue.push(child);
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
    const { id, code, mapping } = asset;
    return {
      id,
      code,
      mapping,
    };
  });
  const code = ejs.render(template, { data });

  fs.writeFileSync("./_dist/bundle.js", code);
}
build(graph);
