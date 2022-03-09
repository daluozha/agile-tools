/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     struct ListNode *next;
 * };
 */


struct ListNode* reverseList(struct ListNode* head){
    // 迭代
    struct ListNode* p = NULL;
    struct ListNode* q = head;
    while(q != NULL){
        struct ListNode* tmp = q->next;
        q->next = p;
        p = q;
        q = tmp;
    }
    return p;
    
}