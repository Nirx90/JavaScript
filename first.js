// -------------------------------13-03-2024--------------------------------------
// a = 10
// b = 'nirav'
// console.log(a+b)


// -------------------------------14-03-2024--------------------------------------
// datatypes

// console.log(1+2)                 // 3
// console.log(10.0 + 20)           // 30  float does not exist in javascript
// console.log(10.0 + 20.0)         //30 
// console.log(0.1+0.3)              // 0.4
// console.log(0.7+0.3)              // 1 js only contain numbers
// console.log(22/7)                 // 3.142857142857143  js give 15 decimals

// console.log(10 + '10')               // 1010
// console.log('10' + '10')              // 1010 
// console.log(typeof('10' + '10'))      // string
// console.log(+'10')                   // 10    +sing before '10' it consider as number
// console.log(typeof(+ '10'))           // number

// console.log(+'10'+10)                // 20
// console.log(+'10' + + '20')          // 30
// console.log( + '10' + 'K' + '20')        // 10K20  'K' is not consider as number
// console.log(typeof( + '10' + 'H' + '20'))   // string

// console.log(10 + +'H')                 // NaN  not a number

// console.log(typeof(10))                // number
// console.log(typeof('10'))              // string
// console.log(typeof(true))              // boolean
// console.log(typeof(false))              // boolean

// console.log(typeof(0.3))               // number
// console.log(typeof(NaN))               //  number    NaN = not a number
//                                         // but its type of number thats why number

// console.log(typeof(null))               // object

// console.log(typeof(undefined))          // undefiend
// console.log(typeof([]))                 // object     -- array does not exist in js
// console.log(typeof({}))                 // object
// console.log(typeof(function(){}))       // function
// console.log(typeof(1000n))              // bigint
// console.log(typeof(Symbol('h')))        // symbol
// console.log(Symbol('h'))                // symbol(h)


// // -------------------------------18-03-2024--------------------------------------

// // == equality value
// // === equality value + datatype
// console.log("10")                 // 10
// console.log(10 == 10)             // true
// console.log(10 == '10')           // true
// console.log(10 === 10)            // true
// console.log(10 === '10')          // false

// console.log(0.3+0.4 == 0.7)       // true
// console.log(true == 1)            // true
// console.log(true == '1')          // true
// console.log(true === '1')         // false

// console.log(10 + '10' == 10)       // false
// console.log(10 * '10' == 100)       // true
// console.log(10 / 10 == 1)           // true
// console.log(10 / '10' == 1)         // true

// console.log(10 - '10' == 0)         // true
// console.log(10 / '10' === 1)        // true
// console.log(10 / '10' == '1')       // true
// console.log(10 / '10' === '1')      // false

// // relational operator
// console.log(1>2)                // false
// console.log(2>3)                // false
// console.log(1>2>3)              // false
// console.log(1<2<3)              // true

// console.log(2<3)                // true
// console.log(3>2>1)              // false
// console.log(3>2)                // true

// console.log(2>1)                // true
// console.log(3<2<1)              // true
// console.log(3<2)               // false

// console.log(2<1)               // false
// console.log(true == 1)         // true
// console.log(true == '1')        // true

// console.log(true === '1')        // false
// console.log(true === 1)           // false

// -------------------------------19-03-2024--------------------------------------

// let & var
// --> keyword
// --> used for declare variables

// let is introduced in es6

// var a = 10;
// console.log(a);

// console.log(a);   //Cannot access 'a' before initialization


// a = 10;
// console.log(a); 
// var a;

// console.log(a);  // undefiend    after declare var its ok
// var a;

// console.log(a); 
// let a;                 //Cannot access 'a' before initialization
                         // after declare let its error

// let a = 10;
// let a = 20;
// console.log(a);         // Indentifier a is already declared                       

// var a = 10;
// var a = 20;
// console.log(a);           // 20 

// var a = 10;
// {
//     var a = 20;             // both var are same
// }
// console.log(a)             // 20

// let a = 10;                // this let a is different
// {
//     let a = 20;               // this let a is different
//     console.log(a);  //20     // this let a is accesible only inside for scop
// }
// console.log(a) ;         // 10

// let a = 10;                   // this a is global
// {
//     let a = 20;                // this a is local to scop
//     a = a * 2;
//     console.log(a);    //40
// }
// console.log(a);          //10

