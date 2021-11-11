/**
 * @param {number[]} nums
 * @return {number}
 */
var minStartValue = function(nums) {
    let sum=0;
    let max=nums[0]
    let res=(nums[0]>1?1:nums[0])
    for(let i=0;i<nums.length;i++){
        sum+=nums[i]
        if(sum<0 && max>sum)
            max=sum
    }
    if(max<0)
      return -max+1
    return res
};
