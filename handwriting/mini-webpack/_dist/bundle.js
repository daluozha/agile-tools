// 预想的中打包好的 js 文件
(function (modules) {
    function require(id) {
        const [fn, mapping] = modules[id];
        const module = {
          exports: {},
        };
        function localRequire(filePath){
            const id = mapping[filePath]
            return require(id)
        }
        fn(localRequire, module, module.exports);
    
        return module.exports;
    }
    require(0)
})({
     
        0 : [function (require, module, exports) {
            "use strict";

var _foo = require("./foo.js");

var _bar = require("./bar.js");

(0, _foo.foo)();
(0, _bar.bar)();
console.log("main.js"); 
        },{"./foo.js":1,"./bar.js":2} ],        
     
        1 : [function (require, module, exports) {
            "use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.foo = foo;

function foo() {
  console.log("foo.js");
} 
        },{} ],        
     
        2 : [function (require, module, exports) {
            "use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bar = bar;

var _foo = require("./foo.js");

(0, _foo.foo)();

function bar() {
  console.log("bar.js");
} 
        },{"./foo.js":3} ],        
     
        3 : [function (require, module, exports) {
            "use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.foo = foo;

function foo() {
  console.log("foo.js");
} 
        },{} ],        
     

});
