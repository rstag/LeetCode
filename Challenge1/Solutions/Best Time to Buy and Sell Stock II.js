/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    
    // let p1=prices[0]
    let profit=0
    // let sell=0,buy=0
    for(let i=0;i<prices.length;i++){
        if (prices[i] > prices[i - 1])
                profit += prices[i] - prices[i - 1];
    }
    return profit
    
    // let i,j,k
    // let buy,sell
    // let maxprofitday=0
    // let parr=[]
    // let day=1
    // for(i=0;i<prices.length;i++){
    //     let profit=0
    //     for(j=i+1;j<prices.length;j++){
    //         if(prices[j]>prices[i]){
    //             //sell 
    //             profit=prices[j]-prices[i]
    //         }
    //         if(profit>maxprofitday ){
    //             maxprofitday=profit
    //             day=j+1
    //         }
    //     }
    //     parr.push({i:profit})
    //     console.log("maxprofitday "+maxprofitday+" day "+day )
    // }
    // console.log(parr)
    // return maxprofitday
};
