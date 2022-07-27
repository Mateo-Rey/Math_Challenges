function sumOfSquares(n) {
    let map = []
    let res = 0
    for (let i = 0; i < n + 1; i++) {
    if (Math.sqrt(i) % 1 === 0) {
        map.push(i)
    }
}

}


console.log(sumOfSquares(17))