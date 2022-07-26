const isPP = function(n){
    const max = Math.ceil(Math.sqrt(n)); // this gives the highest possible values of either i or j since they can not be over the sqrt of the original number
    console.log(max)
    for (let i = 2; i <= max; i++) {   // i and j have to be over 1 due to 1^1 = 1 
      for (let j = 2; j <= max; j++) {
        if (n === i ** j) { // says is n is equivalent to i raised to j and since both i and j iterate thru the same nums it will search through every possible pair
          return [i, j];
        } 
        if (n < i ** j) { // returns null if not possible due to being less than the num for example 5 only has 2^2 and any other number is over
          break;
        }
      }
    }
    return null;
  }

  console.log(isPP())