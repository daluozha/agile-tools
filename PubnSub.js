// 观察者模式又叫做发布订阅者模式(Publish/Subscribe)，
// 它可以让多个观察者对象同时监听某一个主题对象，这个主题对象的状态变化时会通知所有的订阅者，使得它们能够做出反应。
// JS的事件模型就是一种观察者模式的体现，当对应的事件被触发时，监听该事件的所有监听函数都会被调用。

var events = (function () {
  var topics = {};

  return {
    publish: function (topic, info) {
      console.log("publish a topic:" + topic);
      if (topics.hasOwnProperty(topic)) {
        topics[topic].forEach(function (handler) {
          handler(info ? info : {});
        });
      }
    },
    subscribe: function (topic, handler) {
      console.log("subscribe an topic:" + topic);
      if (!topics.hasOwnProperty(topic)) {
        topics[topic] = [];
      }

      topics[topic].push(handler);
    },
    remove: function (topic, handler) {
      if (!topics.hasOwnProperty(topic)) {
        return;
      }

      var handlerIndex = -1;
      topics[topic].forEach(function (element, index) {
        if (element === handler) {
          handlerIndex = index;
        }
      });

      if (handlerIndex >= 0) {
        topics[topic].splice(handlerIndex, 1);
      }
    },
    removeAll: function (topic) {
      console.log("remove all the handler on the topic:" + topic);
      if (topics.hasOwnProperty(topic)) {
        topics[topic].length = 0;
      }
    },
  };
})();

//主题监听函数
var handler = function(info) {
    console.log(info);
}
//订阅hello主题
events.subscribe('hello', handler);

//发布hello主题
events.publish('hello', 'hello world');