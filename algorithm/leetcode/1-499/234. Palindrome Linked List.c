/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     struct ListNode *next;
 * };
 *
 * //转换成数组再进行头尾比较
 *
 */


bool isPalindrome(struct ListNode* head){
    int arr[70000],len=0;
    struct ListNode* pointer=head;
    while(pointer){
        arr[len++]=pointer->val;
        pointer=pointer->next;
    }
    for(int i=0;i<len/2;i++){
        if(arr[i]!=arr[len-i-1]) return false;
    }
    return true;
}