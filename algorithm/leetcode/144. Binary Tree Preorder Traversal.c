/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     struct TreeNode *left;
 *     struct TreeNode *right;
 * };
 */


/**
 * Note: The returned array must be malloced, assume caller calls free().
 */

void preorder(struct TreeNode* node,int* ret,int* returnSize){
    if(node!=NULL){
        ret[(*returnSize)++]=node->val;
        preorder(node->left,ret,returnSize);
        preorder(node->right,ret,returnSize);
    }
}
int* preorderTraversal(struct TreeNode* roo
    t, int* returnSize){
    *returnSize=0;
    int* ret=(int*)malloc(100*sizeof(int));
    preorder(root,ret,returnSize);
    return ret;
}