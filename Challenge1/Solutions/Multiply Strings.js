/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
    let n1=[...num1]
    let n2=[...num2]
    if(num1 == "0" || num2 == "0") 
        return "0"
        let m = num1.length, n = num2.length;
    let res = Array(m + n).fill(0);
    for(let i = m -1 ; i >= 0; i--) {
        for (let j = n - 1; j >= 0; j--) {
            let p1 = i + j;
            let p2 = i+ j +1;
            let sum  = res[p2] + (n1[i] * n2[j]);
            res[p2] = sum% 10;
            res[p1] += Math.floor(sum/10);
        }
    } 
    if(res[0] == "0")
        res.shift();
    
    return res.join("")
};


//Alternate solution::
//let ct={}
//    for(let i=0;i<n;i++){
//        
//         if(ct[t[i]] >= 0 ){
//            return [ct[t[i]],i]   
//        }
//        ct[target -t[i]]=i
//    }
