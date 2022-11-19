// let A=10;
// var B='bhushan';
// var c: number= 10.30;
// var d: string='R';
// var e: boolean= true;
// var f= null;
// var g= undefined;
// let a=10;
// let b=20;
// let c=30;
// console.log('hi'+a+b+c);

//Datatypes ES6
// Number
// String
// Boolean
// null
// undefined
// Symbol
// BigInt

//Variables declaration and initialization

// var   => function scope
// let   => block scope => can change value
// const => block scope => can't change value


// function Disp(){
//     var a;
//     console.log("Value of a=",a);
//     a=100;
//     {
//         let b;
//         console.log("Value of b=",b);
//         b=30;
//         console.log("Value of b=",b);
//         let a=20;
//         console.log("Value of a=",a);
//     }
//     console.log("Value of a=",a);
//     // console.log("Value of b=",b);
//     // console.log("Value of a=",a);

// }

// Disp();


// console.log(a);  // undefined
// var a=10;

// console.log(b);  // reference error
// let b=20;

// console.log(c); // reference error
// const c=30;

// let abc=b=200;
// console.log(abc,b);

//IN  BUILT FUNCTIONS

// let a='10';
// console.log(valueOf a)
// console.log(valueOf a)
// console.log(a.valueOf());

// function Disp1(a, b) {      // normal function
// console.log(a,b);
// }

// Disp1(10,29);


// const bb =function Disp2(a, b) {    // function expression
// console.log(a,b);
// }

// bb(10,29);

// const cc =function (a, b) {   // annonymous function
// console.log(a,b);
// }

// cc(10,29);


// const dd = (a, b) => {   // arrow function / flat arrow function
// console.log(a,b);
// }

// dd(10,29);
    
// let a=10,b=20;
// console.log(a++ + ++b);
// console.log(++b + a++);
// console.log(a + b);
// let c=10,d=20;

// console.log(++c + d++);
// console.log(d++ + ++c);
// console.log(c + d);
// let e=10,f=20;

// console.log(e++ + f++);
// console.log(++e + ++f);
// console.log(e + f);

// function A () {
// 	a=100;
// 	return function B(){
//   	console.log(a);
//   }
  
// }

// const BB= A();
// BB();
// var bbb=4000;

// (function () {
//     var bbb=10;
//     console.log(bbb);
// })();
// console.log(bbb);

// function add(a, b, c) {
//     return function add2() {
//       console.log(a+b+c);
//     }
// }
//   function Outer(a) {
//     return function Inner1(b) {
//       return function Inner2(c) {
//         return function Innner3(d) {
//           return function add2() {
//             console.log(a+b+c+d);
//           }
//       };
//     };
//   }
// }
//   Outer(1)(2)(3)(4)();


// console.log("===================================================================");

// function sum(a, b, c) {
//   return a + b + c;
// }

// function curry(func) {

//   return function curried(...args) {
//     if (args.length >= func.length) {
//       return func.apply(this, args);
//     } else {
//       return function(...args2) {
//         return curried.apply(this, args.concat(args2));
//       }
//     }
//   };

// }

// let curriedSum = curry(sum);
// console.log(curriedSum(1)(2)(3) );
// console.log(curriedSum(1, 2, 3));

// console.log("===================================================================");
// function addition (a) {
//   return function (b) {
//     if(b) {
//       return addition(a+b);
//     } else {
//       return a;
//     }

//   }
// }
// console.log(addition(1)(2)(3)(4)(5))


// console.log("closure===============================");

// let a=20;
// const disp = () =>{
//   let b=30;
//   const Inner =() => {
//     let c= 40;
//     const Inner2 =() => {
//       let d=50;
//       console.log(a,b,c,d);
//     }
//     Inner2();
//   }
//   Inner();
// }

// disp();

// var => function scope
// let, const => block scope


// const Outer =()=>{
//   return function Inner() {
//       return function Inner2(){
//         console.log("hello");
//       }
//   }
  
// }

// const AA = Outer();
// console.log(AA);
// const BB = AA();
// console.log(BB);
// BB();


// function Outer(a) {
//   return function Inner(b) {
//     return function Inner2() {
//       console.log('Hello',a,b);
//     }
//   }
// }


// const AA = Outer(10)(20);
// AA();

// closure => accessing parent's properties / variables or function == definition: child function can access outer function's properties knows as closure i.e child can access its lexical scope's properties
// function curring  => function_name()()()()()().....
//it is way of function calling where istead of passing aal parameters to 1 function like f(a,b,b) we are passing it as f(a)(b)(c) or Currying is a transformation of functions that translates a function from callable as f(a, b, c) into callable as f(a)(b)(c). or Currying is the process of taking a function with multiple arguments and turning it into a sequence of functions each with only a single argument."
// recursion of function 

// function ABC();  // hoisting

// ABC();

// const ABC =function (){
//   console.log('Hello');
// };


// Object: it is derived datatype , it is collection of various values or variables

// objects have key-value pair

// const name= `Bhushan`;
// const lastname= 'pawar';


// const detail = {
//   address: 'Pune'
// }; // object literal

// detail.address= 'Dhule';
// detail.name= "Bhushan";
// detail.lastname= "pawar";

// console.log(detail);





//IIFE (Immediately Invoked function expression)


// (
  
//   function (a,b) {
//     let aa= 100;
//     console.log('hello',a,b,aa);
//     return function ABC() {
//       console.log('In abc');
//     }
//   }
// )(12,30)();


// typeof Operator
// let a =10;
// console.log(typeof a);
// let aa ='Rutul';
// console.log(typeof aa);
// let aaa =true;
// console.log(typeof aaa);
// let nullVar = null;
// console.log(typeof nullVar);
// let undefVar = undefined;
// console.log(typeof undefVar);
// let objVar = {  name: 'name' };
// console.log(typeof objVar);
// let arryVar = [10,20,40];
// console.log(typeof arryVar);

// let funcVar= function () {
//   console.log('hello');
// }
// console.log(typeof funcVar);

// let a;
// let b = null;


// console.log(a,b)


// Object creation second method using Object class/ Object constructor

// const a= new Object();

// a.name= 'Bhushan';
// a.lastname ='pawar';
// a["p"]='pune';


// const b = new Object({ name:'bhushan'});
// console.log(a);

// delete a.p;
// console.log(a);


//Higher order function or first class function  => when a function takes another function as a argument or when a function returns another function from itselt then it is known as Higher order function or first class function


// factory function => when a function returns an object then that function is known as Factory function.

// const bb = () => {
//   return {
//     name: 'bhushan',
//     pawar: 'pawar'
//   }
// }

// const a = bb();
// console.log(a);
// delete a.pawar;
// console.log(a);


// function Abc() {
//   this.name= 'Bhushan';
//   this.lname= function () { console.log('pawar');}
// }

// const a = new Abc();
// const b = new Abc();

// console.log(a.name);
// console.log(a.lname());
// a.name = 'Rutul';
// // a.lname ='Dhomse';
// console.log(a.name);
// console.log(a.lname);
// console.log(b.name);
// console.log(b.lname);

// let normalObj = new Object({
//   name: 'bhushan',
//   lname: 'pawar',
//   address: function () { return 'Pune'}
// })

// console.log(normalObj);

// finding the key present or not in object
//Method-1
// if(normalObj.name == undefined) {
//   console.log(' not available');
// } else {
//   console.log(' present');
// }


//Method-2
// if('name' in normalObj) {
//   console.log('present', normalObj.name);
// } else {
//   console.log('not present')
// }


//Method-3
// const result = normalObj.hasOwnProperty('pname');

// console.log(result);



// For-in loop for Object
// for( let i in normalObj) {
//   if(typeof normalObj[i] === 'function' ) {
//     console.log(i + " : " + normalObj[i]())
//   } else {
//     console.log(i + " : " + normalObj[i]);
//   }
// }

// for( let i in normalObj) {

//     console.log( i);
  
// }


// const aa = Object.keys(normalObj);
// console.log(aa);

// const bb = Object.values(normalObj);
// console.log(bb);

// const cc = Object.entries(normalObj);
// console.log(cc);
// for( let i in normalObj) {
    
//     console.log( normalObj[i]);
  
// }




// const obj ={
//     a: 10,
//     b:{
//         c: 30
//     }
//     }
    
//     Object.freeze(obj);
//     obj.a=20;

// console.log(obj);




// }

// const newObj = {}   // object literal
// newObj.a = 20;
// const newObj2 = new Object()    // Object using Object class/ Object constructor 
// newObj2.a=30;
// const newObj3 = new Object()    // Object using Object class/ Object constructor 
// newObj3[a]=40;

// function Abc () {               // Object using function which returns an object
//     return {
//         a: 50,
//         b: function() {
//             return {
//                 c: 60
//             }
//         }
//     }
// }

// const bba = Abc();

// // OR 
// // const Abc = () => {               // Object using function which returns an object using arrow function
// //     return {
// //         a: 50,
// //         b: () => {
// //             return {
// //                 c: 60
// //             }
// //         }
// //     }
// // }

// const bb = Abc();
// const cc = bb.b();
// console.log(cc.c);

// function PQR() {                          // objection creation using construnctor
//     this.a = 100;
//     this.b = function () {
//         return {
//             c: 200
//         }
//     }
// }

