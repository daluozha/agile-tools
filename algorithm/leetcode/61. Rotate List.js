/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */

 var rotateRight = function(head, k) {

    // 法一：双指针
    // if(!head || !k) return head
    // let len = 0, tmp = head
    // while(tmp && ++len) tmp = tmp.next
    // k %= len
    // if(!k) return head
    // let slow = head, fast = head
    // while(k--) fast = fast.next
    // while(fast.next) {
    //     slow = slow.next
    //     fast = fast.next
    // } 
    // let newHead = slow.next
    // fast.next = head
    // slow.next = null
    // return newHead

    // 法二：链表成环再断开
    if(!head || !k) return head
    let len = 0, tmp = head
    // tmp 的 while 遍历这里与法一稍有不同
    while(tmp.next && ++len) tmp = tmp.next
    k %= ++len
    if(!k) return head
    tmp.next = head
    k = len - k - 1
    while(k--) head = head.next
    let newHead = head.next
    head.next = null
    return newHead
}

// 法三
// var rotateRight = function(head, k) {
//     let len = 0, pointer = head
//     while(pointer) {
//         len++
//         pointer = pointer.next
//     }
//     k %= len
//     while(k > 0) {
//         head = rotate(head)
//         k--
//     }
//     return head
// };

// var rotate = function(head){
//     let p = head
//     while(p && p.next && p.next.next) p = p.next
//     try{
//         let q = p.next
//         q.next = head
//         p.next = null
//         return q
//     }catch(e) {
//         return p
//     }
// }