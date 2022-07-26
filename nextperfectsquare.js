function findnxtsqr(val) {
    if (Number.isInteger(Math.sqrt(val)) == true){
   let newval = Math.sqrt(val) + 1
   console.log(newval)
   return Math.floor(Math.pow(newval, 2));
} else {
    return -1;
}
}
console.log(findnxtsqr(10000))