// const aaa = new PQR();
// const bbbb = new PQR();
// const cccc = new PQR();
// console.log(aaa.a);

// for in loop 

// for(Ini, condi, inc/dec) 

// const obj = {
//     a: 200,
//     b: 300
// }

// for( let i in obj) {
//     console.log(i+ " : " + obj[i]);
// }

// console.log(obj.a);

// ==================================================================
// Class in javascript => ES5 

// const PQRS = function () {             // when constructor function stored in a variable (i.e it should be anonymous function )then it is called as class
//     this.a = 100;
//     this.b = function () {
//         return {
//             c: 200
//         }
//     }
// }

// const aaaaa = new PQRS();
// console.log(aaaaa.b())


// =========================================================================

// Public and private access of Objet's keys
// const Abc = function () {
//     this.a = 100;           // public key  => accessible from outside only
//     var b = 200;            // private key => not accessible from outside
//     this.c = function () { return b}
// }

// const newObj = new Abc();    // creation of object using class
// console.log(newObj.a);      // accessing key through newly created object
// console.log(newObj.c());      // undefined

// const result = Abc();          // accessing function annonymous function
// // console.log(result);            // printing return value
// // // console.log(result.a);

// console.log(result)

// =========================================================================


//interview question

// // const a = 1000;         // normal variable
// // a =2000;


// const aa = {            // reference variable
//     a: 1000
// }

// aa.a = 20000;

// aa = 2000000

// console.log(aa.a);


// =========================================================================

// prototype

// class Mobile{
//     constructor() {
//         this.name ='Bhushan'
//         this.show = function (){
//             return "Hello"+this.name;
//         }
//     }
//     show2(){
//         return "Hello"+this.name;
//     }
// }

// const aa = new Mobile();

// console.log(aa.show2());
// console.log(aa);

// console.log(Object.show2());


// const fun= function () {
//     this.aaa = 'hbushan'
// }

// fun.prototype.lname ='pawar';
// const sam = new fun();
// console.log(sam.lname)


// const Abc = function () {
//     this.name = 'Bhushan';      //instance members
//     this.lname = 'pawar';
// }


// const aa = new Abc();

// Abc.prototype.address = "pune"; // prototype member

// console.log(aa);
// console.log(Object.keys(aa));   // it always shows instance members

// for( let i in aa) {             // it always shows prototype members
//     console.log(i)
// }
// const normal = 'Hello';
// console.log(Object.getPrototypeOf(normal));

// const normal2 = new String('Hello3');
// console.log(Object.getPrototypeOf(normal2));

// const B2 = [10,20,30];
// console.log(B2);
// console.log(Object.getPrototypeOf(B2));
// console.log(Object.getPrototypeOf(Object.prototype));

// const newArr2 = new Array([10,20,30]);
// console.log(Object.getPrototypeOf(newArr2));


// console.log(aa);
// console.log(aa.address);
// console.log(bb.address);


// const newObj = new Object({ 
//     name: 'Bhushan', 
//     lname: 'pawar', 
// })

// console.log(newObj);


// const newobj2 = {};
// newobj2.name ='Bhushan';
// newobj2.lname= 'pawar';

// console.log(newobj2);


// const aa = {
//     name: 'Bhusan',
//     address: function () {
//         console.log('first')
//     }
// }
// console.log(aa)


// function Mobile() {
//     this.name = 'bhushan'
// }

// const aa  = new Mobile();

// Mobile.prototype.address = 'Pune';
// console.log(Mobile.prototype.address);
// console.log(Object.getPrototypeOf(aa).address);
// console.log(aa.__proto__.address);

// class Mobile1{
//     constructor(){
//         this.name='Bhushan'
//     }
//     disp1() {
//         console.log(this.name);
//     }
// }

// class Mobile2 extends Mobile1{
//     constructor(){
//         super();
//         this.name='Rutul'
//     }
//     disp2() {
//         console.log(this.name);
//     }
// }

// const aa = new Mobile1();
// const bb = new Mobile2();
// bb.disp1();

// console.log(bb.__proto__)
// console.log(Object.getPrototypeOf(bb));

//==============================================================================

//interview Qustions

//1) difference between let , const, var 
//2) what is hoisting
// var c ;                 // declaration of variable
// console.log(c); 
// var c = 10;             // initialization of variable
//3) can function we hoist? if yes then how and if no then why no?
//4) what is closure?     => when inner function have a access of lexical scope of parent one then it is known as Closure
//5) what is function currying and write a code for it.
//6) what is higher order function or first class function?
//7) types of functions ? normal,function expression, annonymous,flat arrow or arrow function 
//8) what is the use of typeof keyword?
//9) what are the ways to create an object?
//10) what is factory function ?
//11) what is arguments object and rest parameter in javascript?
//12) what are the methods of Object class?
//13) what is the diff bet freeze() and seal() methods of Object class?
//14) What is IIFE?
//15) What is TDZ( i.e temporal dead zone) => A temporal dead zone (TDZ) is the area of a block where a variable is inaccessible until the moment the computer completely initializes it with a value.


//Prototype


// const Abc = function () {       // class in Javascript => ES5
//     this.name = 'Bhushan'       // instance member
// }

// Abc.prototype.address = 'Pune'; // Prototype member
// Abc.prototype.lname = 'pawar';
// const newObj = new Abc();

// console.log(newObj)
// console.log(Abc.prototype)

// const newArr = new Array('bhushan','rutul', 'priyanka','harsh');
// Array.prototype.add= 'pune';
// console.log(newArr.__proto__);
// console.log(Array.prototype);



// ES6 new features => let, const , flat arrow function, class , spread operator, rest parameter, arguments objects

//Class in ES6

// class Abc{
//     constructor(b) {
//         this.name1 = 'Bhushan';
//         this.address1 = 'Pune';
//         this.abcExternal = b;
//     }

// }

// class Pqr extends Abc{
//     constructor(a) {
//         super(a);
//         this.name2='Harsh';
//         this.address2='Pachora';
//         this.externalVal=a;
//     }
// }

// const pp = new Pqr(10);
// console.log(pp);


// when we passed any value to constructor then it is knowns as parametrised constructor
//and when we are not passing anything to constructor then it is known as default constructor

// Static method-----------------------

// class Abc{
//     constructor() {
//         this.name = 'Bhushan'
//     }
//     static disp(){
//         console.log("hello");
//     }
//     disp2() {
//         console.log('Bye');
//     }
// }

// const aa= new Abc();
// aa.disp2();
// Abc.disp();

// console.log(a);                 // variable hoisting
// let a ='Bhushan'
// console.log(a);


// Array other langs => collection of homogenous data elements in a single unit/variable , int a = [10,20,30] , float b= [10.20,20.30,40.2] , char c= ['a','b','c']
// Array in Javascript => collection of homogenous as well as heterogenous data elements in a single unit/variable

// let newArry = [10,20,30];
// console.log(newArry);

// let newArr2 = [10,'harshu',true, 7.5,undefined, null, function() { console.log('Hello');}];
// console.log(newArr2);

// array creation ways

//1) array literal   => blank array
// let harsh1 = [];

// harsh1[0] = 'harsh';
// harsh1.address = true;    //
// harsh1["lname"] = 'Rutul';
// harsh1[1] = function () { console.log('Hello');}
// harsh1[10] = 100;
// console.log(harsh1)
// console.log(harsh1[0]);
// console.log(harsh1.address);
// console.log(harsh1["address"]);
// console.log(harsh1.lname);
// console.log(harsh1["lname"]);
// console.log(harsh1[2]);

// //['harsh',function,,,,,,,,,100]



// let harsh2 = [,,,,];
// console.log(harsh2.length);


//2) Using Array constructor


// let harsh3 = new Array(['A','B']);
// // harsh3[0] = 'harsh';
// // harsh3.address = true;    //
// // harsh3["lname"] = 'Rutul';
// // harsh3[1] = function () { console.log('Hello');}
// // harsh3[10] = 100;

// console.log(harsh3);



// let harsh4 = new Array([10,20],[30,40],[50,60]);
// //[,,,,,,,,,,]
// console.log(harsh4)

// let harsh5 = new Array(5);
// //[,,,,,]
// console.log(harsh5[0]);

//===========================================================
// spread operator

// let harsh1 = ['ABC', 12,232,'rutul'];

// console.log(harsh1);

// let harsh2 = harsh1;    
// copying by address or pass by reference
//let harsh2 = new Array(harsh1); // invalid way
// let harsh2 = new Array(...harsh1); // valid way
// //OR
// let harsh3 = [...harsh1]       // pass by value

// // console.log(harsh2);

// harsh2[0] = 'bhushan';

// console.log(harsh1);
// console.log(harsh2);
// console.log(harsh3);


// let harsh4=[];

// for(let i = 0;i< harsh1.length ; i++) {
//     harsh4[i] = harsh1[i];
// }

// console.log(harsh4);

// ===============================================================

// const newObj = {
//     name: 'bhushan',
//     lname: 'pawar'
// }

// const newObj2 = {...newObj};  // = {name: 'bhushan',lname: 'pawar'}

// newObj2.name = 'Priyanka';

// console.log(newObj);
// console.log(newObj2);

// ES6 new features => let, const , flat-arrow function, class , spread operator, rest parameter, arguments objects, for-in loop and for-of loop

