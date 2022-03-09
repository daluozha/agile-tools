/**
 * @param {number[]} nums
 * @return {boolean}
 */
var checkPossibility = function(nums) {
    // let change=false,limit=0
    // for(let i=0;i<nums.length-1;i++){
    //     if(nums[i]<=nums[i+1]) limit=nums[i]
    //     else{
    //         if(!change){
    //             change=true
    //             if(nums[i+1]>=limit) nums[i]=limit
    //             else nums[i+1]=nums[i]
    //         }else return false
    //     }
    // }
    // return true
    let count=0
    for(let i=1;i<nums.length;i++){
        if(nums[i-1]>nums[i]){
            if(count==1) return false
            else count++
            // 优先考虑改动nums[i-1]，不行再改nums[i]
            if(i==1||nums[i-2]<=nums[i]) nums[i-1]=nums[i]
            else nums[i]=nums[i-1]
        }
    }
    return true
};