// Task №1
// Implement a function that reverses the bits in an integer.
//     For example, the number 47 is 110100001 in binary. Reversing the binary is 100001011 which is 267.
//
// Test examples:
//     reverseBits(417) -> 267
// reverseBits(267) -> 417
// reverseBits(0) -> 0
// reverseBits(2017) -> 1087
// reverseBits(1023) -> 1023
// reverseBits(1024) -> 1
// reverseBits(Number.MAX_SAFE_INTEGER) -> Number.MAX_SAFE_INTEGER

let reverseBits = (num) => {
    return (parseInt([num.toString(2)].reverse().join(''), 2)) ;
};

console.log(reverseBits(417));
console.log(reverseBits(267));
console.log(reverseBits(0));
console.log(reverseBits(2017));
console.log(reverseBits(1023));
console.log(reverseBits(1024));
console.log(reverseBits(Number.MAX_SAFE_INTEGER));
