#include <stdio.h>
/*  
举个例子：
    军训排队的时候，教官说：“你们都站着别动，我看谁个子最小。”
然后教官选出个子最小的同学，说：“第一个位置是你的了，你和第一个同学换一下，剩下的同学我继续选。”
*/

// 函数定义
void selection_sort(int arr[],int len){
    int i,j,temp;
    for(i = 0;i < len-1;i++){
        int min = i;
        for(j = i+1;j < len;j++) if(arr[min] > arr[j]) min = j;
        if(min != i){
            temp = arr[min];
            arr[min] = arr[i];
            arr[i] = temp;
        }
        /* swap(&a[min], &a[i]);  */   // 使用自定义函数交換
    }
}

// 测试流程

/*
void swap(int *a,int *b) // 交换两个变量
{
    int temp = *a;
    *a = *b;
    *b = temp;
}
*/
int main() {
    int arr[] = { 22, 34, 3, 32, 82, 55, 89, 50, 37, 5, 64, 35, 9, 70 };
    int len = (int) sizeof(arr) / sizeof(*arr);
    selection_sort(arr, len);
    for (int i = 0; i < len; i++)
        printf("%d ", arr[i]);
    return 0;
}