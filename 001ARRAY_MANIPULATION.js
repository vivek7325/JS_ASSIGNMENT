// 001 ARRAY MANIPULATION

const arr = [-2,5,3,-8,10,-4];
const arr2 =[-12,10,3,-7,2,-8,-1,-6,-6]; 
function sumOfPositives(ArrayOfinteger){    
    let positivesum =0;                     
    for(let i of ArrayOfinteger){              
        if(i>=0){                                
            positivesum+=i;
        }
    }
    return positivesum;
}
console.log(sumOfPositives(arr)); 
                         
// console.log(sumOfPositives(arr2));
// PS C:\Users\HP\Javascript> node "c:\Users\HP\Javascript\JS_ASSIGNMENT\001ARRAY_MANIPULATION.js"
// 18
// 15
