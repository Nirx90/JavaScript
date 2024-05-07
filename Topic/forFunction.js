// for each function

let ar1 = [1,2,3,"four",5,6,7,8,9,10]

ar1.forEach((Element)=>{
    console.log(Element)
})
1
2
3
four
5
6
7
8
9
10

ar1.forEach((element,index)=>{
    console.log(index,"-",element)
})

0 - 1
1 - 2
2 - 3
3 - four
4 - 5
5 - 6
6 - 7
7 - 8
8 - 9
9 - 10

// for of function
// let ar1 = [1,2,3,"four",5,6,7,8,9,10]

for(let element of ar1){
    console.log(element)
}

// for in function

// let ar1 = {'1':'one','2':'two','3':'three'}

// for(let key in ar1){
//     console.log(key,ar1[key])
// }

// 1 one
// 2 two
// 3 three