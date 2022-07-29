const target = 7;
let array = [2, 6, 3, 1];

function fastTwoSum(arr, target) {
  let map = {
  };
  let res = []
  for (let i = 0; i < arr.length; i++) {
    let difference = target - arr[i];
    if (map[difference] !== undefined) {
      res.push(arr[map[difference]])
      res.push(arr[i]); // arr[1] + arr[3] = target
    } else {
      map[arr[i]] = i;
    }
  }
  return res;
}

console.log(fastTwoSum(array, target));