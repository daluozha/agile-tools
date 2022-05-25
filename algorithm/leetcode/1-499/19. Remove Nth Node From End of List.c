/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     struct ListNode *next;
 * };
 */


struct ListNode* removeNthFromEnd(struct ListNode* head, int n){
    if(!head || !head->next) return NULL;
    struct ListNode* fast=head;
    struct ListNode* slow=head;
    for(int i=0;i<n;i++) fast=fast->next;
    if(!fast) return head->next;
    while(fast&&fast->next){
        slow=slow->next;
        fast=fast->next;
    }
    slow->next=slow->next->next;
    return head;
}