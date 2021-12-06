function solution(inputString) {
    let i;
    for(i=0;i<(inputString.length+1)/2-1;i++){
        if(inputString[i]!=inputString[inputString.length-1-i]){
            palin=true
            break;
        }
    }
    return (i>=((inputString.length+1)/2-1)?true:false)
}
