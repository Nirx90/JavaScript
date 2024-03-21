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
//     console.log(Gsal)
// }

// else if(sal <= 10000){
//     Gsal = 1400 + (sal-5000)*0.42
//     console.log(Gsal)
// }

// else if(sal <= 15000){
//     Gsal = 1400 + 1600 + (sal-10000)*0.55
//     console.log(Gsal)
// }
// else{
//     Gsal = 1400 + 1600 + 2250 + (sal-15000) * 0.7
//     console.log(Gsal)
// }

// Q-3

// let income = 5200;
// let tax = 0;
// if(income < 2500){
//     console.log("No tax");
// }
// else if(income < 5000){
//     tax = (income-2500) * 0.1
//     console.log("Tax :"+tax);
// }
// else if(income <= 10000){
//     tax = 250 + (income - 5000) * 0.2
//     console.log("Tax :"+tax);
// }
// else if(income > 1000){
//     tax = 250 + 1000 + (income - 10000) * 0.3
//     console.log("Tax :"+tax);
// }

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

function one(param1,param2,param3){
    return param1 + param2 + param3
}
console.log(one("one","two","three"));            //onetwothree
console.log(one("one","two","three","four"));     //onetwothree 
console.log(one("one","two"));                     //onetwoundefiend
console.log(one("one","two",undefined));          //onetwoundefined
console.log(one(null,"two",undefined));          //nulltwoundefined
console.log(one(null," ",undefined));            //null undefined     space as patameter
console.log(one(null,NaN,null));                //NaN
console.log(one(10,NaN,12));                    //NaN
console.log(one(10,21,undefined));              //NaN
console.log(one(10,undefined,21));              //NaN
console.log(one(10,null,21));                   //31
console.log(one(10,21,null));                   //31
console.log(one('10',null,21));                   //10null21
console.log(one(10,'21',null));                   //1021null
