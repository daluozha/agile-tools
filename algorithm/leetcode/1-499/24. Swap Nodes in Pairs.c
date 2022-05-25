/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     struct ListNode *next;
 * };
 */


struct ListNode* swapPairs(struct ListNode* head){
    // 法一 遍历
    if(NULL == head || NULL == head->next) return head;
    struct ListNode* p = head;
    struct ListNode* q = p->next;
    head = q;
    do{
        p->next = q->next;
        q->next = p;
        p = p->next;
        if(p && p->next){
            // 1的next仍然是3，要先改成4，不然下一轮遍历3和4交换以后，无法形成2→1→4→3
            q->next->next = p->next;
            q = p->next;
        }else break;
    }while(1);
    return head;
}