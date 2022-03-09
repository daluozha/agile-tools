#include <stdio.h>
// 冒泡排序：https://www.cxyxiaowu.com/5163.html
// https://blog.csdn.net/guoweimelon/article/details/50902597

/*
举个例子
    军训刚刚开始，一群学生要排队。
教官说：“你比你旁边的高，你俩换一下。怎么换完还比下一个高？继续换······”
最后这个同学将被换到最终合适的位置。
*/

// 函数定义
void bubble_sort(int arr[],int length){
    int i,j,temp;
    for(i = 0;i < length - 1;i++){
        // 每次遍历都会决定出一个最高的
        for(j = 0;j < length - i - 1;j++){
            if(arr[j] > arr[j + 1]){
                temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
}


// 测试流程
int main() {
    int arr[] = { 22, 34, 3, 32, 82, 55, 89, 50, 37, 5, 64, 35, 9, 70 };
    int len = (int) sizeof(arr) / sizeof(*arr);
    bubble_sort(arr, len);
    for (int i = 0; i < len; i++)
        printf("%d ", arr[i]);
    return 0;
}