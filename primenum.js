function isPrime(num) {
    if (num < 2) {
       return false;
    }
  if (num === 2) {
       return true;
    }
    
    const maximumDividor = Math.sqrt(num) + 1;
  for (let i = 2; i < maximumDividor; i++) {
       if (num % i === 0) {
         return false;
       }
    }
  return true;
  }
  
function allPrimesBelow(num) {
for (let i = 0; i < num; i++) {
    if (isPrime(i)) {
        console.log(i)
    }
}
}
allPrimesBelow()