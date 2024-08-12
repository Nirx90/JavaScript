// let len = 3;

let prompt = require('prompt-sync')();
// let top = -1;

// let arr = [];

// function push(val){
//     if (top>=len-1){
//         console.log("stack is full")
//     }
//     else{
//         top++;
//         arr[top] = val;
//     }
    
// }

// function pop(val){
//     if (top == -1){
//         console.log("stack is Empty")
//     }
//     else{
//         top--;
//     }
// }

// function print(){
//     for(let i=0;i<=top;i++){
//         console.log(arr[i]);
//     }
// }

// push(45)
// push(45)
// push(45)
// push(86)
// // push(86)
// print()

let len = 3;
let top = -1;

// let usr = parseInt( prompt('enter a value'))
let arr = [];

let inp = 'y';

while(inp == 'y'){
    if(top => len-1){
        console.log('stack is full')
    }
    else{
        let usr = parseInt( prompt('enter a value'))
        top++;
        arr.push(usr)
    }
    

    let yn = prompt('enter y for continue n for exit')
    inp = yn
}

console.log(arr)