// let harsh1 =[10,20,30,40,50];
// console.table(harsh1);
// for(let i in harsh1) {
//     console.log(i+ " " + harsh1[i]);
// }

// let harsh2 = {
//     "0": 'bhushan',
//     "1": 'pawar'
// }
// console.table(harsh2);

// for(let j in harsh2) {
//     console.log(j + " " + harsh2[j]);
// }

// for(let i of harsh1) {           // valid as Array is iterable
//     console.log(i);
// }
// for(let j of harsh2) {       // invalid as Object is not interable
//     console.log(j);
// }


//============================================


// delete value from array
// Callback function 
// forEach loop

// let aa= [10,20,30,40];

// delete aa[1];
// aa[1] = null;
// // console.log(aa[1]);

// // aa = undefined;

// // console.log(aa);

// console.log(aa);

// ====================================================================


// "2"+5+8             => 258, 2 13
// "2"+"5"+"8"         => 258
// 2+5+"8"             => 78
// "2"-5-"8"           => error, 2-5-8
// "hi"-"bye"          => error



// console.log("2"+5+8+'hello',"2"+"5"+"8",2+5+"8"+9,"2"-5-"8","hi"-"10");


// console.log('0'+2+3+5+6+'7'+'8'+1);



//============================================================

// ES6 features => 
//1.let and const Keywords
//2.Arrow Functions
//3.Multi-line Strings
//4.Default Parameters
//5.Template Literals
//6.Destructuring Assignment
//7.Enhanced Object Literals
//8.Promises
//9.Classes
//10.Modules

//callback function

// A function which gets call after some time or after user's event is known as callback function

// Higher order function or first class function


// function Abc(pqr) {
//     console.log('first')
//     pqr();
// }

// const temp = () =>{
//     console.log('Second');
// }


// Abc(temp);      // fuction argument  // HOF


//callback function = whenever we are passing any function as an argument to another function then that argumented function is also known as callback function.
// window.setTimeout(() => { console.log('In settimeout')},5000);


// function Disp() {
//     const todayDate = new Date();
//     document.write(todayDate);
// }


// // window.setTimeout(Disp,1000);        // called only once
// window.setInterval(Disp,1000);          // continue call after given miliseconds


// =========================================================

// forEach loop => applies on Arrays

// const newArr = [10,20,30,40,50,60];

// console.log(newArr[0]);
// newArr.forEach((data,ind,a) => {
//     console.log(data,ind,a);
// })



// //OR

// const callbackFunc = (data,ind,a) => {
//     console.log(data,ind,a);
// }

// newArr.forEach(callbackFunc)

// const val = prompt("enter the value");
// console.log(val);

// 1  3  4

// 2  6  7

// 8  9  3


// const arr = [[1,3,4],[2,6,7],[8,9,3]]

// let harsh4 = new Array([10,20],[30,40],[50,60]);

// console.log(harsh4[0][0]);


// for(let i =0; i<3;i++) {

//     for(let j=0; j<3 ; j++) {

//         console.log(i+ " " + j);
//     }

// }



// Array methods

//1) concat  => returns new array

// let a1 = [10,30,40];
// let a2 = [50,60,70];

// const a3= a1.concat(a2);
// console.log(a1,a2, a3);

// const a4 = a2.concat(90,40,30,a1);
// console.log(a4);
//===================================================================

//2) join()  => returns a string ( i.e it combines all values as a string)

// let a1 = ['bhushan','rutul','harsh','priyanka'];

// let a2 = a1.join('=');

// console.log(a2);

// let a3 = [10,20,30];
// console.log(a3.join(' '));
// console.log(typeof a3);

//===================================================================

//3) reverse()  => return the same modified array

// const newArr = ['bhushan','rutul', 44,66];
// newArr.reverse();
// console.log(newArr);
//===================================================================

//4) slice() => it returns a new slice array => extracted array

// const newArr = [10,20,30,40,50,60,70,80,90];

// const bb = newArr.slice(2,5);  // start = inclusive       //end = exclusive
// console.log(bb);

// const cc = newArr.slice(0,6);
// console.log(cc);

// const dd = newArr.slice(-4,-2);  // -4 inclusive and -2 exclusive
// console.log(dd);

// const ee = newArr.slice(0);
// console.log(ee);

// const ff = newArr.slice(4);
// console.log(ff);

// const gg = newArr.slice(-2);
// console.log(gg);

// const hh = newArr.slice(null,-7);
// console.log(hh);

// const ii = newArr.slice(-7,null);
// console.log(ii);

// const jj = newArr.slice(-7);
// console.log(jj);

// const kk = newArr.slice(-11,-12);
// console.log(kk);

// const ll = newArr.slice(-5,8);
// console.log(ll);

// const mm= newArr.slice(2,-5);
// console.log(mm);

//===================================================================
//5) toString() => convert it into string

// const newArr = [10,20,30,40,50,60,70,80,90];

// const stringVal = newArr.toString();

// console.log(stringVal);
// console.log(typeof stringVal);
//===================================================================

//6) isArray() => returns boolean value

// const aa= [10];
// console.log(Array.isArray(aa));

// const bb= 10;
// console.log(Array.isArray(bb));

//===================================================================
//7) splice() => it returns a existing array => add element/ delete element from an existing array

// const newArr = [10,20,30,40,10,50,60];
// const aa = newArr.splice(2,2)      // first parameter for start position adding or deleting element , second parameter number of elements to be deleted
// console.log(aa);    
// console.log(newArr);

// const bb = newArr.splice(2,0,50,60,70,90);
// // console.log(newArr);

// const cc = newArr.splice(1,1,50,60,70,80,90);
// console.log(newArr);

// const dd = newArr.splice(-3,1,50,60,70);
// console.log(newArr);

//=======================================================================

//8) indexOf() => if found then returns an index of a 1st search element
//if not found then returns -1

// const newArr = [10,20,30,40,10,50,60];

// console.log(newArr.indexOf(10));
// console.log(newArr.indexOf(10,3));   // first parameter shows element tobe search and second shows start position for searching


// console.log(newArr.indexOf(90)); // -1 means element not present in array

//=======================================================================

//9) includes() => returns boolean value
// const newArr = [10,20,30,40,10,50,60];

// console.log(newArr.includes(90));   // false means element not present in array
// console.log(newArr.includes(10,3)); // first parameter shows element tobe search and second shows start position for searching

//======================================================================

//10) fill() =>it returns the existing array => it fills the existing values

// const newArr = [10,20,30,40];

// console.log(newArr.fill(90));  // fills first parameter to end
// console.log(newArr.fill(90,2)); // fills from second position to end
// console.log(newArr.fill(90,1,3)); // fills from 1st position to 2nd position as start is inclusive and end is exclusive

//======================================================================

//11) unshift() => returns the new length of array
// it always adds element at the beginnning of an array
// const newArr =[10,20,30,40,50,60,70,80,90];
// const bb = ['bhushan','rutul']
// console.log(newArr.unshift(100,110));
// console.log(newArr);

// console.log(newArr.unshift(...bb));
// console.log(newArr);

//====================================================================

//12) push() => returns the new length of array
//it always adds elements at the end of an array

// const newArr =[10,20,30,40,50,60,70,80,90];
// // console.log(newArr.push(100,110));
// // console.log(newArr);

// const bb = ['bhushan','rutul'];

// console.log(newArr.push(...bb));
// console.log(newArr);

//=======================================================================

//13) shift() =>  Removes the first element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
// => returns removed element
// const newArr =[10,20,30,40,50,60,70,80,90];

// console.log(newArr.shift());

// const newArr2 = [];
// console.log(newArr2.shift());

//======================================================================

//14) pop() => Removes the last element from an array and returns it.If the array is empty, undefined is returned and the array is not modified.

// const newArr = [10,20,30,40];
// console.log(newArr.pop());
// console.log(newArr);

// const newArr2 = [];
// console.log(newArr2.pop());

//====================================================================


// const a = -10/0;
// console.log(Boolean(' '))

//====================================================================

//15) find() => checks whether element satisfies the condition or not?
// it returns value for first successful attempt

//on successfull => returns that value
//on unsucessfull => returns undefined

// const newArr2 =[10,20,30,40,50,60,70,80,90,100,110];

// const result = newArr2.find((data) => {
//     if(data >90) {
//         return data;
//     }
// })

// console.log(result);


//OR 

// function checkCondition(data) {
//     if(data > 50) {
//         return data;
//     }

// }
// console.log(newArr.find(checkCondition));

//====================================================================

//16) findIndex() => check whether the element is present in array or not?

//on successfull => returns an index
//on unsuccessfull => returns -1


// const newArr = [10,20,30,40,50,60];

// const aaa = newArr.findIndex((data) => {
//     if(data >50) {
//         return data;
//     }
// });

// console.log(aaa);
//====================================================================

//17) filter() => it returns the new array after satisfying the specific conditions

// const newArr = [10,20,30,40,50,60,80];

// const result = newArr.filter((value) => {
//     if(value > 40) {
//         return value;
//     }
// });

// console.log(result);
//====================================================================

//18) map() => it returns the new array from existing after performing operation on array elements 

// const newArr2 = [10,20,30,40,50,60,80];

// const result2 = newArr2.map((value2) => {
//     return value2 * 4;
// });