// var a = 10;                   // var is dose not follow scop rule
// {
//     var a = 20;                
//     a = a * 2;
//     console.log(a);    //40
// }
// console.log(a);     //40


// var a = 10;
// {
//     var a = 20;
//     a = a * 2;
//     {
//         a += 2;
//         console.log(a);     // 42
//     }
//     console.log(a);        //42
// }
// console.log(a);                  //42


// let a = 10;
// {
//     let a = 20;
//     a = a * 2;
//     {   
//         a += 2;
//         console.log(a);     // 42
//     }
//     console.log(a);        //42
// }
// console.log(a);          //10

// -------------------------------20-03-2024--------------------------------------

// Q-1 
// let unit = 350;
// let bill = 0;
// if(unit <= 100){
//     bill = unit * 0.6 
//     console.log(bill + 50);
// }
// else if(unit >100 && unit <= 300){
//     bill = 60 + (unit-100)*0.8
//     console.log(bill + 50)
// }

// else{
//     bill = 60 + 160 + (unit-300) * 0.9
    
//     if (bill > 300){
//         bill = bill + bill*0.15
//         console.log(bill + 50)
//     }
//     else{
//         console.log(bill + 50)
//     }
    
// }

// Q-2

// let sal = 25000;
// let Gsal = 0;
// if(sal < 5000){
//     Gsal = sal * 0.28     
// }

// else if(sal <= 10000){
//     Gsal = 1400 + (sal-5000)*0.42
// }

// else if(sal <= 15000){
//     Gsal = 1400 + 2100 + (sal-10000)*0.55
// }
// else{
//     Gsal = 1400 + 2100 + 2750 + (sal-15000) * 0.7)
// }
// console.log(Gsal)

// Q-3

// let income = 5200;
// let tax = 0;
// if(income < 2500){
//    tax = 0;
// }
// else if(income < 5000){
//     tax = (income-2500) * 0.1
// }
// else if(income <= 10000){
//     tax = 250 + (income - 5000) * 0.2
// }
// else if(income > 10000){
//     tax = 250 + 1000 + (income - 10000) * 0.3
// }
//     console.log("Tax :"+tax);

// Q - 4

// let math = 21;
// let che = 30;
// let phy = 28;

// let total = math + che + phy

// let ave = total / 3

// if ( ave >= 75){
//     console.log("A Greade");
// }
// else if(ave < 75 && ave >= 60){
//     console.log("B Greade");
// }
// else if(ave < 60 && ave >= 45){
//     console.log("C Greade");
// }
// else if(ave < 45 && ave >= 35){
//     console.log("D Greade");
// }
// else{
//     console.log("  falied ");
// }

// Q - 6

// let x = 500;
// let y = 2000;
// if(x < 2000 || x > 3000){
//     console.log(" X ");
// }
// else if(y>100 && y<500){
//     console.log(" Y ");
// }

// -------------------------------21-03-2024--------------------------------------
// functions

// function one(){
//     console.log("Hello world");
// }
// one()

// function one(param1){
//     return param1;
// }
// console.log(one("one"));

// function one(param1,param2,param3){
//     return param1 + param2 + param3
// }
// console.log(one("one","two","three"));            //onetwothree
// console.log(one("one","two","three","four"));     //onetwothree 
// console.log(one("one","two"));                     //onetwoundefiend
// console.log(one("one","two",undefined));          //onetwoundefined
// console.log(one(null,"two",undefined));          //nulltwoundefined
// console.log(one(null," ",undefined));            //null undefined     space as patameter
// console.log(one(null,NaN,null));                //NaN
// console.log(one(10,NaN,12));                    //NaN
// console.log(one(10,21,undefined));              //NaN
// console.log(one(10,undefined,21));              //NaN
// console.log(one(10,null,21));                   //31
// console.log(one(10,21,null));                   //31
// console.log(one('10',null,21));                   //10null21
// console.log(one(10,'21',null));                   //1021null



// -------------------------------22-03-2024--------------------------------------

// function one(){
//     return "Hello"
// }
// function two(){
//     return one()
// }
// console.log(two())      // hello



