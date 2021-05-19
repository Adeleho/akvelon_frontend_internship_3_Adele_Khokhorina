// Task №2
// Implement factorial function. (https://en.wikipedia.org/wiki/Factorial)
//
//                                    Test examples:
//     factorial(0) -> 1
// factorial(1) -> 1
// factorial(4) -> 24
// factorial(7) -> 5040
// factorial(17) -> 355687428096000

const factorial = (num) => {
    let fac = (num === 0) ? 0 : 1;
    for (let i = num; i >= 1; i--) {
        fac *= i;
    }
    return `factorial ${num} is ${fac}`;
};

console.log(factorial(0));
console.log(factorial(4));
console.log(factorial(7));
console.log(factorial(17));