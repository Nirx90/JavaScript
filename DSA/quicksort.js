let arr = [26,8,12,45,36,79,11]

function quicksort (arr){
    if (arr.length <= 1) return arr; 
    let pivot = arr[0];
    let left = [];
    let right = [];
    let middle = [];
    
    for (let i = 0; i < arr.length; i++) {
        if(arr[i]<pivot){
            left.push(arr[i]);
        }else if(arr[i]>pivot){
            right.push(arr[i]);
        }
        else{
            middle.push(arr[i]);
        }
    }

    return quicksort(left).concat(middle,quicksort(right));
}

let res = quicksort(arr);
console.log(res)