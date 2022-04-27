/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
    let t,cap=0,small=0,firstcap=false,n=word.length;
    for(let i=0;i<n;i++){
        t=word[i];
        if(t.charCodeAt(0)>=65 && t.charCodeAt(0)<=90){
            if(i==0)
                firstcap=true;
            cap++;
        }
        else{
            small++;
        }
        
    }
    if(firstcap){
        if(n==(small+1))
            return true;
        if(n==cap)
            return true;
    }
    else if(n==small){
        return true;
    }
    return false;
    
};
