// -------------------------------13-03-2024--------------------------------------
a = 10
b = 'nirav'
console.log(a+b)


// -------------------------------14-03-2024--------------------------------------
// datatypes

console.log(1+2)                 // 3
console.log(10.0 + 20)           // 30  float does not exist in javascript
console.log(10.0 + 20.0)         //30 
console.log(0.1+0.3)              // 0.4
console.log(0.7+0.3)              // 1 js only contain numbers
console.log(22/7)                 // 3.142857142857143  js give 15 decimals

console.log(10 + '10')               // 1010
console.log('10' + '10')              // 1010 
console.log(typeof('10' + '10'))      // string
console.log(+'10')                   // 10    +sing before '10' it consider as number
console.log(typeof(+ '10'))           // number

console.log(+'10'+10)                // 20
console.log(+'10' + + '20')          // 30
console.log( + '10' + 'K' + '20')        // 10K20  'K' is not consider as number
console.log(typeof( + '10' + 'H' + '20'))   // string

console.log(10 + +'H')                 // NaN  not a number

console.log(typeof(10))                // number
console.log(typeof('10'))              // string
console.log(typeof(true))              // boolean
console.log(typeof(false))              // boolean

console.log(typeof(0.3))               // number
console.log(typeof(NaN))               //  number    NaN = not a number
                                        // but its type of number thats why number

console.log(typeof(null))               // object

console.log(typeof(undefined))          // undefiend
console.log(typeof([]))                 // object     -- array does not exist in js
console.log(typeof({}))                 // object
console.log(typeof(function(){}))       // function
console.log(typeof(1000n))              // bigint
console.log(typeof(Symbol('h')))        // symbol
console.log(Symbol('h'))                // symbol(h)


// -------------------------------18-03-2024--------------------------------------

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
