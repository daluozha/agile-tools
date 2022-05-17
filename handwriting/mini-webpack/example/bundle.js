// 预想的中打包好的 js 文件
(function (modules) {
  function require1(filePath) {
    const fn = modules[filePath];
    const module1 = {
      exports1: {},
    };
    fn(require1, module1, module1.exports1);

    return module1.exports1;
  }
})({
  "./foo.js": function (require1, module1, module1.exports1) {
    console.log(11)
  },
});
