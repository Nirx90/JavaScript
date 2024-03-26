// 1. Write a JavaScript function that reverse a number.
// Example x = 32243;
// Expected Output : 34223

// function reverse(){
//     let x = 32243;
//     let result = 0;
//     // while(x != 0){
//     //    result = result * 10 + parseInt(x%10);
//     //    x = parseInt(x/10);
//     // }
//     while(x != 0){
//        result = result * 10 + ~~(x%10);
//        x = ~~(x/10);
//     }
//     return result;
// }
// console.log(reverse());

// 2. Write a JavaScript function that checks whether a passed string is palindrome or not?
// A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g.,
// madam or nurses run.

// function q2(str){
//     let pal = "";
//     for(let i=str.length;i>=0;i--){
//         pal += str.charAt(i);
//     }
//     if(str === pal){
//         console.log("yes Palindrom")
//     }
//     else{
//         console.log("Not Palindrom")
//     }
// }
// q2("woodoow");


// 3. Write a JavaScript function that generates all combinations of a string.
// Example string : 'dog'
// Expected Output : d,do,dog,o,og,g

// function q3(str){
    
//     for(let i=0;i<str.length;i++){
//         let pos="";
//         for(let j=i;j<str.length;j++){
//             pos += str.charAt(j);
//             console.log(pos);
//         } 
//     }
// }
// q3("dog");

// 4. Write a JavaScript function that returns a passed string with letters in alphabetical order.
// Assume punctuation and numbers symbols are not included in the passed string.
// Example string : 'webmaster'
// Expected Output : 'abeemrstw'

// function q4(str){
//     let tp = "";
//     let arr = str.split("");
//     for(let i=0;i<arr.length;i++){
//         for(let j=i+1;j<arr.length;j++){
//             if(arr[i]> arr[j]){
//                 temp = arr[i];
//                 arr[i] = arr[j];
//                 arr[j] = temp;
//             }
//         }
//         tp = tp + arr[i];
//     }
//     return tp;
// }
// console.log(q4("webmaster"));



// 5. Write a JavaScript function that accepts a string as a parameter and converts the first
// letter of each word of the string in upper case.
// Example string : 'the quick brown fox'
// Expected Output : 'The Quick Brown Fox '

// function f5(str){
//     let arr = str.split(" ");
//     let line = "";
//     for(let i=0;i<arr.length;i++){
//         arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
//         line = line + arr[i] +" ";
//     }
//     return line;
// }
// console.log(f5("the quick brown fox"));

// 6. Write a JavaScript function that accepts a string as a parameter and find the longest word
// within the string.
// Example string : 'Web Development Tutorial'
// Expected Output : 'Development'

// function f6(line){
//     let arr = line.split(" ");
//     let max = arr[0];
//     for(let i=0;i<arr.length;i++){
//         if(max.length < arr[i].length){
//             max = arr[i];
//         }
//     }
//     return max;
// }
// console.log(f6('Web Development Tutorial'));

// 7. Write a JavaScript function that accepts a string as a parameter and counts the number of
// vowels within the string.

// function f7(str){
//     let arr = str.split("");
//     let ch = ['a','e','i','o','u','A','E','I','O','U'];
//     let count = 0;
//     for(let i=0;i<arr.length;i++){
//         for(let j=0;j<ch.length;j++){
//             if(arr[i] == ch[j]){
//                 count++;
//             }
//         }  
//     }
//     return count;
// }
// console.log(f7("Nirav"));


// 8. Write a JavaScript function that accepts a number as a parameter and check the number
// is prime or not.

// function f8(num){
//     let b = true;
//     for(let i=2;i<num;i++){
//         if(num%i==0){
//             b = false;
//         }
//     }
//     if(b){
//         console.log("Yes prime");
//     }
//     else{
//         console.log("Not prime");
//     }
// }
// f8(31);

// 9. Write a JavaScript function which accepts an argument and returns the type.

// function f9(type){
//     return typeof(type);
// }

// console.log(f9(true));

// 10. Write a JavaScript function which returns the n rows by n columns identity matrix.

// function f10(n){
//     for(let i=0;i<n;i++){
//         for(let j=0;j<n;j++){
//             if(i==j){
//                 console.log(0+" ");
//             }
//             else{
//                 console.log(1+" ");
//             }
//         }
//     }
// }
// f10(5)

// 11. Write a JavaScript function which will take an array of numbers stored and find the
// second lowest and second greatest numbers, respectively.

// function f11(ar){
//     for(let i=0;i<ar.length;i++){
//         for(let j=i+1;j<ar.length;j++){
//             if(ar[i]> ar[j]){
//                 temp = ar[i];
//                 ar[i] = ar[j];
//                 ar[j] = temp;
//             }
//         }
//     }
//     console.log("second lowest "+ar[1]);
//     console.log("second largest "+ar[ar.length-2]);
// }
// f11([4,7,2,8,5,9,21]);