// console.log(result2);
//====================================================================

//19) some => return true or false (i.e boolean)
// if condition gets satisfied for atleast one element from an array then returns true
//  if condition not gets satisfied for atleast one element from an array then returns false

// const newArr = [10,20,30,40,50,60,80];

// console.log(newArr.some((data) => { if(data > 70) { return data}}));
// console.log(newArr.some((data) => { if(data > 80) { return data}}));

//====================================================================

//20) every => return true or false (i.e boolean)
// if condition gets satisfied for every element from an array then returns true
//  if condition not gets satisfied for every element from an array then returns false

// const newArr2 = [10,20,30,40,50,60,80];

// console.log(newArr2.every((data) => { if(data < 80) { return data}}));
// console.log(newArr2.every((data) => { if(data < 100) { return data}}));


//====================================================================

//21) from() => it returns an array from given input

// console.log(Array.from('bhushan'));
// console.log(Array.from('bhushan pawar'));
// console.log(Array.from([1,2,3]));
// console.log(Array.from([1,2,3],x=> x*3));
// console.log(Array.from(true));
// console.log(Array.from(undefined));  // error
// console.log(Array.from(null));   //error

//====================================================================

//22) copyWithin() => it copies the element in an existing array from existing elements, it doesn't change its length

// const newArr= [10,20,30,40,50,60,70,80,90];

// const data = newArr.copyWithin(2,5,8);
// console.log(data);

//====================================================================
//23) keys() => it returns keys of array

// const newArr= [10,20,30,40,50,60,70,80,90];
// const aa = newArr.keys();       // it returns iterable object

// console.log(aa.next().value)
// console.log(aa.next().value)
// console.log(aa.next().value)
// console.log(aa.next().value)
// console.log(aa.next().value)
// console.log(aa.next().value)
// console.log(aa.next().value)
// console.log(aa.next().value)
// console.log(aa.next().value)
// console.log(aa.next().value)
// console.log(aa.next().value)
// console.log(aa.next().value)

//====================================================================
//24) values() => it returns values of array

// const bb = newArr.values();       // it returns iterable object

// console.log(bb.next().value)
// console.log(bb.next().value)
// console.log(bb.next().value)
// console.log(bb.next().value)
// console.log(bb.next().value)
// console.log(bb.next().value)
// console.log(bb.next().value)
// console.log(bb.next().value)
// console.log(bb.next().value)
// console.log(bb.next().value)
// console.log(bb.next().value)
// console.log(bb.next().value)

//====================================================================
//25) entries() => it returns array of [keys,values]

// const cc = newArr.entries();       // it returns iterable object
//                                     // it returns an array

// console.log(cc.next().value)
// console.log(cc.next().value)
// console.log(cc.next().value)
// console.log(cc.next().value)
// console.log(cc.next().value)
// console.log(cc.next().value)
// console.log(cc.next().value)
// console.log(cc.next().value)
// console.log(cc.next().value)
// console.log(cc.next().value)
// console.log(cc.next().value)
// console.log(cc.next().value)

//====================================================================

//26) flat() => it returns flattern array


// const newArr = [10,20,30, ,40,[50,60,70],[80,90,100]];

// console.log(newArr.flat());


// const newArr2 = [10,20,30, ,40,[50,60,[1,2,[7,8,9,[10,11,12,[13,14,15]]],3],70],[80,90,100]];

// console.log(newArr2.flat(2));
// console.log(newArr2.flat(Infinity));

//====================================================================

//27) flatMap() => execute operation on every element and return new flattern array 

// const newArr= ['This is','javascript','programming classes'];

// const res1 = newArr.map(data => data.split(' '));
// console.log(res1);

// const res2 = res1.flat(Infinity);
// console.log(res2);

// //OR

// console.log(newArr.flatMap(data => data.split(' ')));

//====================================================================

//28) lastIndexOf() => it gives index of last occurance element found => it searches from left to right

// const newArr = [10,40,20,30,40,50];

// console.log(newArr.lastIndexOf(40));

//====================================================================

// 29) reduce() => it retuns a single value

// const newArr = [1,2,3,4,5,6,7];

// const res = newArr.reduce((prevres, currentVal) => { 
//         console.log(prevres, currentVal)
// ;    return prevres + currentVal});
// console.log(res);

//====================================================================

//30) reduceRight() => it retuns a single value

// const newArr = [1,2,3,4,5,6,7];

// const res = newArr.reduceRight((prevres, currentVal) => { 
//         console.log(prevres, currentVal)
// ;    return prevres + currentVal});
// console.log(res);

//====================================================================

//31) sort() => it sorts an array

// const newArr = [20,10,30,50,60,40,70];

// console.log(newArr.sort());

// const newArr = [20,10,100,30,50,60,110, 105, 40,33,70];

// console.log(newArr.sort((a,b) => a-b)); //ascending
// console.log(newArr.sort((a,b) => b-a)); //descending



//====================================================================

// Boolean Datatype
// const a = '';
// console.log(Boolean(a));
// if(a) {
//     console.log('true');
//     console.log('true');
//     console.log('true');
//     console.log('true');
//     console.log('true');
//     console.log('true');
//     console.log('true');
//     console.log('true');
// } else {
//     console.log('false')
// }


//ternary operator
//!!a ? console.log('true') : console.log('false');

//================================================================

//Interview Questions

//1) what is the difference between async and defer ?
//2) difference between noopener and noreferrer and nofollow attribute in anchor tag? 
//3) Can a web page contain multiple <header> elements and <footer> elements?
//4) difference between <header> and h1 tags
//5) How to bring div to horizontally and vertically center of page?
//6) What is semantic and non-semantic elements in HTML?
//7) is outline a part of box model?
//8) difference between <figure> and <img> tag?
//9) What is difference between form's action attribute vs formaction attribute ?
//10) What is the difference among inline, inline-block, and block elements?
//11) what is box model in css?
//12) what is z-index ? and how to use it?
//13) What are pseudo elements and pseudo classes?
//14) difference between border-box vs content-box values of box-sizing property?
//15) Explaint Positioning property in css.
//16) What is the property that is used to control image scroll?
//17) write a media query for showing 2 diffrent color in div on the basis of width size
//18) visibility hidden vs display none in css.
//19) How to remove default space between two inline blocks.
//20) What is viewport , viewport height , viewport width?
//21) what is data-list in HTML ?





//================================================================

// string 
/* const newstring = `bhushan`;


console.log(`Hello ${newstring}`)
 */


/* function disp(a,...b){
    console.log("static parameters",a);
    console.log("dynamic parameters",b);
}

disp("bhushan",'pawar','rutul'); */

//string interpolation 
/* const aa= 'bhushan';

console.log(`hello ${aa}`); */

//tagged template

/* let var1= 'bhushan';
let var2= 'pawar';
let var3 = 'rutul';

function disp(a,...b){
    
    console.log("static parameters",a);
    console.log("dynamic parameters",b);
    return `${a[0]}${b[0]}${a[1]}${b[1]}${a[2]}${b[2]}`
}
console.log(disp`Hello ${var1} ${var2} ${var3}`); */


//============================================================


// String Methods

//1) length=> return string length
/* const newstring = 'bhushan pawar';
console.log(newstring.length) */
//============================================================

//2) charAt() => returns char at perticular location

/* const newstring = 'bhushan';

console.log(newstring.charAt(2)); */
//============================================================

//3) charCodeAt() or codePointAt() => returns ASCII code of an character

/* const aa = 'ABCDz AABBCC';
console.log(aa.charCodeAt(4)) */
/* console.log(aa.codePointAt(2)); */

//A =65
//Z= 90
//a=97
//z=122
//============================================================

//4) toUpperCase() and toLowerCase()

/* console.log(aa.toUpperCase());
console.log(aa.toLowerCase()); */
//============================================================

//5) trim() =>  it removed blank spaces from beginning and ending side of string
// it only replaces first occurance of string


/* console.log('      bhushan     p'.trim()); */
//============================================================

//6) replace() => it replaces specific letter or string

/* console.log(aa.replace('AB','WW')); */

//7) split() => it separates string into array

/* console.log(aa.split(" "));
console.log(aa.split(""));
console.log(aa.split()); */
//============================================================

//8) indexOf() => it returns an index of character
// returns first occurance
// it not present then returns -1
// if present then returns number
// it won't allow regular expression

/* const aa = 'ABCDz AABBCC';
 */
/* console.log(aa.indexOf('AB'))
console.log(aa.indexOf('a'))
 */
//============================================================

//9) search() => it searches the substring
//similar to indexOf method but it allows regular expression

// const aa = 'bhushan is a java class is';
// console.log(aa.search( /is/ig ))
// console.log(aa.replaceAll('is','that'));

//============================================================

//10) slice() -> it returns a sliced string from whole string

/* console.log(aa.slice(1,4)); */


//============================================================

//11) substring() => it is similar to slice method but it won't allow negative index 

/* console.log(aa.substring(0,-2)); */
//============================================================


//12) substr() => it takes 2 parameters 
// 1. startindex
// 2. number of character

/* console.log(aa.substr(2,5)) */
//============================================================

//13) fromCharCode() or fromCodePoint() => it returns the character from ASCII code
/* 
console.log(String.fromCharCode(92));
console.log(String.fromCodePoint(65)); */
//============================================================


