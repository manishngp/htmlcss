let s1 = "manish";
let s2 = "animsh";
if(s1.length !== s2.length){
    console.log(false);
    return;
}

let obj1 = {};
for(let ch in s1){
    if(!obj1[ch]){
        obj1[ch]=0;
    }
    obj1[ch]++;
}

let obj2 = {};
for(let ch in s2){
    if(!obj1[ch]){
        console.log(false);
        return;
    }
     obj1[ch]--
}

// for(let key in obj1){
//     if(obj1[key] !== obj2[key]){
//         console.log(false);
//         return
//     }
// }

console.log(true);


// let a1 = s1.split("").sort().join();
// let a2 = s2.split("").sort().join();
// console.log(s1, s2);
// console.log(a1 === a2);