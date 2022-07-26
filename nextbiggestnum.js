/*
1. find an index j such that a[j….n - 1] forms a monotonically decreasing sequence.
2. If j == 0 next perm not possible
3. Else 
    1. Reverse the array a[j…n - 1]
    2. Binary search for index of a[j - 1] in a[j….n - 1]
    3. Let i be the returned index
    4. Increment i until a[j - 1] < a[i]
    5. Swap a[j - 1] and a[i]


O(n) for each permutation.
*/
function biggersum(n) {
  let d = n.toString().split("");
  let p = -1;
  for (let i = d.length - 1; i > 0; i--) {
    if (d[i] > d[i - 1]) {
      p = i - 1;
      break;
    }
  }


if (p== -1) return p;

let right = d.splice(p)

let pv = right.splice(0,1)[0];

let mm = null, mmi = null
for (let i = 0; i < right.length; i++) {
    if (right[i] > pv) {
        if (mm == null || right[i] < mm) {
            mm = right[i];
            mmi = i;
        }
    }
}
if (mmi == null) return -1;
let impnum = right.splice(mmi,1);

console.log(right)
right.push(pv);
console.log(right)
right = right.sort()
console.log(d)
let res = ''+ d +''+ impnum + ''+right+''
resfin = res.replace(/,/g, '')

resnum = parseInt(resfin)

if (resnum > n) {
   return resnum;
} else {
    return -1;
}
}


console.log(biggersum(144))
