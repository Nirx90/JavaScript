let ar1 = [5,10,8,130,44]

console.log(ar1.findIndex((elem,idx) => elem>8 ))

console.log(ar1.findIndex((elem,idx) => {console.log(elem)} ))

console.log(
    ar1.findIndex((em,id) =>{
        console.log(id)
    })
)

console.log(
    ar1.findIndex((em,id) =>{
        return em<18
    })
)