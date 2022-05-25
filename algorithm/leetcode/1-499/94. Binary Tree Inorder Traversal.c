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
void inorder(struct TreeNode* node,int* ret,int* returnSize){
    if(node!=NULL){
        inorder(node->left,ret,returnSize);
        ret[(*returnSize)++]=node->val;
        inorder(node->right,ret,returnSize);
    }
}

int* inorderTraversal(struct TreeNode* root, int* returnSize){
    *returnSize=0;
    int* ret=(int*)malloc(100*sizeof(int));
    inorder(root,ret,returnSize);
    return ret;
}