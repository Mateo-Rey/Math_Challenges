let finalB = 1
function exponent(base,expo) {
    for (let i = 0; i < expo + 1; i++) {
        finalB *= base
    }
    return finalB;
    }

console.log(exponent(10,10))


