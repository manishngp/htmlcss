let arr = [1, 6, 0, 7, 2, 4, 0, 0, 0, 2, 3, 0];

// let i = 0; 
// let j= arr.length -1;

// while(i<j){
//     if(arr[i]=== 0 && arr[j]!== 0){
//        [arr[i], arr[j]]= [arr[j], arr[i]];
//        i++;
//        j--;
//     }
//     else if(arr[j]===0 && arr[i]!==0){
//        i++;
//        j--;
//     }
//     else if(arr[i]!== 0){
//         i++;
//     }
//     else if(arr[j]===0){
//         j--;
//     }
// }

 
let i =0;
 let j = 1;
while( i<arr.length && j<arr.length){
    
    if(arr[i]=== 0 && arr[j]!== 0){
        [arr[i], arr[j]]= [arr[j], arr[i]];
       i++;
        j++;
        
    }
    else if(arr[i]===0 && arr[j]=== 0){
        j++;
    } else {
    i++;
    j = i + 1;
  }
}


// let i = 0;

// for (let j = 0; j < arr.length; j++) {
//   if (arr[j] !== 0) {
//     [arr[i], arr[j]] = [arr[j], arr[i]];
//     i++;
//   }
// }



console.log(arr);