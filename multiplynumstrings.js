function multiply(a, b) {
    let num1 = BigInt(a)
    let num2 = BigInt(b)
    console.log(num2)
    let res = num1 * num2
    console.log(res)
    return res.toString(10);
}

console.log(multiply("30", "69")) 