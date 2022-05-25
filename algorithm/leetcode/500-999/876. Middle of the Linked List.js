/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
    if(!head) return head
    // 法一：快慢指针
    // let slow = head, fast = head
    // while(fast && fast.next){
    //     slow = slow.next
    //     fast = fast.next.next
    // }
    // return slow

    // 法二：数组
    // let arr = [head]
    // while(arr[arr.length - 1].next)
    //     arr.push(arr[arr.length - 1].next)
    // // return arr[Math.floor(arr.length / 2)]
    // return arr[Math.trunc(arr.length / 2)]

    // 法三：单指针
    let cur = head, len = 0
    while(cur) {
        len++
        cur = cur.next
    }
    cur = head
    len = Math.floor(len / 2)
    while(len--) cur = cur.next
    return cur
};