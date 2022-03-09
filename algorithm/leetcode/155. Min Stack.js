/**
 * initialize your data structure here.
 */

// 法一：使用辅助栈
// 法二：stack内差值diff
// 法三：法一优化，在一个栈内存放一个数组，包含val，min，按照个人兴趣也可用二维数组

var MinStack = function() {
    // 法一
    // this.stack = []
    // this.supStack = [Infinity]

    // 法二
    // this.stack = []
    // this.min = NaN
    
    // 法三
    this.stack = []
}; 

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    // 法一
    // this.stack.push(val)
    // this.supStack.push(Math.min(this.supStack[this.supStack.length - 1], val))

    // 法二
    // if(!this.stack.length){
    //     this.stack.push(0)
    //     this.min = val
    // }else{
    //     let diff = val - this.min
    //     this.stack.push(diff)
    //     diff < 0 && (this.min = val)
    // }

    // 法三
    if(!this.stack.length){
        this.stack.push(new Node(val, val))
    }else{
        this.stack.push(new Node(val, Math.min(val, this.stack[this.stack.length - 1].min)))
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    // 法一
    // this.stack.pop()
    // this.supStack.pop()

    // 法二
    // let diff = this.stack.pop()
    // diff < 0 && (this.min = this.min - diff)

    // 法三
    this.stack.pop()
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    // 法一
    // return this.stack[this.stack.length - 1]
    
    // 法二
    // let diff = this.stack[this.stack.length - 1]
    // return diff < 0 ? this.min : this.min + diff

    // 法三
    return this.stack[this.stack.length - 1].val
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    // 法一
    // return this.supStack[this.supStack.length - 1]

    // 法二
    // return this.min

    // 法三
    return this.stack[this.stack.length - 1].min
};

// 法三
function Node(val, min){
    this.val = val
    this.min = min
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */