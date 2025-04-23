// - **Question:** Return the *k* most frequent elements from an integer array.
    
//     **Input:** Array: `[1, 1, 1, 2, 2, 3]`, k = `2`
    
//     **Expected Output:** `[1, 2]`

let Array =[1, 1, 1, 2, 2, 3];
let k = 2;
let obj = {};

let nArr= []

for(let i=0; i<Array.length; i++){
   if(obj[Array[i]]){
    obj[Array[i]]++;
   }
   else{
    obj[Array[i]]=1;
   }

}

for(let key in obj){
    if(obj[key]>= k){
     nArr.push(key)
    }
}
console.log(nArr.map(Number));


// // - **Question:** Given an elevation map, compute how much water it can trap after raining.
    
// //     **Input:** `[0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]`
    
// //     **Expected Output:** `6`

// let arr = [0,1,0,2,1,0,1,3,2,1,2,1]
// let left = 0;
// let right = arr.length-1;
// let leftMax =0, rightMax =0;
// let maxWater = 0;
// while(left<right){

//     if (arr[left] < arr[right]) {
//                 if(arr[left] >= leftMax){
//                     leftMax = arr[left]
//                 }
//             else{
//                 maxWater += leftMax - arr[left]
//             }
//                 left++;
//  } else {
//       if(arr[right] >= rightMax){
//             rightMax = arr[right]
//         } 
//         else{
//             maxWater += rightMax - arr[right]
//         }
//       right--;
//      }
//    }
   
//    console.log(maxWater);




//    - **Question:** Search for a target value in a rotated sorted array; return its index or -1 if not found.
    
//     **Input:** Array: `[4, 5, 6, 7, 0, 1, 2]`, Target: `0`
    
//     **Expected Output:** `4`

// let Arr = [4, 5, 6, 7, 0, 1, 2];
// let target = 0;
// // for(let i=0; i<Arr.length; i++){
// //     if(Arr[i]=== Target){
// //         console.log(i);
// //         return 
// //     }
// // }

// let left = 0, right = Arr.length - 1;



//     while(left<=right){
//         let mid = Math.floor((left+right)/2);
//         if(Arr[mid]===target){
//             console.log(mid);
//             return
//         } 

//         if(Arr[left]<= Arr[mid]){
//             if(Arr[left]<=target && target<Arr[mid]){
//                 right = mid -1
//             }
//             else{
//                 left = mid +1;
//             }
//         }
//         else{
//             if(Arr[mid]<target && target <= Arr[right]){
//                 left = mid +1;
//             }
//             else{
//                 right = mid -1;
//             } 
//         }

//     }

//     console.log(-1)
   

// - **Question:** Evaluate the value of an arithmetic expression in Reverse Polish Notation.
    
//     **Input:** `["2","1","+","3","*"]`
    
//     **Expected Output:** `9`  (because (2 + 1) * 3 = 9)
// 

// let arr = ["2","1","+","3","*"];
// let stk =[];
// let operators = ["+", "-", "*", "/"];
// for(let i=0; i<arr.length; i++){
//     if(operators.includes(arr[i])){
//         let a = stk.pop();
//         let b = stk.pop();
//      switch (arr[i]){
//         case "+":
//             stk.push(a+b);
//         break; 
//         case "-":
//             stk.push(a-b);
//         break;
//         case "*":
//             stk.push(a*b);
//         break;
//         case "/":
//             stk.push(a/b);
//         break;   

//      }
//         }
//     else{
//         stk.push(parseInt(arr[i]));
//     }
// }
//    console.log(stk.join(" ")); 
   
    
    

//    - **Question:** Given strings *s* and *t*, find the minimum window in *s* which will contain all characters of *t*. If there is no such window, return an empty string.
    
//     **Input:** s = `"ADOBECODEBANC"`, t = `"ABC"`
    
//     **Expected Output:** `"BANC"`
    

 
    

