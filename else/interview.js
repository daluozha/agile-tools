// 题目1：编写一个 People 类，使其的实例具有监听事件、触发事件、解除绑定功能。（实例可能监听多个不同的事件，也可以去除监听事件）
class People {
  constructor(name) {
    this.name = name;
  }

  // TODO: 请在此处完善代码
  // 发布订阅模式
  listeners = {};
  on(type, cb) {
    // on 即为 subscribe
    this.listeners[type]
      ? this.listeners[type].push(cb)
      : (this.listeners[type] = [cb]);
  }
  emit(type, ...args) {
    // emit 即为 publish
    this.listeners[type] &&
      this.listeners[type].forEach((cb) => {
        cb(...args);
      });
  }
  off(type, cb) {
    if (this.listeners[type]) {
      const idx = this.listeners[type].findIndex((item) => item === cb);
      if (idx > -1) this.listeners[type].splice(idx, 1);
      if (!this.listeners[type].length) delete this.listeners[type];
    }
  }
  sayHi() {
    console.log(`Hi, I am ${this.name}`);
  }
}

/* 以下为测试代码 */
const say1 = (greeting) => {
  console.log(`${greeting}, nice meeting you.`);
};

const say2 = (greeting) => {
  console.log(`${greeting}, nice meeting you, too.`);
};

const jerry = new People("Jerry");
jerry.sayHi();
// => 输出：'Hi, I am Jerry'
console.log("----------");
jerry.on("greeting", say1);
jerry.on("greeting", say2);

jerry.emit("greeting", "Hi");
// => 输出：'Hi, nice meeting you.' 和 'Hi, nice meeting you, too'
console.log("----------");

jerry.off("greeting", say1);
jerry.emit("greeting", "Hi");
// => 只输出：'Hi, nice meeting you, too'

// 题目2：完成 sleep 函数，可以达到下面的效果：
const sleep = (duration) => {
  return new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
};

const anyFunc = async () => {
  console.log("123"); // 输出 123
  await sleep(300); // 暂停 300 毫秒
  console.log("456"); // 输出 456，但是距离上面输出的 123 时间上相隔了 300 毫秒
};
anyFunc();

// 题目3：完成 deepGet 函数，给它传入一个对象和字符串，字符串表示对象深层属性的获取路径，可以深层次获取对象内容：
const deepGet = (obj, prop) => {
  // TODO: 在此处完善代码
  const keys = prop.split("."); // ['school', 'student', 'name]
  let result = obj;
  keys.every((key) => {
    if (result) {
      let i = key.indexOf("[");
      if (i === -1) {
        result = result[key] ? result[key] : undefined;
      } else {
        let name = key.slice(0, i);
        let index = key.slice(i + 1, -1);
        result = result[name] ? result[name][index] : undefined;
      }
      return true;
    } else {
      return false;
    }
  });
  console.log(result);
  return result;
};

/** 以下为测试代码 */
deepGet(
  {
    school: {
      student: { name: "Tomy" },
    },
  },
  "school.student.name"
); // => 'Tomy'

deepGet(
  {
    school: {
      students: [{ name: "Tomy" }, { name: "Lucy" }],
    },
  },
  "school.students[1].name"
); // => 'Lucy'

// 对于不存在的属性，返回 undefined
deepGet({ user: { name: "Tomy" } }, "user.age"); // => undefined
deepGet({ user: { name: "Tomy" } }, "school.user.age"); // => undefined

// 题目4：完成 combo 函数。它接受任意多个单参函数（只接受一个参数的函数）作为参数，并且返回一个函数。它的作为用：使得类似 f(g(h(a))) 这样的函数调用可以简写为 combo(f, g, h)(a)。
const combo = (...fns) => {
  // TODO: 请在此处完善代码
  fns.reverse()
  return (x) => {
    fns.forEach(fn => {
      x = fn(x)
    })
    console.log(x)
  }
};

/* 以下为测试代码 */
const addOne = (a) => a + 1;
const multiTwo = (a) => a * 2;
const divThree = (a) => a / 3;
const toString = (a) => a + "";
const split = (a) => a.split("");

split(toString(addOne(multiTwo(divThree(666)))));
// combo(split, toString, addOne, multiTwo, divThree)(666)
// 执行顺序从后往前
// => ["4", "4", "5"]

const testForCombo = combo(split, toString, addOne, multiTwo, divThree);
testForCombo(666);
// => ["4", "4", "5"]


// 题目5：有两个盘子分别放有 5 个和 7 个小球，两个朋友玩游戏：每个人轮流从两个盘子中拿小球，每人每次只能从其中一个盘子中拿，每次可以拿 1 个或者多个（不能一个都不拿），拿到最后一个小球的人算输。问开局先手和后手是否有必胜策略？如果有，请描述必胜策略。

// 答：
// 设两堆小球数量为(x1, x2), 两个朋友为 A，B，不妨设 A 先手，B 后手
// 1. 当数量为(1, 0) (0, 1)，B 必赢
// 2. 数量为(n, 0) (0, n) 其中 n > 0，A 必赢，策略为 A 把小球拿的只剩一个
// 3. 数量为(n, 1) (1, n) 其中 n > 0，A 必赢，策略为 A 拿光 n 个小球的盘子，留下一个
// 4. 当两堆小球数量相同且均大于 1 时，即 (k, k) 其中 k 范围 [2, n] B 必赢，用数学归纳法证明（证明当 n = 2 时命题成立。假设 n = m 时命题成立，那么可以推导出在 n = m + 1 时命题也成立。（m 代表任意自然数））
//   4.1 数量为(2, 2)， A 如果拿光其中一堆，后手可以在另一堆只拿一个，留给 A 最后一个球；A 如果拿其中一堆的一个，B 就可以拿光另外一堆，A 还是要拿最后一个。证毕 (2, 2) B 必赢
//   4.2 假设数量为(m, m), m 范围 [2, n]，B 必赢
//   4.3 当数量为(m + 1, m + 1), A 先手必须拿，如果剩下 x 个，B 就可以把另一堆也拿剩下 x 个，形成(x, x)留给 A，B必赢；如果A 先手拿的剩下 0 或 1 个，形成(0, m + 1) 或者 (1, m + 1)留给 B，此时 B 变成先手，根据 2，3 判断先手必赢，则 B 必赢
// 5. 当两堆小球数量不等且均不小于2时， A 必赢，策略为 A 把多的一堆拿完跟少的一堆数量相等，形成(x, x) 场景给 B，此时 B 先手必输，因此 A 必赢
// 6. 综上，如果有两个盘子分别放有 5 个和 7 个小球，先手必赢，后手必输。