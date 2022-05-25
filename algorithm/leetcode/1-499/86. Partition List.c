/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     struct ListNode *next;
 * };
 */


struct ListNode* partition(struct ListNode* head, int x){
    struct ListNode* p1H = (struct ListNode *)malloc(sizeof(struct ListNode));
    struct ListNode* p2H = (struct ListNode *)malloc(sizeof(struct ListNode));
    struct ListNode* p1=p1H;
    struct ListNode* p2=p2H;
    struct ListNode* p=head;
    while(p){
        if(p->val<x){
            p1->next=p;
            p1=p1->next;
        }else{
            p2->next=p;
            p2=p2->next;
        }
        p=p->next;
    }
    p2->next=NULL;
    p1->next=p2H->next;
    return p1H->next;
}