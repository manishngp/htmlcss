let num = 12345;
let sum =0;

// while(num>0){
//     sum += num%10;
//     num = Math.floor(num/10);
// }
// console.log(sum);


while(num>0){
    rev= (num%10); //5 , 4 ,3, 2, 1
    sum = sum *10 +rev //0*10 +5 = 6, 5*10 +4 =54, 54*10 +3 =543 ,543*10 +2=5432 , 5432*10+1=54321 
    num = Math.floor(num/10);// 4321, 321, 21, 1 ,0
}
console.log(sum);