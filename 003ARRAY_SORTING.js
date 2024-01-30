// 003 ARRAY SORTING

let num = 8046957321
let ArrayNum = String(num).split("");
ArrayNum = ArrayNum.map((num)=>{
    return Number(num);
})
function bubbleSort(arr) {
    const len = arr.length;
    for (let i = 0; i < len; i++) {
      for (let j = 0; j < len - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        }
      }
    }
    return arr;
  }
console.log(bubbleSort(ArrayNum));



// MY OUTPUT:- PS C:\Users\HP\Javascript> node "c:\Users\HP\Javascript\JS_ASSIGNMENT\Programs.js"
// [
//   0, 1, 2, 3, 4,
//   5, 6, 7, 8, 9
// ]


