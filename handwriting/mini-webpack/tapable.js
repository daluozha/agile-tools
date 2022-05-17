import { SyncHook, AsyncParallelHook } from "tapable";
// https://www.bilibili.com/video/BV1jP4y1c7xv?t=370.7
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
  setSpeed(newSpeed){
    this.hooks.accelerate.call(newSpeed)
  }
}

// 1.注册 2.触发

const car = new Car()
car.hooks.accelerate.tap("test 1", (speed)=>{
    console.log('acc', speed)
})
 
car.setSpeed(10)