// 12. Write a JavaScript function which says whether a number is perfect.
// Example : The first perfect number is 6, because 1, 2, and 3 are its proper positive divisors,
// and 1 + 2 + 3 = 6. Equivalently, the number 6 is equal to half the sum of all its positive
// divisors: ( 1 + 2 + 3 + 6 ) / 2 = 6. The next perfect number is 28 = 1 + 2 + 4 + 7 + 14. This is
// followed by the perfect numbers 496 and 8128.

// function f12(num){
//     let arm = 0;
//     for(let i=0;i<num;i++){
//         if(num%i==0){
//             arm += i;
//         }
//     }
//     if(num == arm){
//         console.log(num+" is armstrong");
//     }
//     else{
//         console.log(num+" not armstrong");
//     }
// }
// f12(8128);

// 13. Write a JavaScript function to compute the factors of a positive integer.

// function f13(num){
//     for(let i=0;i<=num;i++){
//         if(num%i==0){
//             console.log(i);
//         }
//     }
// }
// f13(8);

// 14. Write a JavaScript function to convert an amount to coins.
// Sample function : amountTocoins(46, [25, 10, 5, 2, 1])
// Here 46 is the amount. and 25, 10, 5, 2, 1 are coins.
// Output : 25, 10, 10, 1.

// function f14(amount,ar){
//     if(amount == 0){
//         return null;
//     }
//     let tar = [];
//     amt = 0;
//     x = amount;
//     for(let i=0;i<ar.length;i++){
//         temp = ar[i];
//         while(temp <= x){
//             tar.push(ar[i]);
//             amt += ar[i];
//             temp += ar[i];
//         }
//         if(amt == amount){
//             return tar;
//         }
//         if(ar[i] < x){
//             x = amount - amt;
//         }
//     }
// }
// console.log(f14(76, [25, 10, 5, 2, 1]));

// 15. Write a JavaScript function to compute the value of bn where n is the exponent and b is
// the bases. Accept b and n from the user and display the result.

// function f15(b,n){
//     let a = 1;
//     for(let i=0;i<n;i++){
//         a = a * b;
//     }
//     console.log(a);
// }
// f15(2,5);


// 16. Write a JavaScript function to extract unique characters from a string.
// Example string : "thequickbrownfoxjumpsoverthelazydog"
// Expected Output : "thequickbrownfxjmpsvlazydg"

// function f16(str){
//     let ar = str.split("");
//     let temp = "";
//     for(let i=0;i<ar.length;i++){
//         let u = 0;
//         for(let j =0;j<ar.length;j++){
//             if(ar[i] == ar[j]){
//                 u++;
//             }
//         }
//         if(u == 0 || u==1){
//             temp += ar[i];
//         }
//     }
//     console.log(temp);
// }
// f16("thequickbrownfoxjumpsoverthelazydog");

// function f16(str){
//     let ar = str.split("");
//     let temp = "";
//     for(let i=0;i<ar.length;i++){
//         ch = str.charAt(i);
//         if(temp.includes(ch)){
//             continue;
//         }
//         else{
//             temp += ch;
//         }
//     }
//     console.log(temp);
// }
// f16("thequickbrownfoxjumpsoverthelazydog");

// 17. Write a JavaScript function to get the number of occurrences of each letter in specified
// string.

// function f17(str){
//     let ar = str.split("");
//     let tp = "";
//     for(let i=0;i<ar.length;i++){
//         let count = 1;
//         for(let j=i+1;j<ar.length;j++){
//             if(ar[i] == ar[j]){
//                 count++;
//             }
//         }
//         console.log(ar[i]+" "+count+" time")
//     }
// }
// f17("shakshi");

// 18. Write a function for searching JavaScript arrays with a binary search.
// Note : A binary search searches by splitting an array into smaller and smaller chunks until it
// finds the desired value.

// function f18(ar,low,high){
//     let data = 79;
//     while(low <= high){
//         mid = ~~((low + high)/2);
//         if(ar[mid]==data){
//             return data;
//         }
//         else if(data<ar[mid]){
//             return f18(ar,low,mid-1);
//         }
//         else{
//             return f18(ar,mid+1,high);
//         }
//     }
//     return null;
// }
// let ar = [3,4,6,9,18,28,50,78];
// let low = 0;
// let high = ar.length;
// console.log(f18(ar,low,high));


// 19. Write a JavaScript function that returns array elements larger than a number.

// function f19(elem){
//     let ar = [65, 16, 0, 6, 64, 1, 68];
//     let result = [];
//     let k=0;
//     for(let i=0;i<ar.length;i++){
//         if(ar[i] > elem){
//             result[k] = ar[i];
//             k++;
//         }
//     }
//     return result;
// }
// console.log(f19(16));

