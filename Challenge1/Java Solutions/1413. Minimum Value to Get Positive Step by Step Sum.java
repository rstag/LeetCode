class Solution {
    public int minStartValue(int[] nums) {
    int sum=0;
    int max=nums[0];
    for(int i=0;i<nums.length;i++){
        sum+=nums[i];
        if(sum<0 && max>sum)
            max=sum;
    }
    if(max<0)
        return -max+1;
    return (nums[0]>1?1:nums[0]);
    }
}
