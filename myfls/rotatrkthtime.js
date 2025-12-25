

// for(let i=0; i<k; i++){
//      let temp = arr[0];

//      for(let j=0; j<arr.length-1; j++){
//         arr[j]= arr[j+1];
//      }
//      arr[arr.length-1] = temp;



// }
 // first item sendig to last k times
let arr = [1, 2, 3, 4, 5]; //3 4 5 1 2 


let k = 2;
let arr1 =[];
for (let i = 0; i < arr.length; i++) {
    console.log(i, k, arr.length);
    console.log((i + k) % arr.length);
//    arr1[i]  = arr[(i + k) % arr.length];
 // arr1[(i+k)%arr.length]=arr[i]
    // 1  - 0 + 2 = 2 % 5 =2
    // 2  - 1 + 2  =3 % 5 = 3
    // 3  - 2 + 2  =4 % 5 =4 
    // 4  - 3 + 2 =  5 % 5  =0
    // 5  - 4+ 2 =6 % 5 = 1
}

console.log("---------------------------------------");
console.log(arr1);