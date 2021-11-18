/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    const res=[]
    for(let i=0;i<nums.length;i++){
        res.push(i+1)
    }
    for(let i=0;i<nums.length;i++){
        findRes(res,nums[i])
    }
    return res
};

var findRes=function(res,n){
    const index = res.indexOf(n);
    if (index > -1) {
      res.splice(index, 1);
    }

}
