

function isPrime(n){
    if(n<=1)return false;
    if(n===2)return true;
    if(n%2==0)return false;

for(let i=3; i<=Math.floor(n/2); i++){
    if(n%i==0) return false
}
  return true;
}

console.log(isPrime(11));