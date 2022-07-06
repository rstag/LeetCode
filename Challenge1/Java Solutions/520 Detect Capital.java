class Solution {
    public boolean detectCapitalUse(String word) {
        
        Boolean firstCap=false;
        Boolean allCap=false;
        
        if(word.charAt(0)<='Z' && word.charAt(0)>='A')
            firstCap=true;
        
        if(word.length()==1)
            return true;
        
        if(word.charAt(1)<='Z' && word.charAt(1)>='A')
            allCap=true;
                    
        for(int i=1;i<word.length();i++){
            if(firstCap){
                if(allCap){  

                    if(word.charAt(i)>'Z' || word.charAt(i)<'A')
                        return false;
                }
                else if(word.charAt(i)<='Z' && word.charAt(i)>='A')
                    return false;     
            }
            else{
                if(word.charAt(i)<='Z' && word.charAt(i)>='A')
                    return false;
                }
        }
        return true;
    }
}