// Practise

// const aa = [10,20,30,40];

// const [a,,c,] = aa;

// console.log(a,c);

// const bb ={
//     name: 'bhushan',
//     lname: 'pawar',
//     age: 30
// }

// const {age: bbb} = bb;

// console.log(bbb);

// console.log(Math.max(...aa));

// true values =>  1, -1, " ", true, [], {}
// Falsy values => 0, +0, -0, "", false, undefined , null
// if("Hello") {
//     console.log('True value');
    
// } else {
//     console.log('False value');
    
// }

// 'Hello' ? console.log('True value'): console.log('False value')

// 'hello' && console.log('True');
// '' && console.log('True');

//============================================================

// console.log(10 && 20);
// console.log('a' & 'b');
// console.log(NaN & NaN);

//============================================================

// let dummyObj = {
//     price : 4502,
//     get_price: function() {
//         return this.price;
//     }
// }


// let realobj1 = Object.assign({}, dummyObj);
// let realobj2 = Object.assign(dummyObj);

// let realobj = Object.create(dummyObj);
// realobj.price = 30000;
// realobj.get_price= function() {
//     return this.price;
// }


// delete realobj.price;

// delete realobj2.price
// console.log(dummyObj);
// console.log(realobj1);
// console.log(realobj2);
// console.log(realobj2.get_price());

//============================================================

// let a ={
//     name:'bhushan',lname: 'pawar'
// };

// let c = {
//     address: 'Pune',
//     name: 'rutul'
// }

// let bb = Object.assign(a,c);
// delete bb.name
// console.log(bb);
//============================================================


// let cc = {...a,...c};
// delete cc.name;
// console.log(cc);


// let dd  = new Object(a);
// console.log(dd);


// var sum =0;
// for(i=4; i<8 ; ++i) {
//     if(i === 6) {
//         continue;
//     }
//     console.log('i = ',i);
    
//     sum+=1;
// }

// console.log('sum= ', sum);
//============================================================

// let age;
// let b = age + 54;
// console.log(age, b);

// var len =10;
// function fn() {
//     var len =20;
//     console.log(this.len);
//     console.log(len);
    
// }
// fn();


// let a ='10'

// let b = +a;         // automatically conversion from String to number

// console.log(b);


// let aa ='rutul'

// let bb = +aa;

// console.log(bb);


// console.log(Array.prototype);



// var bar  =1, foo ={}

// foo= {
//     bar: 2,
//     baz: ++bar
// }

// console.log(foo.baz);
// console.log(foo.bar);
// console.log(bar);

// console.log(foo.baz+ foo.bar + bar);

// const stringNumber = ['123', '4.45', 'abc', '10000', '0', '']

// const numbers = stringNumber.map((data) => {return Number(data)})

// console.log(numbers);

// let a ={
//     name:'bhushna'
// }

// Object.seal(a);
// a.name ='rutul'
// console.log(a);

//============================================================

// finding unique values from an array

// const givenArry = [10,20,30,10,30,20,40,50];

// const newArry = givenArry.filter((data,index) => {
//     console.log(data,givenArry.indexOf(data),index);
    
//     return givenArry.indexOf(data) === index;
// })

// console.log(newArry);

//============================================================

// const newArr = [];
// const aa = ['bhushan pawar','rutul pawar'];
// aa.forEach(data => {
//     console.log(data.split(" "));
// })


// for(let data of aa){
//     newArr.push(data.split(" "));

// }
// console.log(newArr.flat(Infinity));

//============================================================




// windows.alert("Hello");
// alert("Hello");

// window.setInterval(() => { },seconds)
// setInterval(() => { },seconds)

// window.setTimeout(() => { },seconds)
// setTimeout(() => { },seconds)

// console.log(isNaN());

// const a = 'Hello';
// const b = NaN;

// if( a===b ) {
//     console.log('True');
    
// } else {
//     console.log('false');
    
// }

//============================================================

//Number methods

//1) toString() => it returns the number to string
// const aa = 4123456;

// console.log(aa.toString(2)+'Hello');
// console.log(aa.toString(10)+10);


// //============================================================

// //2) toExponetial => it returns the number into exponential form
// // fractionDigits decides how may decimal point to be shown
// console.log(aa.toExponential());
// console.log(aa.toExponential(3));
// console.log(aa.toExponential(1));
// console.log(aa.toExponential(0));

//============================================================

//3) tofix() => it return a number with specific length or number of digits after decimal
// const aa = 41.23456;


// console.log(aa.toFixed(3));
// console.log(aa.toFixed());
// console.log(aa.toFixed(4));
// console.log(aa.toFixed(9));


//============================================================

//4) toPrecision() => it formats the number of digits it return a number with specific length or number of digits including decimal

// const aa = 41.23456;


// console.log(aa.toPrecision(3));
// console.log(aa.toPrecision());
// console.log(aa.toPrecision(4));
// console.log(aa.toPrecision(9));


//============================================================

//5) isInteger() => returns true of false if number is an integer
//default value is false if we are not passing any parameter to it

// const aa = 41.23456;
// console.log(Number.isInteger(aa));
// const aaa = 41;
// console.log(Number.isInteger(aaa));
// const aaaa = '41';
// console.log(Number.isInteger(aaaa));

//============================================================

//6) Global methods - Number()


// console.log(Number('hello'));
// console.log(Number('1234'));
// console.log(Number('1234.345'));
// console.log(Number(true));
// console.log(Number(false));
// console.log(Number(undefined));
// console.log(Number(null));
// console.log(Number(Infinity));
// console.log(Number(-Infinity));
// console.log(Number(""));
// console.log(Number(" "));
// console.log(Number(-1));


//============================================================

//7) parseInt() => convert into integer
//8) parseFloat() => convert into float
// console.log('==============================================');

// console.log(parseInt('100'));
// console.log(parseInt('Hello'));
// console.log(parseInt('100.200'));
// console.log(parseInt(''));
// console.log(parseInt(' '));
// console.log(parseInt(null));
// console.log(parseInt(undefined));
// console.log(parseInt(NaN));
// console.log(parseInt(true));
// console.log(parseInt(false));
// console.log(parseInt(-1));



// console.log('==============================================');

// console.log(parseFloat('100'));
// console.log(parseFloat('Hello'));
// console.log(parseFloat('100.2002'));
// console.log(parseFloat(''));
// console.log(parseFloat(' '));
// console.log(parseFloat(null));
// console.log(parseFloat(undefined));
// console.log(parseFloat(NaN));
// console.log(parseFloat(true));
// console.log(parseFloat(false));
// console.log(parseFloat(-1));



//============================================================


// Math methods


// console.log(Math.sqrt(-64));
// console.log(Math.abs(-64));
// console.log(Math.abs(64));
// console.log(Math.abs(null));
// console.log(Math.abs(undefined));
// console.log(Math.abs(true));
// console.log(Math.abs(false));
// console.log(Math.abs(10/0));
// console.log(Math.abs(-10/0));
// console.log(Math.pow(2,3));
// console.log(Math.trunc(12.2234356));
// console.log(Math.trunc("     12.2234356   "));

// console.log(Math.random()); // it returns random value lies between 0 to 1

// // const aa = Math.random() * 6 +1;
// // console.log(Number.parseInt(aa));
// const aa = Math.random() * 10000;
// // console.log();
// const bb = Number.parseInt(aa);
// bb> 999 && bb!== 0 && console.log(Number.parseInt(aa));


//============================================================
//Date : 

//today's date

// const newDate = new Date();
// console.log(newDate);


// const newDate2= new Date(2021,11,11,11,22,33,2);
// console.log(newDate2);

// const newDate3= new Date(2021,11);     // multiple values acts normally as yy,mm,dd....
// console.log(newDate3);
// const newDate4= new Date(1000);     // single parameter act as a miliseconds
// console.log(newDate4);



// console.log(newDate.getFullYear()); 
// console.log(newDate.getMonth()+ 1);// starts from zero
// console.log(newDate.getDay()+ 1);// starts from zero
// console.log(newDate.getDate());
// console.log(newDate.getHours());
// console.log(newDate.getMinutes());
// console.log(newDate.getSeconds());
// console.log(newDate.getMilliseconds());

// // 08:29:2022
// console.log(`${newDate.getMonth()+ 1}:${newDate.getDate()}:${newDate.getFullYear()}`);

//============================================================


// const data1 = [
//     {
//       key: 200001,
//       text: "Tieto Test Enterprise",
//       secondaryText: "",
//       imageUrl: "/_layouts/15/images/si/header/company_color.png"
//     },
//     {
//       key: 505,
//       text: "Software Innovation",
//       secondaryText: "",
//       imageUrl: "/_layouts/15/images/si/header/company_color.png"
//     },
//       {
//       key: 200002,
//       text: "Bhushan",
//       secondaryText: "",
//       imageUrl: "/_layouts/15/images/si/header/company_color.png"
//     },
//       {
//       key: 200010,
//       text: "Rutul",
//       secondaryText: "",
//       imageUrl: "/_layouts/15/images/si/header/company_color.png"
//     }
//   ];
//   const data2 = [
//     {
//       key: 200001,
//       text: "Tieto Test Enterprise",
//       secondaryText: "",
//       imageUrl: "/_layouts/15/images/si/header/company_color.png"
//     },
//       {
//       key: 200002,
//       text: "Bhushan",
//       secondaryText: "",
//       imageUrl: "/_layouts/15/images/si/header/company_color.png"
//     },
//   ];
  


