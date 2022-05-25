/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
 var removeElements = function(head, val) {
    // 法一：递归
    // if(!head) return head
    // head.next = removeElements(head.next, val)
    // return head.val === val ? head.next : head

    // 法二：迭代
    const dummyHead = new ListNode(0, head)
    let temp = dummyHead
    while(temp.next){
        if(temp.next.val === val)
            temp.next = temp.next.next
        else 
            temp = temp.next
    }
    return dummyHead.next
};