// 20. Write a JavaScript function that generates a string id (specified length) of random
// characters.
// Sample character list :
// "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"

// function generateString(size) {
//     let characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//     let result = "";
//     const len = characters.length;
//     for ( let i = 0; i < size; i++ ) {
//         result += characters.charAt(Math.floor(Math.random() * len));
//     }
//     return result;
// }

// console.log(generateString(8));


// 21. Write a JavaScript function to get all possible subset with a fixed length (for example 2)
// combinations in an array.
// Sample array : [1, 2, 3] and subset length is 2
// Expected output : [[2, 1], [3, 1], [3, 2], [3, 2, 1]]

// function f21(ar){
    
//     let k = [];
//     n=2;
//     for(let i=0;i<ar.length;i++){
//         let sub = [];
//         for(let j=i;j<n;j++){
//             sub.push(ar[j]);
//         }
//         k.push(sub);
//     }
//     return k;
// }
// console.log(f21([1,2,3]));

// 22. Write a JavaScript function that accepts two arguments, a string and a letter and the
// function will count the number of occurrences of the specified letter within the string.

// function f23(str,char){
//     let arr = str.split("");
//     let count=0;
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]==char){
//             count++;
//         }
//     }
//     console.log(char+" is occure "+count+" time")
// }
// f23("bubble",'e');

// 23. Write a JavaScript function to find the first not repeated character.
// Sample arguments : 'abacddbec'
// Expected output : 'e'

// function f23(str){
//     let ar = str.split("");
//     for(let i=0;i<ar.length;i++){
//         let store = 0;
//         for(let j = 0;j<ar.length;j++){
//             if(ar[i]==ar[j]){
//                 store ++;   
//             }
//         }
//         if(store == 1){
//             return ar[i];
//         }
//     }
// }
// console.log(f23('abacddbec'));


// 24. Write a JavaScript function to apply Bubble Sort algorithm.
// Note : According to wikipedia "Bubble sort, sometimes referred to as sinking sort, is a simple
// sorting algorithm that works by repeatedly stepping through the list to be sorted, comparing
// each pair of adjacent items and swapping them if they are in the wrong order".
// Sample array : [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]
// Expected output : [3223, 546, 455, 345, 234, 213, 122, 98, 84, 64, 23, 12, 9, 4, 1]

// let ar = [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213];
// function bubble(ar){
//     n = ar.length;
//     for(let i=0;i<n;i++){
//         for(let j=0;j<n-1-i;j++){
//             if(ar[j]<ar[j+1]){
//                 temp = ar[j+1];
//                 ar[j+1] = ar[j];
//                 ar[j] = temp;
//             }
//         }
//     }

//     for(let i=0;i<ar.length;i++){
//         console.log(ar[i]);
//     }
// }
// bubble(ar);

// 25. Write a JavaScript function that accept a list of country names as input and returns the
// longest country name as output.
// Sample function : Longest_Country_Name(["Australia", "Germany", "United States of
// America"])
// Expected output : "United States of America"

// function f25(strArray){
//     let max = strArray[0];
//     for(let i=1;i<strArray.length;i++){
//         if(max.length < strArray[i].length){
//             max = strArray[i];
//         }
//     }
//     return max;
// }
// console.log(f25(["Australia", "Germany", "United States of America"]));

// 26. Write a JavaScript function to find a substring in a given a string without repeating
// characters.

// function f26(str){
//     let ar = str.split("");
//     let temp = "";
//     for(let i=0;i<ar.length;i++){
//         ch = str.charAt(i);
//         if(temp.includes(ch)){
//             continue;
//         }
//         else{
//             temp += ch;
//         }
//     }
//     return temp;
// }
// console.log(f26("characters"));

// 27. Write a JavaScript function that returns the longest palindrome in a given string.

// function check(str){
//     let temp = "";
//     for(let i=str.length;i>=0;i--){
//         temp += str.charAt(i);
//     }
//     if(temp == str){
//         return true;
//     }
// }
// function f27(word){
//     let tempstr = "";
//     for(let i=0;i<word.length;i++){
//         for(let j=word.length;j>i+1;j--){
//             tempstr = word.slice(i,j);
//             let ch = check(tempstr);
//             if(ch == true){
//                 return tempstr;
//             }
//         }
//     }  
// }
// console.log(f27("forgeeksskeegfor"));

// 28. Write a JavaScript program to pass a 'JavaScript function' as parameter.

// function one(){
//     console.log("hello");
// }
// function two(func){
//     return func();
// }
// two(one);

// 29. Write a JavaScript function to get the function name.

// function funcName(){
//     return funcName;
// }
// console.log(funcName());