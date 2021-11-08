/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {
    // return ((n*n)-(2*(n-1)))    
    return (fact(2*n)/(fact(n)*fact((n+1))))

};

var fact=function(x){
    // if(x==1)
    //     return 1
    // return x*fact(x-1)
    let f=1
       for(let i=2;i<=x;i++) 
          f=f*i

       return f
}
