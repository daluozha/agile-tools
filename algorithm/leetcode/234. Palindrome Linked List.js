/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    // 法一
    let cur = head, arr = []
    while(cur) {
        arr.push(cur.val)
        cur = cur.next
    }
    for(let i = 0, j = arr.length - 1; i <= j; i++, j--) {
        if(arr[i] !== arr[j]) return false
    }
    return true

    // todo 链表
};