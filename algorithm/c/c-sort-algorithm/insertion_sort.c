#include <stdio.h>
/*  
举个例子：
    军训排队在已经排好了一个纵队的时候，有人要临时加入到这个队里来.
于是教官大声喊道：“新来的，迅速找到你的位置，入队！”于是新来的插入到这个队伍的合适位置中。
*/

// 函数定义
void insertion_sort(int arr[], int len){
    int i,j,tmp;
    for(i = 1;i < len;i++){
        
        tmp = arr[i];
        for(j = i;j > 0 && arr[j - 1] > tmp;j--){
            arr[j] = arr[j - 1];
        }
        arr[j] = tmp;
    }
}

// 测试流程

int main() {
    int arr[] = { 22, 34, 3, 32, 82, 55, 89, 50, 37, 5, 64, 35, 9, 70 };
    int len = (int) sizeof(arr) / sizeof(*arr);
    insertion_sort(arr, len);
    for (int i = 0; i < len; i++)
        printf("%d ", arr[i]);
    return 0;
}