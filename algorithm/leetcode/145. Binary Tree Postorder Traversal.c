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
void postorder(struct TreeNode* node,int* ret,int* returnSize){
    if(node!=NULL){
        postorder(node->left,ret,returnSize);
        postorder(node->right,ret,returnSize);
        ret[(*returnSize)++]=node->val;
    }
}
int* postorderTraversal(struct TreeNode* root, int* returnSize){
    *returnSize=0;
    int* ret=(int*)malloc(100*sizeof(int));
    postorder(root,ret,returnSize);
    return ret;
}