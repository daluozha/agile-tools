
// 有了这个配置文件，我们只需在终端中运行 npx webpack 命令就可进行打包，这条命令会自动引用 webpack.config.js 文件中的配置选项。

const path = require("path");
console.log(path.join(__dirname, "/webpack-src/index.js"));
module.exports = {
  mode: "development",
  entry: path.join(__dirname, "/webpack-src/index.js"),
  output: {
    path: path.join(__dirname, "webpack-dist"),
    filename: "bundle.js",
  },
  devServer: {
    // contentBase: './webpack-dist',
    static: './webpack-dist',
    port: '8088',
    // inline: true,
    historyApiFallback: true
  }
};
