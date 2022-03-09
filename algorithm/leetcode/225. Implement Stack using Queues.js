/**
 * Initialize your data structure here.
 */

// 法一：双队列，思路同官方题解 18.04% 98.43% 
// 法二1：单队列，倒着存进去，pop的时候再处理顺序 47.97% 61.57%
// 法二2：单队列，存进去的时候就处理好顺序，pop的时候就直接shift 18.04% 94.51%

var MyStack = function() {
    // 法一
    // this.queue1 = []
    // this.queue2 = []

    // 法二1,2
    this.queue = []
};

/**
 * Push element x onto stack. 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    // 法一
    // this.queue2.push(x)
    // while(this.queue1.length){
    //     this.queue2.push(this.queue1.shift())
    // }
    // [this.queue1,this.queue2] = [this.queue2,this.queue1]

    // 法二1
    // this.queue.push(x)

    // 法二2
    this.queue.push(x)
    if(this.queue.length > 1){
        let i = this.queue.length - 1
        while(i--){
            this.queue.push(this.queue.shift())
        }
    }
};

/**
 * Removes the element on top of the stack and returns that element.
 * @return {number}
 */
MyStack.prototype.pop = function() {
    // 法一
    // return this.queue1.shift()

    // 法二1
    // let tmp = []
    // while(this.queue.length > 1){
    //     tmp.push(this.queue.shift())
    // }
    // let res = this.queue.shift()
    // this.queue = tmp
    // return res

    // 法二2   
    return this.queue.shift()
};

/**
 * Get the top element.
 * @return {number}
 */
MyStack.prototype.top = function() {
    // 法一
    // return this.empty() ? null : this.queue1[0]

    // 法二1
    // return this.queue[this.queue.length - 1]

    // 法二2
    // return this.queue[0] || null
    return this.empty() ? null : this.queue[0]

};

/**
 * Returns whether the stack is empty.
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    // 法一
    // return !this.queue1.length

    // 法二1,2
    return !this.queue.length
};

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */