/**
 * @param {number[][]} bookings
 * @param {number} n
 * @return {number[]}
 * tag: 差分数组
 * https://leetcode.cn/problems/corporate-flight-bookings/
 */

class Difference {
    constructor(nums) {
        this.diff = new Array(nums.length).fill(0);
        this.diff[0] = nums[0];
        // 根据初始数组来构造差分数组
        for (let i = 1; i < nums.length; i++) {
            this.diff[i] = nums[i] - nums[i - 1];
        }
    }

    // 给闭区间 [i, j] 增加 val (可以是负数)
    increment(i, j, val) {
        this.diff[i] += val;
        if (j + 1 < this.diff.length) {
            this.diff[j + 1] -= val;
        }
    }

    // 返回结果数组
    result() {
        let res = new Array(this.diff.length).fill(0);
        res[0] = this.diff[0];
        // 根据差分数组来构造结果数组
        for (let i = 1; i < this.diff.length; i++) {
            res[i] = res[i - 1] + this.diff[i];
        }
        return res;
    }
}

var corpFlightBookings = function (bookings, n) {
    // 1.暴力
    // let answer = new Array(n).fill(0)
    // bookings.forEach(([from, to, val]) => {
    //     for(let i = from; i <= to; i++){
    //         answer[i - 1] += val
    //     }
    // })
    // return answer

    // 2. 差分数组
    // let answer = new Array(n).fill(0)
    // for(let [from, to, val] of bookings){
    //     answer[from - 1] += val
    //     if(to < n){
    //         answer[to] -= val
    //     }
    // }
    // console.log(answer)
    // for(let i = 1; i < n; i++){
    //     answer[i] += answer[i - 1]
    // }
    // return answer

    // 3. 封装成类
    let answer = new Difference(new Array(n).fill(0));
    bookings.forEach(([from, to, val]) => {
        answer.increment(from - 1, to - 1, val);
    });
    return answer.result();
};