// function one(){
//     return "Hello"
// }
// function two(){
//     return one                // no bracate means now function two become fn one
// }
// console.log(two())          // [Function: one]
// console.log(two()())        // Hello



// function one(){
//     return "Hello"
// }
// function two(){
//     return one()
// }
// function three(){
//     return two
// }
// console.log(three())             //[Function: two]
// console.log(three()())            // hello


// function one(){
//     return "Hello"
// }
// function two(){
//     return one
// }
// function three(){
//     return two
// }
// console.log(three())             //[Function: two]
// console.log(three()())           //[Function: one]
// console.log(three()()())         //Hello

// --------------------------------- 23-03-2024 ---------------------------------

// -> function as a parameter 

// function one()
// {
//     return "Hello One"
// }
// function two()
// {
//     return "Hello Two"
// }
// function three(param1,param2)
// {
//     console.log(param1(),param2())      // one and two become parameter and after
// }                                       // that breackate () means function called
// three(one,two)

// ------------------------------------------------------------------------------

// -------------------------------27-03-2024--------------------------------------

// Arrays
// index start from zero 0
// symbol = []

let arr = [1,2,'three',4,'5',6,'seven',"8","9",10]

console.log(arr);             //[1,2,'three',4,'5',6,'seven',"8","9",10]
console.log(arr[0]);          // 1
console.log(arr[3]);          // 4
console.log(arr['0']);        // 1       //consider value
console.log(arr['3']);        // 4

console.log(arr[1.5]) ;        // undefined


arr[1.5] = 1.5

console.log(arr[1.5]);          // 1.5       this will store in key value formate
                                //           key is 1.5 and value is 1.5

arr['name'] = 'Nirav';
// console.log(arr[name]);             // name is not defined

console.log(arr['name']);             // "Nirav"

console.log(arr[-1])                 // undefined

arr[-1] = 2.5
console.log(arr[-1])                 // 2.5

console.log(typeof(arr))         // object

console.log(arr.length)           //10 length is property not function

//Defination :- the Array object as with arrays in other programming language
//              enables storing a collection of multiple items under a single
//        variable name, and has member for performing common array operations

// the length data property of an Array instance represents the number of 
// element in that array

// -------------------------------28-03-2024--------------------------------------

// let arr = [1,2,3,4,5,6]

// console.log(arr);

// arr[10] = 11

// console.log(arr);         //  [ 1, 2, 3, 4, 5, 6, <4 empty items>, 11 ]

// console.log(arr[7]) ;       // at 7 position value is empty but valu is undefined
//                            // so result is undefined
// arr[7] = undefined

// console.log(arr);       
// // [ 1, 2, 3, 4, 5, 6, <1 empty item>, undefined, <2 empty items>, 11 ]

// console.log(arr[8] == undefined)          //true
// console.log(arr[8] === undefined)         //true

// arr[7] = null

// console.log(arr)
// //[ 1, 2, 3, 4, 5, 6, <1 empty item>, null, <2 empty items>, 11 ]

// // undefined null NaN

// console.log(undefined == undefined)       //true
// console.log(undefined === undefined)      // true


// console.log(null == null)      // true
// console.log(null === null)      // true


// console.log(NaN === NaN)      // false     
// // becoz NaN is type of number but not number so value is not same
// console.log(NaN === NaN)      // false 
// becoz NaN is type of number but not number so value is not same
// and type is same but value is not same thats why false (===)
// if value and data typer both same than (===) return true

// console.log(undefined == null);      // true
// console.log(undefined === null)      // false


// console.log(undefined === NaN)      // false
// console.log(undefined === NaN)      // false


// console.log(NaN === null)      // false
// console.log(NaN === null)      // false


// the length data property of an Array instance represents the number of 
// element in that array

// -------------------------------30-03-2024--------------------------------------

// push function

// Defination: The push() method of Array instances adds the specified elements
//              to the end of an array and returns the new length of the array.

// syntax
// push()
//push()
//push(elemnt1)
//push(elemnt1,element2)
//push(elemnt1,element2,.....elementN)

//Return value
// The new length property of the object upon which the method was called.

// let ar1=[10,20,30,40,50]
// ar1.push(80)
// console.log(ar1)                  // [ 10, 20, 30, 40, 50, 80 ]
// console.log(ar1.push(120))        // 7 because its returns new length

