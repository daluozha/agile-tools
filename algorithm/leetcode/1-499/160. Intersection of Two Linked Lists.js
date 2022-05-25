/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    // 法一：map
    // let tempa = headA, tempb = headB
    // const map = new Map()
    // while(tempa){
    //     map.set(tempa, 1)
    //     tempa = tempa.next
    // }
    // while(tempb){
    //     if(map.get(tempb))
    //         return tempb
    //     tempb = tempb.next
    // }
    // return tempb

    // 法二：双指针
    let tempa = headA, tempb = headB
    while(tempa !== tempb){
        tempa = tempa ? tempa.next : headB
        tempb = tempb ? tempb.next : headA
    }
    return tempa
};