// // /**
// //  * @param {string[]} words
// //  * @param {string[]} puzzles
// //  * @return {number[]}
// //  */
var findNumOfValidWords = function(words, puzzles) {
    
    const w1=[]
    for(let j=0;j<words.length;j++){
        let w2=""
        // let lt={}
       for(let i=0;i<words[j].length;i++){

            if (w2.indexOf(words[j]) === -1) 
                // w2.push(words[j]);
                w2+=(words[j]);
        }

            if (w2[0].length<8) 
                w1.push(w2);
        
    }
    // console.log(w1)
    const wordMap = new Map();
    const aCharCode = 'a'.charCodeAt(0);
    w1.forEach(word => {
        let mask = 0;
        for (let i = 0; i < word.length; i++) {
            mask |= (1 << (word.charCodeAt(i) - aCharCode));
        }
        if (wordMap.has(mask)) {
            wordMap.set(mask, wordMap.get(mask) + 1);
        } else {
            wordMap.set(mask, 1);
        }
    });

    const result = [];
    for (let i = 0; i < puzzles.length; i++) {
        result.push(0);
        let curMask = 0;
        for (let j = 0; j < puzzles[i].length; j++) {
            curMask |= (1 << (puzzles[i].charCodeAt(j) - aCharCode));
        }
        const firstLetter = 1 << (puzzles[i].charCodeAt(0) - aCharCode);
        
        let start = curMask;
        while (start > 0) {
            if ((start & firstLetter) === firstLetter && wordMap.has(start)) {
                result[i] += wordMap.get(start);
            }
                        // console.log(start-1+" ** "+curMask +" result "+result[i])

            start = (start - 1) & curMask
            // start = 0
        }
    }
    
    return result;
}

// Alternate Solution 1

//     let res=[]
//     let ct=0
//     const w1=[]
//     for(let j=0;j<words.length;j++){
//         let w2=[]
//         // let lt={}
//        for(let i=0;i<words[j].length;i++){

//             if (w2.indexOf(words[j]) === -1) 
//                 w2.push(words[j]);
//         }

//             if (w2[0].length<8) 
//                 w1.push(w2);
        
//     }
//     // console.log(w1)
    
//     for(i=0;i<puzzles.length;i++){
//         res.push(iteratepuzzle(words,puzzles,i))
//     }
    
//     // ct=iteratepuzzle(words,puzzles,0)
//     // res.push(iteratepuzzle(words,puzzles,0))
//     // res.push(iteratepuzzle(words,puzzles,1))
    
//     return res
    
// }


// var iteratepuzzle=function(words,puzzles,i){
//         let j,k,l
//            let ct =0
//         // console.log("puzzles "+puzzles[i])
//         for(j=0;j<words.length;j++){
//             // console.log("words "+words[i])
//             // console.log("puzzles first  "+puzzles[i][0])
//             let found=false
//             let linvalid=true
//             let addfound=0
//             for(k=0;k<words[j].length;k++){
//                 // console.log("words letter "+words[j][k])
//                 if(puzzles[i][0]==words[j][k]){
//                     found=true
//                 }
//                 if(puzzles[i][1]==words[j][k] ||
//                    puzzles[i][2]==words[j][k] ||
//                    puzzles[i][3]==words[j][k] ||
//                    puzzles[i][4]==words[j][k] ||
//                    puzzles[i][5]==words[j][k] ||
//                    puzzles[i][6]==words[j][k] ||
//                    puzzles[i][0]==words[j][k]){
                    
//                 }
//                 else{
//                     linvalid=false
//                     break;
//                 }
                
//             }
//             if(found && k==words[j].length){
//                 ct+=1
//             }
//             else{
//                 ct+=0
//             }
            
//         }
//         // console.log(ct)
//         // res.push(ct)
//     return ct
// }

// Alternate Solution 2

// // var findNumOfValidWords = function(words, puzzles) {

// //     let w=words;
// //     let p=puzzles;
// //     let n1=w.length;
// //     let n2=p.length;
// //     let i,j,k;
// //     const res=[]
// //     for(i=0;i<n2;i++){
// //         let p1=p[i];
// //         let ct=0
// //         let arr1=p1.split("")
// //         // console.log("puzzle "+p1)
// //         for(j=0;j<n1;j++){
// //             let w1=w[j];
// //             let arr2=w1.split("")
// //             // console.log("word "+w1)
// //             // if(arr2[0]!=arr1[0]){
// //             //     // break;
// //             //     continue;
// //             // }
// //             // else{
// //                // ct+= checkinvalid(arr1,arr2,arr1[0])
// //             const setA = new Set(arr1)
// //             const setB = new Set(arr2)
// //             ct+= isSuperset(setA, setB,arr1[0],arr2)
// //             // }
// //         }
// //         // console.log(ct)
// //         res.push(ct)
// //     }
// //     return res
// // };

// Alternate Solution 3

// // var checkinvalid = function(a1,a2,first){
// //     let i,j,k
// //     let found=false
// //     for(i=0;i<a2.length;i++){
// //         let found1 = false
// //         let t = a2[i]
// //         // console.log("letter "+t)
// //         if(a2[i]==first){
// //                 // console.log("first "+first +"  ** "+a2[i])
// //                 found=true
// //             }
// //         for(j=0;j<a1.length;j++){
// //             if(a1[j]==t){
// //                 found1=true
// //             }                
// //         }
// //         if(!found1){
// //             break;
// //             // continue;
// //         }
// //     }
    
// //     if(i==a2.length && found )
// //         return 1
// //     else
// //         return 0
// // }

// Alternate Solution 4

// // var isSuperset = function(set, subset,first,arr2) {
// //     let found=false
// //     for(let i=0;i<arr2.length;i++){
// //         if(arr2[i]==first){
// //             found=true
// //         }
// //     }
// //     for (let elem of subset) {
// //         if (!set.has(elem)) {
// //             return 0
// //         }
// //     }
// //     if(found)
// //     {return 1}
// //     return 0
// // }
