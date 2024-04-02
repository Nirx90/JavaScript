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
//Deep copy
