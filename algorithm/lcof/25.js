/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 var mergeTwoLists = function(l1, l2) {

    // 法一：建立一个新的node
    // if(!l1 || !l2) return l1 || l2
    // let node = new ListNode()
    // if(l1.val < l2.val){
    //     node = l1
    //     node.next = mergeTwoLists(l1.next, l2)
    // }else{
    //     node = l2
    //     node.next = mergeTwoLists(l1, l2.next)
    // }
    // return node

    // 法二：改造原有链表，哪边第一个结点小就改造哪边
    // if(!l1 || !l2) return l1 || l2
    // if(l1.val < l2.val){
    //     l1.next = mergeTwoLists(l1.next,l2)
    //     return l1
    // }else{
    //     l2.next = mergeTwoLists(l1,l2.next)
    //     return l2
    // }

    // 法三：遍历
    let head = new ListNode(0),cur = head
    while(l1 && l2){
        if(l1.val < l2.val){
            cur.next = l1
            l1 = l1.next
        }else{
            cur.next = l2
            l2 = l2.next
        }
        cur = cur.next
    }
    cur.next = l1 || l2
    return head.next
};