// ar1.push(21,22,23)
// console.log(ar1)                  // [ 10, 20, 30, 40, 50, 80, 120, 21, 22, 23 ]

//------------------------

// pop function

//Defination : The pop() method of Array instances removes the last element 
//            from an array and returns that element. This method changes
//             the length of the array.

//Return value
// The removed element from the array; undefined if the array is empty.

// let ar1=[10,20,30,40,50]
// ar1.pop()
// console.log(ar1)             //[ 10, 20, 30, 40 ]
// console.log(ar1.pop())      // 40  -- returns last removed value

//------------------------

// shift function

// Defination: The shift() method of Array instances removes the first 
//             element from an array and returns that removed element. 
//              This method changes the length of the array.

//Return value
// The removed element from the array; undefined if the array is empty.


// let ar1=[10,20,30,40,50]
// ar1.shift()
// console.log(ar1)             //[ 20, 30, 40,50 ]
// console.log(ar1.shift())      // 20  -- returns first removed value

//------------------------

// unshift function

// Defination: The unshift() method of Array instances adds the specified 
//             elements to the beginning of an array and returns the new 
//             length of the array.

//syntax
//unshift()
//unshift(element1)
//unshift(element1,element2)
//unshift(element1,element2,......,elementN)

//Return value
// The new length property of the object upon which the method was called.

// let ar1=[10,20,30,40,50]
// ar1.unshift()
// console.log(ar1.unshift())    // 5 -- returns new lenght (no element so new lenght is same as old)        
// console.log(ar1)             //[ 10,20, 30, 40,50 ]

// ar1.unshift(26)
// console.log(ar1)             //[26,10,20, 30, 40,50 ]
// console.log(ar1.unshift(211))      // 7  -- returns new lenght

// ar1.unshift(26,45,23)
// console.log(ar1)             // [ 26, 45, 23, 211, 26, 10, 20, 30, 40, 50 ]

//------------------------

//Defination : The splice() method of Array instances changes the contents of 
//             an array by removing or replacing existing elements and/or 
//             adding new elements in place.

//syntax
//splice()
//splice(start)
//splice(start,deletcount)
//splice(start,deletcount,item1)
//splice(start,deletcount,item1,item2)
//splice(start,deletcount,item1,item2,......itemN)

//Return value
//An array containing the deleted elements.
//If only one element is removed, an array of one element is returned.
//If no elements are removed, an empty array is returned.

// let ar1 = [10,20,30,40,50,60,70,80,90,100]

// console.log(ar1.splice())                    //[]
// console.log(ar1.splice(5))                   //[ 60, 70, 80, 90, 100 ]
// console.log(ar1.splice(5,2))                 //[ 60, 70 ]
// console.log(ar1.splice(5,2,600,700,800))        //[ 60, 70 ]

// console.log(ar1)                           
//  [ 10, 20, 30, 40, 50, 600, 700, 800, 80, 90, 100 ]

// console.log(ar1.splice(0))                    
// [ 10, 20, 30, 40, 50, 60, 70, 80, 90, 100 ]

// console.log(ar1)                              //[]  


// console.log(ar1.splice(0,1))                   // [10]

// console.log(ar1.splice(7))                   // [80,90,100]

// console.log(ar1.splice(2,15))    
// //[ 30, 40, 50, 60, 70, 80, 90, 100 ]

// console.log(ar1)                          //  [10,20]

//  0    1    2    3    4    5    6    7    8     9
//  10   20   30   40   50   60   70   80   90   100
// -10   -9   -8   -7   -6   -5   -4   -3   -2    -1

// console.log(ar1.splice(-3))                 // [80,90,100]
// console.log(ar1.splice(-5,2))                 // [60,70]
// console.log(ar1.splice(-1,9))                 // [100]
// console.log(ar1.splice(-5,5))                 // [60,70,80,90,100]

// console.log(ar1.splice(-3,3,300))       
// console.log(ar1)                           
// [ 10, 20, 30, 40, 50, 60, 70, 300 ]

// console.log(ar1.splice(-5,3,300,200))                 // [80,90,100]
// console.log(ar1)          
//[ 10, 20, 30, 40, 50, 300, 200, 90, 100 ]              


//------------------------
//slice function

