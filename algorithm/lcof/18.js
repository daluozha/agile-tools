// 剑指 Offer 18. 删除链表的节点
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var deleteNode = function(head, val) {
    // 法一：递归
    // if(!head) return null
    // if(head.val === val) return head.next
    // head.next = deleteNode(head.next, val)
    // return head

    // 法二 双指针
    if(head.val === val) return head.next
    let pre = head, cur = head.next
    while(cur && cur.val !== val){
        pre = cur
        cur = cur.next
    }
    if(cur) pre.next = cur.next
    return head
};