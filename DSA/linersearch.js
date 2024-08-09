x = 78;
let ar = [12,34,23,11,56,78]
let k = 0
for(let i=0;i<ar.length;i++){
    if(ar[i]==x){
        k++;
        console.log('present on index no: '+i);
    }
}

if(k == 0){
    console.log('not found')
}
