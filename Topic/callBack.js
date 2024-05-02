function add(num,callBack){
    return callBack(num+5)
}
function sub(num,callBack){
    return callBack(num-2)
}
function mul(num,callBack){
    return callBack(num*5)
}
function div(num,callBack){
    return callBack(num/2)
}

add(5,(addRes)=>{
    console.log(addRes)
    sub(addRes,(subRes)=>{
        console.log(subRes)
        mul(subRes,(mulRes)=>{
            console.log(mulRes)
            div(mulRes,(divRes)=>{
                console.log(divRes)
            })
        })
    })
})