//   const data3 = data1.filter(item1 => !data2.find(item2 => item1.key == item2.key));
//   console.log(data3);

//============================================================

// const newArr = [10,20,30,40,50,10,20,60,30,70];

// const result1 = newArr.filter((data,index) => newArr.indexOf(data) == index );
// console.log(result1);

// const result2 = newArr.filter((data,index) => newArr.indexOf(data) !== index );
// console.log(result2);


//==============================================================


// const newArray = [1,2,3,4,5,6,7,8,10,12];

// function disp(newArr) {
//     let res =[];
//     for(let i= 0; i< newArr.length-1 ; i++) {
//         if(newArr[i] + 1 != newArr[i+1]) {
//             res.push(newArr[i] +1);
//         }
//     }  
//     return res;
// }
// console.log(disp(newArray));
//==============================================================

//OR

// const newArray = [1,2,3,4,5,6,7,8,10,12];

// let arr1= newArray.map((data,index) => {
//     if(newArray[index+1]-newArray[index]>1) {
//         return data + 1;
//     }
    
// })
// console.log(arr1.filter(data => data));



//=================================================================

// find the largest and smallest number from an unsorted Array
// const newArray = [11,2,3,41,5,6,71,8,110,12];

// //steps 1= sort array
// //steps 2 = 0th element => smallest
// //steps 3 = lenth-1 location => largest

// const newSortedArr = newArray.sort((a,b) => a-b );
// console.log(newSortedArr);

// console.log('Smallest',newSortedArr[0]);
// console.log('Greatest',newSortedArr[newSortedArr.length-1]);
// //=================================================================

// console.log('Smallest', Math.min(...newArray));
// console.log('Greatest', Math.max(...newArray));
// //=================================================================
// console.log(Math.max());
// console.log(Math.min());
// //=================================================================

// let min= newArray[0];
// let max= newArray[0];
// for(let i =0; i< newArray.length; i++) {
//     if(newArray[i] > max) {
//         max = newArray[i];
//     } else {
//         min = newArray[i];
//     }

// }

// console.log('small',min,'max', max);

//=================================================================

// const newstring = 'Hyderabad'

// console.log(newstring.split(""));

//================================================================
/* 
Question for interview => 
What is difference between Object.create() and Object.assign() methods
Answer : 
i) Object.create create a new object and Object.assign also create new Object
ii) if we pass any object while calling this methods as a parameter then
Object.create() assigns that parameter object as a prototype members
and Object.assign assign that parameter as a instance members
iii) prototype of Object.create() method is Object which we had passed as an arguments
and prototype of Object.assign() method is Object wrapper class
iv) in Object.assign() method we can pass multiple objects as a parameter but in Object.create() method
we can only pass one object as a parameter maximum or blank object we can pass i.e {}
 */
// const aa  = Object.create({a: 'bhushan'});
// console.log(aa);

// const bb = Object.assign({a: 'bhushan'});
// console.log(bb);


//=========================================================================================================


// find the occurance of character in a string

// let countingOccurance = str => {
//     return str.split('').reduce((total, letter) => {
//         console.log(total,letter,total[letter]);      
//         total[letter] ? total[letter]++ : total[letter] = 1;
//         // console.log(total);      
//         return total;
//     }, {});
// };

//   console.log(countingOccurance('Hello'));

//===============================================================================

/* const aa ={
    name1: 'pawar',
    address1: 'Pune',
    lname: 'thakare'
}

const bb ={
    name2: 'pawar',
    address2: 'Pune',
    lname: 'dhomse'
}


const cc  = {...aa,...bb}
console.log(cc);

const dd = Object.assign(aa,bb);
console.log(dd);

const ee = Object.create({});
console.log(ee);
 */

//===============================================================================


// Program for testing given number is prime or not?
//Answer:

/* function test_prime(n)
{
  if (n===1){
    return false;
  }
  else if(n === 2){
    return true;
  } else {
    for(let x = 2; x < n; x++)
    {
      if(n % x === 0){
        return false;
      }
    }
    return true;  
  }
}

console.log(test_prime(25));
 */

//============================================================================

// Question : find out only odd numbers from the given array
// Answer:

// const aa = [1,2,3,4,5,6,7,8,9,10];

// function findOdd(newArr) {
//   return aa.filter(data => data % 2 !== 0 )
// }
// console.log(findOdd(aa));


//============================================================================

// how to get only elements from any array

// Question : input = [1,,,3,56,,,,33] , output=  [1, 3, 56, 33]

// Answer: 

// const a =[1,,,3,56,,,,33];
// console.log(a.flatMap((data) => data));

//============================================================================


// Question : Write a program to reverse a given integer number
// Answer: 
/* const newNumber = 1234567;
const newString = newNumber.toString();

const arrayConverted = Array.from(newString);
for(let i =0 ; i< newString.length/2 ; i++) {
  let temp = arrayConverted[arrayConverted.length-1-i];
  arrayConverted[arrayConverted.length-1-i] = arrayConverted[i];
  arrayConverted[i]= temp;
}

console.log(Number(arrayConverted.join(",").replaceAll(",",'')));


//OR 


function reverseInt(newNumber){
  let r= newNumber.toString().split("").reverse().join("");
  console.log(Number(r));
  if(newNumber<0){
    return r *-1;
    }
    return r;
    
}

console.log(reverseInt(12345678)); */

//============================================================================

// Symbol  => is a datatype which holds unique value


// const newSym1 = Symbol('rutul');
// const newSym2 = Symbol('bhushan');

// console.log(newSym1 == newSym2);
// console.log(newSym1 === newSym2);

// const aa = Symbol('aaadadadada')
// const bb = Symbol('bbadadadadada')
// const cc = 123456789;

// const newObj = {
//     name: 'bhushan',
//     [aa]: 1234,
//     [bb] : 1234,
//     [cc] : cc,
//     aa:333
// }

// newObj.id= 234

// console.log(newObj);

// for(let aaa in newObj) {
//     console.log(aaa,newObj[aaa]);  
// }

// console.log(Object.getOwnPropertySymbols(newObj))
// newObj[aa] = 56789;
// console.log(newObj[aa]);

// const newObj2 = Object.assign(newObj);
// console.log(newObj2);


// const newObj3 = {...newObj};  
// console.log(newObj3);

// const newObj4 = Object.create(newObj);  // creates new object but original key values will be act as prototype members
// console.log(newObj4);

// console.log(Object.getOwnPropertySymbols(newObj));
// console.log(Reflect.ownKeys(newObj)); // it prints keys along with symbols as a keys
// console.log(Object.keys(newObj)); // it prints keys without symbols

// console.log(Reflect.defineProperty(newObj,'address',{value: 'Pune',writable:false,}));
// newObj.address = 'Dhule'
// console.log(newObj);


//============================================================================


// Set data structure in javascript ==> it is a data structure which hold unique values.
// i.e repeatative values will be taken only once

// const newSet = new Set();  // creation of a set
// console.log(newSet);

// newSet.add(11);          // adding element in a set
// console.log(newSet);

// newSet.add(12);
// console.log(newSet);

// console.log(newSet.has(12)); // returns boolean value , true if element present otherwise false
// console.log(newSet.has(13)); // returns boolean value , true if element present otherwise false

// newSet.delete(12);     // removing element from set
// console.log(newSet);

// console.log(newSet.size);  // checking size of set i.e number of elements present
// console.log(newSet.clear()); // clearing all elements and making set as an empty set

// console.log(newSet);

//============================================================================

//Map data structure in Javascript  => it is a collection of key value pair
// main difference between Map and Object is in Object we having key as string or symbol but in 
// map we can take a keys of any type


// const newMapvar = new Map();
// const aa = [1,2,40];
// const bb = {name: 'bhushan'};
// newMapvar.set(aa,[11,12,13]);
// console.log(newMapvar);

// newMapvar.set(bb,true);
// console.log(newMapvar);

// const cc  = function () { console.log('hello')}
// newMapvar.set(cc,'pawar');
// console.log(newMapvar);

// console.log(newMapvar.get(aa));
// console.log(newMapvar.get(bb));

// console.log(newMapvar.delete(bb));
// console.log(newMapvar.delete(bb));
// console.log(newMapvar.entries());
// console.log(newMapvar.keys());
// console.log(newMapvar.values());
// console.log(newMapvar.has(bb)); // it checks whether key present or not
// console.log(newMapvar.has(aa));
// console.log(newMapvar.size);
// newMapvar.clear();
// console.log(newMapvar);
// console.log(newMapvar.size);


//============================================================================

// Number to string conversion

// console.log((12345).toString());
// console.log(12345..toString());

// // String to number

// const aa = '123456789';

// console.log(typeof parseInt(aa));
// console.log(typeof Number(aa));


//============================================================================

//Nullish coalescing operator (??) ==> it always use for checking value is null or undefined or not?
// const aa = 10;
// const bb = null;

// console.log(aa ?? 'hello'); // if aa is not undefined or null then it prints that value
// console.log(bb ?? 'hello'); // if aa is not undefined or null then it prints that 'Hello'

