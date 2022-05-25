/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     struct ListNode *next;
 * };
 */

struct ListNode* mergeTwoLists(struct ListNode* l1, struct ListNode* l2){
    if(!l1 || !l2) return l1 ? l1 : l2;
    struct ListNode* node = (struct ListNode*)malloc(sizeof(struct ListNode));
    if(l1->val < l2->val){
        node = l1;
        node->next = mergeTwoLists(l1->next,l2);
    }else{
        node = l2;
        node->next = mergeTwoLists(l1,l2->next);
    }
    return node;
}