import { SyncHook, AsyncParallelHook } from "tapable";

class List {
  getRoutes() {}
}
class Car {
  constructor() {
    this.hooks = {
      accelerate: new SyncHook(["newSpeed"]),
      brake: new SyncHook(),
      calculateRoutes: new AsyncParallelHook([
        "source",
        "target",
        "routesList",
      ]),
    };
  }
  setSpeed(newSpeed) {
    this.hooks.accelerate.call(newSpeed);
  }
  useNavigationSystemPromise(source, target) {
    const routesList = new List();
    return this.hooks.calculateRoutes
      .promise(source, target, routesList)
      .then((res) => {
        return routesList.getRoutes();
      });
  }
}

// 1.注册 2.触发

const car = new Car();
car.hooks.accelerate.tap("test 1", (speed) => {
  console.log("acc", speed);
});

car.setSpeed(10);

car.hooks.calculateRoutes.tapPromise("test 2", (source, target, routesList) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("aR", source, target);
      resolve();
    }, 1000);
  });
});

car.useNavigationSystemPromise(["1", "2"], 1);