// Defination: The slice() method of Array instances returns a shallow copy of 
//             a portion of an array into a new array object selected from
//              start to end (end not included) where start and end represent
//              the index of items in that array. The original array will not
//              be modified.


//Syntax
//slice()
//slice(start)
//slice(start, end)

// let ar1 = [ 10, 20, 30, 40, 50, 60, 70, 80, 90, 100 ]

//  0    1    2    3    4    5    6    7    8     9
//  10   20   30   40   50   60   70   80   90   100
// -10   -9   -8   -7   -6   -5   -4   -3   -2    -1

//slice does not incluede last index
// always from left to right --->

// console.log(ar1.slice(5))            //[ 60, 70, 80, 80, 90, 100 ]
// console.log(ar1)                   // 10, 20, 30, 40, 50, 60, 70, 80, 80, 90, 100 ]

// console.log(ar1.slice(1,6))            // [20, 30, 40, 50, 60 ]

// console.log(ar1.slice(-6))            // [ 60, 70, 80, 80, 90, 100 ]
// console.log(ar1.slice(-3,-6))            // []
// console.log(ar1.slice(-6,9))            // [ 50, 60, 70, 80, 90 ]

// console.log(ar1.slice(-3,15))            // [ 80, 90, 100 ]

// console.log(ar1.slice(3,-4))            // [ 40, 50, 60 ]

// console.log(ar1.slice(-5,3))            // []


//------------------------
//Deep copy

// let ar1 = [10,20,30,40]
// let ar2 = ar1
// ar2.push(90)                        //when we change into ar 2 but 
//                                     // becaause of deep copy it will also change to ar1
// console.log(ar1)                //[ 10, 20, 30, 40, 90 ]
// console.log(ar2)                //[ 10, 20, 30, 40, 90 ]


//------------------------
//shallow copy

// let ar1 = [10,20,30,40]
// let ar2 = ar1.slice()
// ar2.push(90)                        //when we change into ar 2 only change  
//                                     // into ar2 because shallow copy
// console.log(ar1)                //[ 10, 20, 30, 40 ]
// console.log(ar2)                 //[ 10, 20, 30, 40, 90 ]

// -------------------------------02-04-2024--------------------------------------
// spread operator

// let ar1 = [10,20,30,40]
// let ar2 = [50,70,80,90]

// let ar3;
// console.log([ar1,ar2])          //[ [ 10, 20, 30, 40 ], [ 50, 70, 80, 90 ] ]
// console.log([...ar1,...ar2])    //[ 10, 20, 30, 40, 50, 70, 80, 90 ]

// ar3 = [...ar1]
// console.log(ar3)               //[ 10, 20, 30, 40 ]

// ar3 = [50,...ar1]
// console.log(ar3)               //[ 50, 10, 20, 30, 40 ]

// ar3 = [...ar1,50]
// console.log(ar3)               //[ 10, 20, 30, 40, 50 ]

// ar3 = [...ar1,...ar2]
// console.log(ar3)           //[ 10, 20, 30, 40, 50, 70, 80, 90 ]


// let ar1 = [10,20,30,40]
// let ar2 = [50,70,80,90]

// let ar3 = [...ar1]
// ar3.push(12)
// console.log(ar3)             //[ 10, 20, 30, 40, 12 ]

// reverse function
// let str1 = [50,70,80,90]
// let str2 = str1.reverse()
// console.log(str2)                       //[ 90, 80, 70, 50 ]
// console.log(str1.reverse())          //[ 90, 80, 70, 50 ]

//
// -------------------------------03-04-2024--------------------------------------

// Functions
//1) Named Function
//2) Anonymus Function
//3) rest parameter in Function
//4) default parameter in Function
//5) optional parameter in Function
//6) generators Function
//7) constructor Function
//8) IIFE Function

// Anonymus Function

// let/var/const = variable-name () => {
//     function body
// }

// //calling function by variable name
// variable-name()

//examples

// let fun_one = ()  => {
//     return "test"
// }
// console.log(fun_one)                 //[Function: fun_one]
// console.log(fun_one())                // test

// one liner aerow function in anonymus function

// let fun_one = () => "hello"
// console.log(fun_one())                 // hello

// this is one liner function which is used when onely one this need to returns

