// == equality value
// === equality value + datatype
console.log("10")                 // 10
console.log(10 == 10)             // true
console.log(10 == '10')           // true
console.log(10 === 10)            // true
console.log(10 === '10')          // false

console.log(0.3+0.4 == 0.7)       // true
console.log(true == 1)            // true
console.log(true == '1')          // true
console.log(true === '1')         // false

console.log(10 + '10' == 10)       // false
console.log(10 * '10' == 100)       // true
console.log(10 / 10 == 1)           // true
console.log(10 / '10' == 1)         // true

console.log(10 - '10' == 0)         // true
console.log(10 / '10' === 1)        // true
console.log(10 / '10' == '1')       // true
console.log(10 / '10' === '1')      // false

// relational operator
console.log(1>2)                // false
console.log(2>3)                // false
console.log(1>2>3)              // false
console.log(1<2<3)              // true

console.log(2<3)                // true
console.log(3>2>1)              // false
console.log(3>2)                // true

console.log(2>1)                // true
console.log(3<2<1)              // true
console.log(3<2)               // false

console.log(2<1)               // false
console.log(true == 1)         // true
console.log(true == '1')        // true

console.log(true === '1')        // false
console.log(true === 1)           // false