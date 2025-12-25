// let arr = [23, 45, 34, 12, 10, 34, 34, 56, 77, 88, 88];

// let max = arr[0];
// let sMax = arr[1]


// for(let i=0; i<arr.length; i++){
//     if(arr[i]>max){
//         sMax = max;
//         max = arr[i];
//     }
//     // else if(arr[i]>sMax ){
//     //     sMax= arr[i];
//     // }
// }
// console.log(max ,sMax);

let arr = [23, 45, 34, 12, 10, 34, 34, 56, 77, 88];

let max = -Infinity;
let sMax = -Infinity;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] >=max) {
        sMax = max;
        max = arr[i];
    } 
    // else if (arr[i] > sMax) {
    //     sMax = arr[i];
    // }
}

console.log(max, sMax);