// let fun_one = (arg1) => arg1
// console.log(fun_one("Ginni"))           // Ginni

// let fun_one = (arg1,arg2) => arg1+arg2
// console.log(fun_one(10,30))                 // 40

// -------------------------------05-04-2024--------------------------------------

// Anonymus function
// Ex 1)

// let fun_one = () => {
//     return () =>{    
//     }
// }             
// console.log(fun_one())                // [Function (anonymous)]
// console.log(fun_one()())                // undefine

// Ex 2)

// let fun_one = () => {
//     return () =>{ 
//         console.log("HII Nirav")   
//     }
// }             
// // console.log(fun_one())                // [Function (anonymous)]
// // fun_one()()                           // Hii Nirav
// console.log(fun_one()())                // undefined coz inside function return nothing

// Ex 3)

// let fun_one = () => {
//     return () =>{ 
//         return () =>{ 
//            return "Hii Parth"
//         }
//     }
// }             

// console.log(fun_one())                  // [Function (anonymous)]
// console.log(fun_one()())                 // [Function (anonymous)] 
// console.log(fun_one()()())               // Hii Parth 


// Anonymus function as a parameter

// Ex 1)

// let fun_one = (arg1) => {
//     console.log(arg1)                      //[Function (anonymous)]
//     console.log(arg1())                      //param1 
// }
// fun_one(()=> "param1")   


// Ex 2)

// let fun_one = (arg1) => {
//     console.log(arg1)                      //[Function: fun_param]
//     console.log(arg1())                      //FaceBook 
// }
// function fun_param(){
//     return "FaceBook"
// }
// fun_one(fun_param) 

// Ex 3)
// let fun_one = (arg1,arg2,arg3) => {
//     console.log(arg1,arg2,arg3)     
//    // [Function (anonymous)] [Function (anonymous)] [Function (anonymous)]                
//     console.log(arg1(),arg2(),arg3())                //param1 param2 param3  
    
// }
// fun_one(()=> "param1",()=> "param2",()=> "param3") 

// Default parameter function

// function one(arg1,arg2,arg3){
//     console.log(arg1,arg2,arg3)        //undefined undefined undefined
// }
// one()

// function one(arg1,arg2,arg3="zero"){
//     console.log(arg1,arg2,arg3)        //one two zero
// }
// one("one","two")

// function one(arg1="one",arg2,arg3="Three"){
//     console.log(arg1,arg2,arg3)        //one undefined Three
// }
// one()


// -------------------------------08-04-2024--------------------------------------

// Rest Parameter in function
// position of spread argument is always occure in last

//ex 1)

// function fun_one(...arg1){
//     console.log(arg1)                       // [ 'hello1' ]
//     console.log(typeof(arg1))              // object
// }

// fun_one("hello1")

//ex 2)

// function fun_one(arg1,...arg2){
//     console.log(arg1,arg2)                    // Nirav [ 'shakshi', 'Parth' ]

// }

// fun_one("Nirav","shakshi","Parth")

//ex 3)

// function fun_one(arg1,arg2="Fine",...arg3){
//     console.log(arg1,arg2,arg3)                   // Hello1 Fine [ 'Hello2', 'Hello3', 'Hello4' ]
// }
// fun_one("Hello1",undefined,"Hello2","Hello3","Hello4")


// IIFE function
// Immidiate Invokable Function Expression

// Syntax (()=>{}())
//ex 1)

// ((arg1)=>{
//     console.log(arg1)            //hello1
// })("hello1")

//ex 2)

// ((arg1,arg2,arg3)=>{
//     console.log(arg1,arg2,arg3)            //hello1 hello2 hello3
// })("hello1","hello2","hello3")

//ex 3)

// ((arg1,arg2)=>{
//     console.log(arg1,arg2)                  //[Function (anonymous)] Shakshi
// })(()=>"Hii Niroo","Shakshi")

//ex 4)

// ((arg1,arg2)=>{
//     console.log(arg1(),arg2)                  //Hii Niroo Shakshi
// })(()=>{return "Hii Niroo"},"Shakshi")

//ex 5)

// ((arg1,arg2)=>{
//     console.log(arg1(),arg2)                  //anonFunc hello1
// })(
//     ()=> "anonFunc",
//     "hello1"
// )
