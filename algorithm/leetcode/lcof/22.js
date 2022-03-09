/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
 var getKthFromEnd = function(head, k) {
    // 法一
    // let slow = head, fast = head
    // while(k--) fast = fast.next
    // while(fast){
    //     fast = fast.next
    //     slow = slow.next
    // }
    // return slow

    // 法二
    let tmp = head, len = 0
    while(tmp && ++len) tmp = tmp.next
    k = len - k
    while(k--) head = head.next
    return head
};/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var getKthFromEnd = function(head, k) {
    // 法一
    // let slow = head, fast = head
    // while(k--) fast = fast.next
    // while(fast){
    //     fast = fast.next
    //     slow = slow.next
    // }
    // return slow

    // 法二
    let tmp = head, len = 0
    while(tmp && ++len) tmp = tmp.next
    k = len - k
    while(k--) head = head.next
    return head
};