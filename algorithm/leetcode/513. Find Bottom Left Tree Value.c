/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     struct TreeNode *left;
 *     struct TreeNode *right;
 * };
 */

int findBottomLeftValue(struct TreeNode* root){
    struct TreeNode* queue[10000];
    struct TreeNode* pointer;
    int head=0,tail=0;
    int curSize=0;//本轮循环次数
    queue[tail++]=root;
    while(head<tail){
        curSize=tail-head;
        for(int i=0;i<curSize;i++){
            pointer = queue[head++];
            if(pointer->right)queue[tail++]=pointer->right;
            if(pointer->left)queue[tail++]=pointer->left;
        }
    }
    return pointer->val;
}