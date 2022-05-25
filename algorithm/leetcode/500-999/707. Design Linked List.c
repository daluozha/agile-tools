typedef struct MyLinkedList{
    int val;
    struct MyLinkedList* next;
} MyLinkedList;

/** Initialize your data structure here. */

MyLinkedList* myLinkedListCreate() {
    MyLinkedList* obj=(MyLinkedList*)malloc(sizeof(MyLinkedList));
    obj->val=0;
    obj->next=NULL;
    return obj;
}

/** Get the value of the index-th node in the linked list. If the index is invalid, return -1. */
int myLinkedListGet(MyLinkedList* obj, int index) {
    if(obj->next==NULL || index<0) return -1;
    int now=0;
    MyLinkedList* nowNode=obj->next;
    while(now<index){
        if(nowNode==NULL) return -1;
        nowNode=nowNode->next;
        now++;
    }
    if(nowNode!=NULL) return nowNode->val;
    return -1;
}

/** Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list. */
void myLinkedListAddAtHead(MyLinkedList* obj, int val) {
    MyLinkedList* node=(MyLinkedList*)malloc(sizeof(MyLinkedList));
    node->val=val;
    node->next=NULL;
    if(obj->next==NULL) obj->next=node;
    else{
        node->next=obj->next;
        obj->next=node;
    }
}

/** Append a node of value val to the last element of the linked list. */
void myLinkedListAddAtTail(MyLinkedList* obj, int val) {
    if(obj==NULL || index<0) return;
    MyLinkedList* p=obj;
    while(p->next!=NULL){
        p=p->next;
    }
    MyLinkedList* node=(MyLinkedList*)malloc(sizeof(MyLinkedList));
    node->val=val;
    p->next=node;
    node->next=NULL;
}

/** Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted. */
void myLinkedListAddAtIndex(MyLinkedList* obj, int index, int val) {
    if(index<=0){
        myLinkedListAddAtHead(obj,val);
        return;
    }
    int now=0;
    MyLinkedList* nowNode=obj->next;
    if(nowNode==NULL) return;
    while(nowNode->next!=NULL){
        if(now==index-1) break;
        nowNode=nowNode->next;
        now++;
    }
    if(now!=index-1) return;
    MyLinkedList* node=(MyLinkedList*)malloc(sizeof(MyLinkedList));
    node->val=val;
    node->next=nowNode->next;
    nowNode->next=node;
}

/** Delete the index-th node in the linked list, if the index is valid. */
void myLinkedListDeleteAtIndex(MyLinkedList* obj, int index) {
    if(index<0 || obj->next==NULL) return;
    if(index==0){
        obj->next=obj->next->next;
        return;
    }
    MyLinkedList* nowNode=obj->next;
    int now=0;
    while(nowNode->next!=NULL){
        if(now==index-1) break;
        nowNode=nowNode->next;
        now++;
    }
    if(now==index-1 && nowNode->next!=NULL){
        nowNode->next=nowNode->next->next;
    }

}

void myLinkedListFree(MyLinkedList* obj) {
    if(obj->next!=NULL){
        myLinkedListFree(obj->next);
        obj->next=NULL;
    }
    free(obj);
    
}

/**
 * Your MyLinkedList struct will be instantiated and called as such:
 * MyLinkedList* obj = myLinkedListCreate();
 * int param_1 = myLinkedListGet(obj, index);
 
 * myLinkedListAddAtHead(obj, val);
 
 * myLinkedListAddAtTail(obj, val);
 
 * myLinkedListAddAtIndex(obj, index, val);
 
 * myLinkedListDeleteAtIndex(obj, index);
 
 * myLinkedListFree(obj);
*/