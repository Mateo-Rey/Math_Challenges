function partsSums(ls) {
    let arrayOfSums = [0]; 
    while(ls.length > 0) {
      let sum = ls.reduce((a, b) => a + b);
      arrayOfSums.push(sum);
      ls.shift();
    }
  return arrayOfSums.sort(function (a, b) {
      return a - b});
  }

