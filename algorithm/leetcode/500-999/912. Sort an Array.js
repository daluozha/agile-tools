/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    // 选择排序
    // 第一次for是先选定位置
    // for(let i = 0, len = nums.length; i < len; i++){
    //     let min 
    // }

    // 快排
    if(nums.length < 2) return nums;
    return quickSort(nums, 0, nums.length - 1)

    // 归并
    // return mergeSort(nums, 0, nums.length - 1)
};

function quickSort(nums, left, right){
    if(left >= right) return;

    // 根据pivot分好左右，并返回pivot的位置
    let pivotIndex = partition(nums, left, right)
    
    quickSort(nums, left, pivotIndex - 1)
    quickSort(nums, pivotIndex + 1, right)
    return nums
}

function partition(nums, left, right){
    let pivot = right
    let _left = left
    for(let i = left; i < right; i++){
        if(nums[i] < nums[pivot]){
            [nums[_left], nums[i]] = [nums[i], nums[_left]]
            _left++
        }
    }
    [nums[_left], nums[pivot]] = [nums[pivot], nums[_left]]
    return _left
}

// function mergeSort(nums, left, right){
//     if(left >= right) return nums;
//     let mid = (left + right) >> 1
//     mergeSort(nums, left, mid)
//     mergeSort(nums, mid + 1, right)
//     return merge(nums, left, mid, right)
// }

// function merge(nums, left, mid, right){
//     let ans = []
//     let c = 0, i = left, j = mid + 1;
//     while(i <= mid && j <= right){
//         ans[c++] = nums[i] < nums[j] ? nums[i++] : nums[j++]
//     }
//     while(i <= mid) 
//         ans[c++] = nums[i++];
//     while(j <= right)
//         ans[c++] = nums[j++]

//     // 将排序好的ans替代nums
//     for(let i = 0;i < ans.length; i++){
//         nums[i + left] = ans[i]
//     }
//     return nums
// }