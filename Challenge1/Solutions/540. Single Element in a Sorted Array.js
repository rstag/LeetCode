/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {
    let pre=nums[0]
    for(let i=1;i<nums.length;i++){
        if(pre!=nums[i]){
            break
        }
        else{
            pre=nums[i+1]
            i++
        }
    }
    return pre
};
