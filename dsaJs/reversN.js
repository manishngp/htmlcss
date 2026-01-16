let N = 512;
let s = ""
while(N>0){
  s = s+ (N%10);
  N = Math.floor(N/10)
//   console.log(s);
//   console.log(N);
}
console.log(Number(s));