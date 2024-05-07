// let ar1=[1,2,3,4]
// console.log(ar1)

let ar1 = [[1,[2]],[[3],[4]]]

console.log(ar1.flat())        //[ 1, [ 2 ], [ 3 ], [ 4 ] ]     by default depth 1
console.log(ar1.flat(1))        //[ 1, [ 2 ], [ 3 ], [ 4 ] ]
console.log(ar1.flat(2))        // [ 1, 2, 3, 4 ]

