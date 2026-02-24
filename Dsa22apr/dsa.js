function
// factorial
// function fact(n){
//     if(n==0) return 1;
//     if(n==1) return 1;
//     return n*fact(n-1);
// }


// function fact(n){
//     let factorial = 1;
//     for(let i=1; i<=n; i++){
//         factorial = factorial*i;
//     }
//     return factorial;
// }
// console.log(fact(5));

// find apperiance of 2 in array

// let arr = [2, 3, 2, 4, 2];
// let n = 2
// function apper(n){
    // let count =0;
    // for(let i=0; i<arr.length; i++){

    //     if(arr[i]===2){
    //         count++;
    //     }
    // }
    
    // for(let i=0; i<arr.length; i++){
    //     // ** do with object
    // }
    // return count;
// }

// console.log(apper(2));



// fibbonachi series

// function fibbo(n){
//     if(n==0) return 0;
//     if(n==1) return 1;
//     return fibbo(n-1)+fibbo(n-2);
// }
// console.log(fibbo(8));


// 15 sum of digits
// let num = 8472;
// let sum = 0;
// while(num>0){
//    sum += num%10;
//    num = Math.floor(num/10)
// }
// console.log(sum);

// 14 count vowels

// let str = "implementation";
// let astr = str.split("")

// let vowels = ["a","e","i","o","u"];
// let count = 0;
// for(let i=0; i<astr.length; i++){
//     if(vowels.includes(astr[i])){
//         count++;
//     }
// }
// console.log(count);

// 6. **Question:** Find the second largest element in an integer array.
    
//     **Input:** `[7, 2, 9, 4, 9, 5]`
    
//     **Expected Output:** `7`

// let array = [7, 2, 9, 4, 9, 5];
// let largest = 0;
// let slargest = 0; 

// for(let i =0; i<array.length; i++){
//     if(array[i]>largest){
//         largest = array[i];
//     }
// }
// for(let j =0 ; j<array.length; j++){
//     if(array[j] !== largest && slargest<array[j] ){
//           slargest= array[j]
//     }
// }

// console.log(slargest);


// 7. **Question:** Implement binary search on a sorted integer array; return the index of the target or -1 if not found.
    
//     **Input:** Array: `[1, 3, 5, 7, 9]`, Target: `7`
    
//     **Expected Output:** `3`

// let arr = [1, 3, 5, 7, 9];
// let target = 7;
// let left = 0, right = arr.length-1;

// while(left <=right){
//     let mid = Math.floor((left+right)/2);
//     if(arr[mid]===target){
//            console.log(mid);
//            return ;
//     } 
//     if(target<mid){
//         right = mid-1;
//     }
//     else{
//         left = mid + 1;
//     }
// }

// 4. **Question:** Rotate an integer array to the right by *k* positions.
    
//     **Input:** Array: `[1, 2, 3, 4, 5]`, k: `2`
    
//     **Expected Output:** `[4, 5, 1, 2, 3]`

// let arr1 = [1, 2, 3, 4, 5];
// let k = 4;
// let n = arr1.length
// let end = arr1.splice(n-k)
// let final = end.concat(arr1)
// console.log(final);


// 5. **Question:** Merge two sorted integer arrays into one sorted array.
    
//     **Input:** `[1, 3, 5]` and `[2, 4, 6]`
    
//     **Expected Output:** `[1, 2, 3, 4, 5, 6]`

// let arr1 = [1, 3, 5, 6, 7 ,8];
// let arr2 = [2, 4, 6,];
// let i =0;
// let j=0; 
// let  arrMgd = [];
// while(i<arr1.length && j < arr2.length){
//     if(arr1[i]<arr2[j]){
//         arrMgd.push(arr1[i]);
//         i++;
//     }
//     else{
//         arrMgd.push(arr2[j]);
//         j++;
//     }

// }

// while(i<arr1.length){
//     arrMgd.push(arr1[i]);
//         i++;
// }

// while(j<arr2.length){
//     arrMgd.push(arr2[j]);
//         j++;
// }


// console.log(arrMgd);


// 3. **Question:** Remove all zeros from an integer array, preserving order.
    
//     **Input:** `[0, 1, 0, 2, 3, 0, 4]`
    
//     **Expected Output:** `[1, 2, 3, 4]`

// let arr = [0, 1, 0, 2, 3, 0, 4];

// for( let i =0; i<arr.length; i++){
//     if(arr[i]==0){
//         arr.splice(i, 1);
//     }
// }
// console.log(arr);

// 9. **Question:** Check if two strings are anagrams of each other.
    
//     **Input:** `"listen"` and `"silent"`
    
//     **Expected Output:** `true`

let str1 = "listen";
let str2 = "silent";


if (str1.length !== str2.length) return false;

const freq = {};

for(let char of str1){
    if(freq[char]){
        freq[char]++
    }
    else{
        freq[char]=1;
    }
}

for(let char of str2){
    if(!freq[char]){
         console.log(false)
         return ;
    }
    freq[char]--
}
console.log(true);
