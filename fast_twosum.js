const target = 7;
let array = [2, 6, 3, 1];

function fastTwoSum(arr, target) {
  let map = {
  };

  for (let i = 0; i < arr.length; i++) {
    let difference = target - arr[i];
    if (map[difference] !== undefined) {
      console.log(arr[map[difference]], "+", arr[i], "=", target); // arr[1] + arr[3] = target
    } else {
      map[arr[i]] = i;
    }
  }
}

fastTwoSum(array, target);