// aa !== null || a!== undefined ? aa : 'Hello' ;

// console.log(aa && 'hello');   // hello
// console.log(aa ?? 'hello');   // 10
// console.log('' ?? 'hello');   // ''
// console.log(' ' ?? 'hello');  //' '
// console.log(true ?? 'hello');  // true
// console.log(Symbol('id') ?? 'hello'); //Symbol('id')

//============================================================================


// how to access inner objects from outside of object

// const newObj ={
//   name: 'bhushan',
//   innerObj: {
//     address: 'Pune',
//     lname: 'pawar'
//   }
// }

// console.log(newObj.name);
// console.log(newObj?.innerObj?.address);
// console.log(newObj.innerObj.salary);
// console.log(newObj?.innerObj2?.aaaa);
//============================================================================

// most useful concepts from Core-JS in react

// ES6 features => let , const, arrow function , annonymous function
// Array methods => filter, map, includes, every, some, find, reduce, join, isArray
// String methods => split, splice, slice, toString,
// Number methods => Number(), parseInt , isNaN, 

// Nullish coalescing operator
// inner object checking

// string interpolation => `${}`

// Object methods => keys, values, entries, freeze, seal, assign

// callback function

// promises, async-await

// localstorage, session storage,cookies 

//===============================================================================================================


// Callback hell or pyramid of doom 
// inversion of control


/* function waitForThreeSeconds ( ) {
  let ms = 3000+ new Date().getTime();
  while ( new Date().getTime() < ms ) { }
}
function disp1() {
  waitForThreeSeconds();
  console.log('Hello from disp1');
}

function disp2() {
  waitForThreeSeconds();
  console.log('Hello from disp2');
  
}
disp1()

disp2()
 */

//=====================================================
/* 

function disp1(callback) {
  setTimeout(() => {
    console.log('Hello from disp1');
    callback();
  },500);
}

function disp2(callback2) {
  setTimeout(() => {
    console.log('Hello from disp2');
    callback2();
  },1000);
}

function disp3(callback3) {
  setTimeout(() => {
    console.log('Hello from disp3');
    callback3();
  },1000);
}
function disp4() {
  setTimeout(() => {
    console.log('Hello from disp4');
  },1000);
}

disp1(function () {
  disp2(function () {
    disp3(function() {
      disp4();
    });
  });
}) */

//====================================================

// Promises 
/* function disp1() {
  return new Promise((resolve,reject) => {
    setTimeout(() => {
      console.log('Hello from disp1');
      resolve('Helle from resolve disp1');
    },500);
  });
}

function disp2() {
  return new Promise((resolve,reject) => {
    setTimeout(() => {
      console.log('Hello from disp2');
      resolve();
    },1000);
  });
}

function disp3() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Hello from disp3');
      resolve();
    },1000);
  });
}
function disp4() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Hello from disp4');
      resolve();
    },1000);
  });
}



disp1().then((res) => {
  console.log(res);
  disp2();
}).then(disp3).then(disp4); */


//======================================================

// async-await 
/* 

function disp1() {
  return new Promise((resolve,reject) => {
    setTimeout(() => {
      console.log('Hello from disp1');
      resolve('Helle from resolve disp1');
    },500);
  });
}

function disp2() {
  return new Promise((resolve,reject) => {
    setTimeout(() => {
      console.log('Hello from disp2');
      resolve();
    },1000);
  });
}

function disp3() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Hello from disp3');
      resolve();
    },1000);
  });
}
function disp4() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Hello from disp4');
      resolve();
    },1000);
  });
}

async function mainfun() {
  await disp1();
  await disp2();
  await disp3();
  await disp4();
}

mainfun();

*/

//=============================================================

/* 
function disp() {
  console.log('hello 1');
  setTimeout(() => console.log('hello from setTimeout'),0);
  console.log('hello 2');  
}

disp() */

// console.log("Start");
// setTimeout(function cbT(){
//  console.log("CB SetTimeout");
// }, 5000 ) ;

// fetch("https://dummyjson.com/products/1")
// .then(function cbF(){
//  console.log("CB Netflix");
// });
// console.log("End");

//=======================================================================

//Callback function / callback => when one function pass as an argument to another
//function then it is known as callback function

// normal javascript => synchronous execution => sequencial execution
// callback functions => asynchronous execution


// function Test1() {
//   setTimeout( function cbF() { console.log('in Test 1 function');},5000);
// }


// function Test2() {
//   setTimeout(function cbf2() {console.log('in Test 2 function')},7000);
// }


// Test2();
// Test1();


// function singUp(bhushan) {
//   setTimeout(() => {
//     console.log('in singUp function');
//     bhushan();
//   },5000);
// }

// function Login(rutul) {
//   setTimeout(() => {
//     console.log('in Login function');
//     rutul();
//   },2000);
// }

// function SendMail(harshu) {
//   setTimeout(() => {
//     console.log('in SendMail function');
//     harshu();
//   },8000);
// }

// function Logout() {
//   setTimeout(() => console.log('in Logout function'),4000);
// }


// singUp(function CBF1() {
//   Login(function CBF2() {
//     SendMail(function CBF3() {
//       Logout();
//     });
//   });
// });


//=======================================================================

//Promise => it shows / have 3 states of promises
//1)fullfil, => resolve
//2)reject,  => reject
//3)pending


// function singUp() {
//   return new Promise((resolve,reject) => {
//     setTimeout(() => {
//       console.log('in singUp function');
//       const aa = Math.random() * 10;
//       if(aa > 1) {
//         resolve("Hurreeeyyyyyyyyyyyy");
//       } else {
//         reject('Some problem is there..........');
//       }
//     },5000);
//   })
//   }
  
//   function Login() {
//     return new Promise((resolve,reject) => {
//     setTimeout(() => {
//       console.log('in Login function');
//       resolve('huerrre 2');
//     },2000);
//   });
//   }
  
//   function SendMail() {
//     return new Promise((resolve,reject) => {
//     setTimeout(() => {
//       console.log('in SendMail function');
//       resolve('hureee 3');
//     },8000);
//   });
//   }
  
//   function Logout() {
//     return new Promise((resolve,reject) => {
//     setTimeout(() => {
//       console.log('in Logout function');
//       resolve('uhurreee 4');
//     },4000);
//     });
//   }
  


// singUp().then(Login).then(SendMail).then(Logout);
// // singUp()
// //   .then(data => {
// //     console.log(data);
// //     Login().then(res => {
// //         console.log(res);
// //         SendMail()
// //       }).catch(errr => clg)
// //       .catch(err => {
// //         console.log(err)});
// //   })
// //   .catch(err => console.log(err))



//=====================================================================

// Async-await 


// function singUp() {
//   return new Promise((resolve,reject) => {
//     setTimeout(() => {
//       console.log('in singUp function');
//       const aa = Math.random() * 10;
//       if(aa > 1) {
//         resolve("Hurreeeyyyyyyyyyyyy");
//       } else {
//         reject('Some problem is there..........');
//       }
//     },5000);
//   })
//   }
  
//   function Login() {
//     return new Promise((resolve,reject) => {
//     setTimeout(() => {
//       console.log('in Login function');
//       resolve('huerrre 2');
//     },2000);
//   });
//   }
  
//   function SendMail() {
//     return new Promise((resolve,reject) => {
//     setTimeout(() => {
//       console.log('in SendMail function');
//       resolve('hureee 3');
//     },8000);
//   });
//   }
  
//   function Logout() {
//     return new Promise((resolve,reject) => {
//     setTimeout(() => {
//       console.log('in Logout function');
//       resolve('uhurreee 4');
//     },4000);
//     });
//   }
  
// async function normal() {
//   await singUp();
//   await Login();
//   await SendMail();
//   await Logout();
// }

// normal();


//=============================================================================================

// Question: Guess the output of the program

// function disp() {
//   console.log('Hello 1');
//   setTimeout(() =>{
//     console.log('Hello from setTimeout');
//   },2000);
  
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log('From promise');
//       resolve();
//     },6000);
//   })
//   console.log('hello 2');
 
// }

// disp().then(res => console.log('result'));

//==============================================================================================

// Promise.all() method: => it always takes all promises in an array format and return final result from all resolved promises values in array format
// if any promise get reject from that input array then it only shows that output as a rejected string from that respective promise


/* const promise1 = new Promise((resolve,reject) => resolve('Hello1'))
const promise2 = new Promise((resolve,reject) => resolve('Hello2'))
const promise3 = new Promise((resolve,reject) => resolve('Hello3'))
const promise4 = new Promise((resolve,reject) => resolve('Hello4'))

const promise5 = Promise.all([promise1,promise2,promise3,promise4]);
promise5.then(res =>console.log('Promise', res ))         
                // output : ['Hello1','Hello2','Hello3','Hello4']
.catch(err => console.log('error',err)); */

/* 
const promise1 = new Promise((resolve,reject) => resolve('Hello1'))
const promise2 = new Promise((resolve,reject) => reject('Hello2'))
const promise3 = new Promise((resolve,reject) => reject('Hello3'))
const promise4 = new Promise((resolve,reject) => resolve('Hello4'))

const promise5 = Promise.all([promise1,promise2,promise3,promise4]);
promise5.then(res =>console.log('Promise', res ))
.catch(err => console.log('error',err));

 */
