/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    const result=[]
    let t,prev,pair='';
    if(nums.length>0)
    {
        t=nums[0]
        prev=t;
    }

    for(let i=0;i<nums.length;i++){
        if(nums[i+1] && (t+1)==nums[i+1]){
            t=nums[i+1]
        }
        else if(nums[i+1] && (t+1)!=nums[i+1]){
            if(prev==t){
                pair=t+""
                prev=nums[i+1]
            }else{
                pair=prev+"->"+t
                prev=nums[i+1]
            }
            result.push(pair)
            t=nums[i+1]
        }
        else{
            if(prev==t){
                pair=t+""
            }else{
                pair=prev+"->"+t
            }
            result.push(pair)
            if(i+1<nums.length)
            {t=nums[i+1]
                prev=nums[i+1]}
        }
        
        
    }
    return result
};
