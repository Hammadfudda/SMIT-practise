// interviewer question

// var
// re-decleration : (y)
// re-intialization :(y)
// block scope:(n)
// hoisting : (y)

// let
// re-decleration :(n)
// re-intialization :(y)
// block scope:(y)
// hoisting : (n)

// const
// re-decleration:(n)
// re-intialization:(y)
// block scope:(y)
// hoisting : (n)

// Ternary operator
// let condition = false;
// condition ?  console.log("True"):console.log("false");

// let age = 18;
// let studetnCard = true;

// age > 17
// ? console.log("allowed")
// :studetnCard
// ? console.log("studentCArd")
// :console.log("not allow")

// age > 17 || studetnCard ? console.log("allowed"):console.log("not allowed")
// age > 17 && studetnCard ? console.log("allowed"):console.log("not allowed")

// circuits

// 7let condition = 0 ;

// pass by reference
// let a = {
//     id
// }

// spread operator (...)

// let a = [1,3,4,5];
// let b = ["k","h","y"]
// let c =[...a,...b]
// console.log(c)

// let a ={
//     age: 10,
//     Name: "Hammad",
// };
// let b = {
//     color : "red",
//     roll : "Asistant",
// };
// let c = {
//     ...a,
//     ...b,
// }

// console.log(c)

// rest operator
// function abc(a,b,c,...abc){
//     console.log(a,b,c,abc)
// }
// abc(1,2,3,4,5,6,7,8,9,0);

// structure Array and objects
// array
// let a = [1,2,3,4]
// // let [first,second,third,fourth]=a
// let [first,second, ,fourth]=a
// console.log(fourth)

// object
// let b ={
//     id:123456,
//     name:"hammad",
//     age:17,
// }

// let {id,name,age}= b;
// console.log(id,name,age);

// object methods

// let b ={
//     name:"Hammad",
//     id:12345,
//     age:34,
// }
// let keys = Object.keys(b);
// console.log(keys)
// let values = Object.values(b);
// console.log(values)
// let entries = Object.entries(b);
// console.log(entries)
// freeze function is use to freeze the object mean any one do not changes in object
// let freeze = Object.freeze(b);
// console.log(freeze)

//heigher order and call back function

// function abc(a){
//     return a;
// }
// function xyz(b){
//    console.log(b)
// }

// xyz(abc("hello:)"))

// heigher order

// jo function apne parameter mai koi dosra function call kr rha ho heigher order function kehte hai

// call back function
// jo function kesi function ke parameter mai call ho rha ho usse call back function kehte hai

// heigher order

// function abc(){
//     console.log("abc")

// call back

//     return function(){
//         console.log("return function")
//     }
// }
// abc()();

// (a)Arrow function
// (b)Closures
// (c)lexical scoping
//(d)Default parameters 

// lexical scoping

// let a = "xyz";
// function abc(){
//     let a = "abc"
//     console.log(a);
// }
// abc()

// let a = "xyz";
// function abc(){
//       console.log(a);
// }
// abc()

// default parameters

// wrong
// function abc(b=1){
//     let a = 420;
//     console.log(a*b)
// }
// abc()

// wrong
// function abc(b){
//     let a = 420;
//     console.log(a*b)
// }
// abc(10)

// perfect
// function abc(b=1){
//     let a = 420;
//     console.log(a*b)
// }
// abc(12)

// arrow function

// let abc = () => {
// console.log("arrow function")
// }
// abc()

// let abc = a => {
//     console.log(" DEFINATION = we want to one para meter so we don not need to made a round braket")
// }
// abc()

// return second method only arrow function 

// let abc= a => "agr sirf return statement chalani ho to yeh method bht suitable hai";

// let a = abc()
// console.log(a)

// Test function
// let a = _ => _
// let abc = a("This is arrow function")
// console.log(abc)

// array function

// (a)Map
// (b)filter
// (c)forEach
// (d)reduce
// (e)some
// (f)every
// (g)find
// (h)findIndex
// (i)flat

// Map

// let a = [1,2,3,4,5,6]
// a.map((x) =>{ 
// console.log(x)
// });

// let a = [
//   {
//     name : "hammad",
//     id:1234,
//     fee:500,
//     tax:5%
// },
//   {
//     name : "charia",
//     id:1234,
//     fee:500,
//     tax:5%
// },
//   {
//     name : "lassan",
//     id:1234,
//     fee:500,
//     tax:5%
// },  {
//     name : "taha",
//     id:1234,
//     fee:500,
//     tax:5%
// },
//   {
//     name : "raza",
//     id:1234,
//     fee:500,
//     tax:5%
// }
//  , {
//     name : "shayaan",
//     id:1234,
//     fee:500,
//     tax:5%
// }
// ] 

// let count = 0;
// a.forEach((x,i,u){
// let onePercentage = x.fee/100;
// count+=x.fee + tax * x.onePercentage; 
    
// }
// );
// console.log(a,count)


// // filter
// let b = a.map ((x,i,a)=>{
// return x.id
// })
// console.log()

// promise

// let zingarKaPromise = () => {
//     return new Promise((resolve, reject) => {
//       let koiKaamNikalwanahai = false;
//       // dost soxh rha hai
//       setTimeout(() => {
//         if(koiKaamNikalwanahai){
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
//         }
//       })
//     })
// }

// rest operator
// const [first, ...rest] = [1, 2, 3, 4];
// console.log(rest); // Outputs [2, 3, 4]

// function addNumbers(...numbers) {
//   console.log(numbers); // Outputs the array of numbers
//   return numbers.reduce((sum, num) => sum + num, 0);
// }

// addNumbers(1, 2, 3); // Outputs [1, 2, 3] and returns 6

// spread operator
const numbers = [1, 2, 3];
const maxNumber = Math.max(...numbers); // Spreads the array into 1, 2, 3
console.log(maxNumber); // Outputs 3
