// for(var i = 0; i < 10 ; i++ ){
//     console.log("loop"+i)
// }

// var a = [
//      "ahmedraza",
//      "Ahmed Abu Bakar",
//  "hammad",
//  "Yaseen"
// ]
// for( var i = 0 ; i < a.length ; i++){
//     console.log(a[i])
// }

// for( var a = 2; a < 20 ; a++ ){
//     console.log("loop"+a)
// }

// var a = [
// /      "ahmedraza",
//      "Ahmed Abu Bakar",
//  "hammad",
//  "Yaseen",
//  "danish",
//  "aram",
//  "ahmedraza",
//      "Ahmed Abu Bakar",
//  "hammad",
//  "Yaseen",
//  "danish",
//  "aram",
//  "ahmedraza",
//      "Ahmed Abu Bakar",
//  "hammad",
//  "Yaseen",
//  "danish",
//  "aram",
//  "ahmedraza",
//      "Ahmed Abu Bakar",
//  "hammad",
//  "Yaseen",
//  "danish",
//  "aram",

// ]

// for(var i = 4; i < a.length ; i++){
//     console.log(a[i])
// }

// var a = [
//      "ahmedraza",
//      "Ahmed Abu Bakar",
//  "hammad",
//  "Yaseen",
//  "danish"
// ]

// var b = "hammad"
// for(var i = 0 ; i < a.length ; i++ ) {
//     if( a[i]===b) {
//         console.log("Word found" , a[i] )
//     }
// }

// var a = [
//     "ahmedraza",
//     "Ahmed Abu Bakar",
// "hammad",
// "Yaseen",
// "danish"
// ]

// var b = "hammad"

// var found = false

// for( var i = 0 ; i < a.length ; i++){
//   if( a[i]===b)
//   found = true
// }

// if ( found == true){
// console.log("available")
// }
// else {
//     console.log("not available")
// }

// var a  = [ "a", "b","c","d","e"]
// var b = [ 1,2,3,4,5]
// var c = []
// for( var  i = 0 ; i < a.length ; i++){
//     for( var j = 0 ; j <b.length ; j++ ){
//     console.log(a[i],b[j])
//     c.push[a[i]+b[j]]
//     console.log(c)
//     }
// }

// var a = "KARACHI"
//  var firstletter = a.slice(0,1);
//  firstletter = firstletter.toUpperCase();
//  var lastletter = a.slice(1);
//  lastletter = lastletter.toLowerCase();
//  var b = firstletter + lastletter
//  console.log(b)

// var a = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi, asperiores perferendis? Omnis recusandae hic officiis nesciunt labore, sunt vel ipsam id ab eos amet minima ea deserunt mollitia aliquam repellat!"
// for(var i = 0; i< a.length; i++ ){
// // finding text
// var word = a.slice(i,i + 11);
// console.log(word);
// if(word == "consectetur"){
// console.log("word found")

// var starting = a.slice(0,i)
// var ending = a.slice(i+11)

// var b = starting +"ABCDE" + ending
// console.log(b);
// break;
// }
// }

//  var a = Math.random();
//  console.log(a)
// }

// var a = 0;
// for(var i = 0; i < 10; i++){
// a+=3;
// }
// console.log(a)

// ==============

//  function(abc){
//     var a = "abc"
//  }
//  console.log(a)
// abc();

// if(true){
//     if(true){
//         var a = "abc"
//     }
//     console.log(a)
// }

//   function login(){
//     var a = 10;
//     var b = 20;
//     var c = 30;
//     if (a==b) {
//         return false;
//     }
// }
//     abc();
//     console.log(login)

//  function chapter

// 1
// function abc(){
//   alert("abc")
// }
// abc();

// 2
// function func1(){
// console.log("function1");
// }

// function func2(){
//   console.log("function2");
//   }
//   function playall(){
//     console.log("function3");
//     }

// 3
// function discount(price,discpercentage){
// var percentageamount = (price/10)*discpercentage
// var finalamount = price - percentageamount
// console.log(finalamount)
// }

// discount(1000,100);
// discount(2000,400);
// discount(5000,500);

// var amounts = [1,231,45,612,3,456,123,4,654,21]

// var sum = 0
// for(var i = 0 ; i<amounts.length; i++) {
// sum += amounts [i];
// }
// console.log("answer"+sum)

// var amount = [12,45,78,54,4,54,565,8,9,7,87,54]
// if val <50, so multiply by 2
// if val >50, so multiply by 3
//  calculate the total multiply amount

// = = = = ==           ======

// var amount = [12,45,78,54,4,54,565,8,9,7,87,54]
// var sum = 0
// for(var i = 0 ; i <amount.length ; i++ ){
//     if(amount[i] < 50){
//         sum += amount[i]*2;
//         console.log(sum)
//     }else{
//         sum += amount[i]*3;
//         console.log(sum)
//     }
// }

// var array = ["UIV","TIV","QWE","TRT"]
// check the string including "T" and push in other array and return the array

// var array = ["UIV","TIV","QWE","TRT"]
// function solve(){
// var arra =[];
// for(var i = 0 ; i < array.length ; i++){
//     if(array[i].includes("T"))
//     arra.push(array[i])

// }
// return arra;
// }
// var a = solve();
// console.log(a)

// Write a function which tells letter counts of (word).

// write a function which tells that the word which is passed in the arguement is palindrome or not (same pronounciation from start to end and from end to start), example : Mom, Madam. these are palindrome.

// create a function that takes 2 peramters, in first perameter take date and in second peramter take number of days
// the task is showing the date after the counting of second peramter according the date of first peramter.
// write a function which tells that the word which is passed in the arguement is palindrome or not (same pronounciation from start to end and from end to start), example : Mom, Madam. these are palindrome.

// create a function that takes 2 peramters, in first perameter take date and in second peramter take number of days
// the task is showing the date after the counting of second peramter according the date of first peramter.

// write a function name calculateSquareRoot taking 1 perameter, calculate square root of the number which is given in perameter. and return the value.

// Write a JavaScript program to display the current day and time in the following format.
// Sample Output : Today is : Tuesday.
// Current time is : 10 PM : 30 : 38
// function showtime(){
// var dt = newdate();
// var arr = ["sunday","monday","tuesday","wednesday","thursday","friday","saturday"]
// };
// var dayindex = dt.getday()
// console.log("today date is :"+ arr[dayindex])

// Write a JavaScript program to calculate the days left before Eid-ul-Fitr.

// +++++++++++++++++++++++++++++

// chapter 39
// switch case
// var day = prompt("Enter your day").toLocaleLowerCase();
// switch(day){
//     case"monday":
//     console.log("Monday switch case");
//     break
//     case"tuesday":
//     console.log("Tuesday switch case");
//     break
//     case"wednesday":
//     console.log("wednesday switch case");
//     break
//     case"thursday":
//     console.log("Thursday switch case");
//     break
//     case"Friday":
//     console.log("Friday switch case");
//     break
//     case"Saturday":
//     console.log("Satuday switch case");
//     break
//     case"Sunday":
//     console.log("Sunday switch case");
//   default:
//     console.log("Default");
// }

// var rollNo = parseInt(prompt("Enter your roll number"));
// switch (rollNo) {
//   case 2231:
//   case 2236:
//    alert("Your fees is paid");
//     break
//   case 2232:
//   case 2237:
//    alert("Your fees is  partially paid");
//     break
//   case 2233:
//   case 2238:
//     alert("Your fees is  Un paid");
//     break
//   case 2234:
//   case 2239:
//     alert("Your fees is  wave");
//     break
//   default:
//     alert("Default");
// }
z