//==============================================================================================

// Promise.race() method: => it is similar to Promise.all but instead of giving result as all promises values it only gives result of first resolved/reject promise

/* 
const promise1 = new Promise((resolve,reject) => resolve('Hello1'))
const promise2 = new Promise((resolve,reject) => resolve('Hello2'))
const promise3 = new Promise((resolve,reject) => reject('Hello3'))
const promise4 = new Promise((resolve,reject) => resolve('Hello4'))

const promise5 = Promise.race([promise1,promise2,promise3,promise4]);
promise5.then(res =>console.log('Promise', res ))
.catch(err => console.log('error',err));


 */
/* 
const promise1 = new Promise((resolve,reject) => reject('Hello1'))
const promise2 = new Promise((resolve,reject) => resolve('Hello2'))
const promise3 = new Promise((resolve,reject) => resolve('Hello3'))
const promise4 = new Promise((resolve,reject) => resolve('Hello4'))

const promise5 = Promise.race([promise1,promise2,promise3,promise4]);
promise5.then(res =>console.log('Promise', res ))
.catch(err => console.log('error',err)); 

 */

//=========================================================================

//Promise.allSettled() : => it just wait for promise gets settled inspite of its result

// const promise1 = new Promise((resolve,reject) => resolve('Hello1'))
// const promise2 = new Promise((resolve,reject) => resolve('Hello2'))
// const promise3 = new Promise((resolve,reject) => resolve('Hello3'))
// const promise4 = new Promise((resolve,reject) => resolve('Hello4'))

// const promise5 = Promise.allSettled([promise1,promise2,promise3,promise4]);
// promise5.then(res =>console.log('Promise', res ))

/* const promise1 = new Promise((resolve,reject) => resolve('Hello1'))
const promise2 = new Promise((resolve,reject) => reject('Hello2'))
const promise3 = new Promise((resolve,reject) => resolve('Hello3'))
const promise4 = new Promise((resolve,reject) => reject('Hello4'))

const promise5 = Promise.allSettled([promise1,promise2,promise3,promise4]);
promise5.then(res =>console.log('Promise', res.map(data => console.log(data.status,data.value)) ))
 */
/* const promise1 = new Promise((resolve,reject) => reject('Hello1'))
const promise2 = new Promise((resolve,reject) => reject('Hello2'))
const promise3 = new Promise((resolve,reject) => reject('Hello3'))
const promise4 = new Promise((resolve,reject) => resolve('Hello4'))

const promise5 = Promise.allSettled([promise1,promise2,promise3,promise4]);
promise5.then(res =>console.log('Promise', res )) */

//=========================================================================

//Promise.any() : => it is like a race but just it waits for the first promise gets resolved
// if all promises gets rejected then it returns the result as "AggregateError: All promises were rejected"


// const promise1 = new Promise((resolve,reject) => reject('Hello1'))
// const promise2 = new Promise((resolve,reject) => reject('Hello2'))
// const promise3 = new Promise((resolve,reject) => resolve('Hello3'))
// const promise4 = new Promise((resolve,reject) => resolve('Hello4'))

// const promise5 = Promise.any([promise1,promise2,promise3,promise4]);
// promise5.then(res =>console.log('Promise', res ))
// .catch(err => console.log('error',err));


/* 
const promise1 = new Promise((resolve,reject) => reject('Hello1'))
const promise2 = new Promise((resolve,reject) => reject('Hello2'))
const promise3 = new Promise((resolve,reject) => reject('Hello3'))
const promise4 = new Promise((resolve,reject) => reject('Hello4'))

const promise5 = Promise.any([promise1,promise2,promise3,promise4]);
promise5.then(res =>console.log('Promise', res ))
.catch(err => console.log(err));  */



//=========================================================================

// Callback

// function disp1(CBF){
//   CBF();
//   console.log('Hello from disp1');
// }

// function disp2(){
//   console.log('hello from disp2');
  
// }

// disp1(disp2);

//=========================================================================

// interview question:

// 1) What is callback hell?
// Ans: whenever there is a scenario of interdependent task or function and in that situation we write a nested callbacks 
// which leads to a situation known  as callback hell


// Promise

// const promiseResult1 = new Promise(function(resolve, reject) {
//     resolve('The promise has been resolved');
// })
// console.log(promiseResult1);
// promiseResult1.then(res => console.log(res));



// const promiseResult2 = new Promise(function(resolve, reject) {
//     reject('The promise has been rejected');
// })
// console.log(promiseResult2);
// promiseResult2.catch(res => console.log(res));


//using arrow function 

// const promiseResult2 = new Promise((resolve, reject) => {
//   reject('The promise has been rejected');
// })
// console.log(promiseResult2);
// promiseResult2.then(res => console.log(res),res => console.log(res));

//==========================================================================


//Async -await 

// const promiseResult2 = new Promise((resolve, reject) => {
//   // resolve('The promise has been resolved');
//   reject('The promise has been rejected');
// });



// async function disp() {
//   const aa = await promiseResult2;
//   console.log(aa);
  
// }

// disp();

// const promiseResult2 = new Promise((resolve, reject) => {
//   resolve('The promise has been resolved');
//   // reject('The promise has been rejected');
// });

// function disp() {
//   return new Promise((resolve, reject) => {
//     resolve('The promise has been resolved');
//     // reject('The promise has been rejected');
//   });
// }

// async function generateResult() {
//   try{
//     const aa  = await disp();
//     console.log(aa);
//   }catch(err) {
//     console.log(err);
//   }
// }
// generateResult()


//================================================================

// const disp1 =() =>{ return new Promise((resolve,reject) =>{ setTimeout(() => resolve('hi1'),2000) } )}
// const disp2 =() =>{ return new Promise((resolve,reject) =>{ setTimeout(() => resolve('hi2'),5000) } )}
// const disp3 =() =>{ return new Promise((resolve,reject) =>{ setTimeout(() => resolve('hi3'),1000) } )}
// const disp4 =() =>{ return new Promise((resolve,reject) =>{ setTimeout(() => resolve('hi4'),7000) } )}



// async function generateResult() {
//   const a1 = await disp1();
//   console.log(a1);
//   const a2 = await disp2();
//   console.log(a2);
//   const a3 = await disp3();
//   console.log(a3);
//   const a4 = await disp4();
//   console.log(a4);
//   console.log(a1+" "+a2+" "+a3+" "+a4);
  
// }

// generateResult();


//================================================================


// fetch => we use to send network request , it gives response in the 
// form of response object, which we need to convert first into JSON object
// then that JSON object we can use for UI purpose

//fetch API using promise

// fetch('https://jsonplaceholder.typicode.com/todos/1')
// .then(res => res.json())    //res also known as response object, so are not able to perform any operation on it
// .then(data => console.log(data)); 

// fetch('https://jsonplaceholder.typicode.com/posts')
// .then(res => res.json())    //res also known as response object, so are not able to perform any operation on it
// .then(data => data.map(val => console.log(val.title))); 

//================================================================
//fetch API using async-await

// async function disp(){
//   const data  = await fetch('https://jsonplaceholder.typicode.com/todos/1');
//   const jsonFormatted = await data.json();
//   console.log(jsonFormatted);
  
  
// }
// disp();

// async function disp(){
//   const data  = await fetch('https://jsonplaceholder.typicode.com/todos/1');
//   console.log(data.headers.get('Content-Type'));
//   console.log(data.headers.get('via'));
//   return data.json();
  
  
// }
// disp().then(res => console.log(res));

//================================================================


// async function disp() {
//   return 'Hello';
// }

// disp().then(res => console.log(res));



//==================================================

// var aar=[10,20,30,40]
// function disp() {
// 	console.log(aar);
// 	console.log(this.aar);
//   return function(){
//     console.log(this);
//   }

// }


// disp()();

//======================================================

// var car= {
//   name:'verna',
//   getName(){
//     return this.name;
//   }
// };


// var name='swift';
// var getName = car.getName;
// console.log(this);
// console.log(getName());

//======================================================

// class Abc{
//   fname='bhushan';
//   lname='pawar';
//   address='Pune';
//   get name2() {
//     return this.address;
//   }
//   set name3(address){
//     console.log(address)
//     this.address= address;
//     console.log(this.address);
//   }
// }

// const newObj = new Abc();
// console.log(newObj.address,newObj.fname);
// console.log(newObj.name2)   // getter method calling way
// newObj.name3 = 'Dhule','aaa';     // setter method assiging value
// console.log(newObj.name2)

// //===========================================================
// import a,{b,c} from './b.js'
// console.log(a,b,c)


//================================================================

// Destructuring => elements discloused outside of structure

// const arr= [10,20,30,40,50];

// //classical
// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);
// console.log(arr[3]);
// console.log(arr[4]);


// // destructure

// const [a,b,c,d,e] = arr;
// console.log(a);

// const [,,,aa,] = arr;
// console.log(aa);
// //==================================================================


// const newObject ={
//   name: 'bhushan',
//   lname:'pawar'
// }

// //classical
// console.log(newObject.name);
// console.log(newObject.lname);


// //destructuring

// const {name,lname} = newObject;

// console.log(name);
// console.log(lname);

// const {name:fname,lname:surname} = newObject;
// console.log(fname)