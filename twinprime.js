function isPrime(num) {
  let isPrime = true;
  if (num < 2) {
    isPrime = false;
  }
  if (num === 2) {
    isPrime = true;
  }

  const maximumDividor = Math.sqrt(num) + 1;
  for (let i = 2; i < maximumDividor; i++) {
    if (num % i === 0) {
      isPrime = false;
    }
  }
  return isPrime;
}
function isTwinPrime(num) {
  let res = false;
  if (isPrime(num)) {
    (num) => {
      if (isPrime(num - 2) || isPrime(num + 2)) {
       return res = true;
      } else {
        return res;
      }
    };
    return res;
  }
}
console.log(isTwinPrime(5));
