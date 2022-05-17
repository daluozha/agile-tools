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

var _user = require("./user.json");

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _foo.foo)();
(0, _bar.bar)();
console.log(_user2.default);
console.log("main.js"); 
        },{"./foo.js":1,"./bar.js":2,"./user.json":3} ],        
     
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
        },{"./foo.js":4} ],        
     
        3 : [function (require, module, exports) {
            "use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = "{\n    \"name\": \"hyc\",\n    \"age\": 18\n}"; 
        },{} ],        
     
        4 : [function (require, module, exports) {
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
