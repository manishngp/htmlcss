const prompt = require('prompt-sync')();


let ans = prompt("input number")

// for(let i=0; i<ans; i++){
//     for(let j=0; j<ans; j++){
//         process.stdout.write("* ")
//     }
//     console.log();
// }



// for(let i=0; i<ans; i++){
//     for(let j=0; j<=i; j++){
//         process.stdout.write("* ")
//     }
//     console.log();
// }



// for(let i=0; i<ans; i++){
//     for(let j=ans-1; j>i; j--){
//         process.stdout.write("  ")
//     }
//      for(let j=0; j<=i; j++){
//         process.stdout.write("* ")
//     }
//     console.log();
// }


// for(let i=0; i<ans; i++){
//     for(let j=0; j<ans; j++){
//         if(j===i || j+i===4){
//         process.stdout.write("* ")
//         }
//         else{
//            process.stdout.write(" ") 
//         }
//     }
//     console.log();
// }


// for(let i=0; i<ans; i++){
//     for(let j=0; j<ans*2; j++){
//         if(j===i || j+i===ans*2-2){
//         process.stdout.write("* ")
//         }
//         else{
//            process.stdout.write(" ") 
//         }
//     }
//     console.log();
// }


for(let i=0; i<ans; i++){
    for(let j=0; j<ans; j++){
        if(i===0 ||  j==0 ||  i===ans-1 || j===ans-1){
        process.stdout.write("* ")
        }
        else{
           process.stdout.write("  ") 
        }
    }
    console.log();
}

