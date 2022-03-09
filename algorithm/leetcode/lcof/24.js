/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var reverseList = function(head) {
    // 法一
    // let newHead = null
    // while(head){
    //     let tmp = head.next
    //     head.next = newHead
    //     newHead = head
    //     head = tmp
    // }
    // return newHead

    // 法二
    if(!head) return head
    let cur = head
    while(head.next){
        let tmp = head.next.next
        head.next.next = cur
        cur = head.next
        head.next = tmp
    }
    return cur
    
    // 法三
    // if(!head || !head.next) return head
    // let ret = reverseList(head.next)
    // head.next.next = head
    // head.next = null
    // return ret
};