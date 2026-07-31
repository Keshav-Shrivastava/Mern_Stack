// let marks = 65;
// let result;

// if (marks >= 40) {
//   result = "Pass";
// } else {
//   result = "Fail";
// }

let marks = 65;
let result = (marks>=40) ? "pass": "fail";
console.log(result)


// let number = 7;
// let type;

// if (number % 2 === 0) {
//   type = "Even";
// } else {
//   type = "Odd";
// }

let number=7;
let type = (number%2==0) ? "Even" : "Odd";
console.log(type)

// et age = 19;
// let message;

// if (age >= 18) {
//   message = "Eligible to drive";
// } else {
//   message = "Not eligible to drive";
// }

let age = 19;
let message = (age>=18) ? "Eligible to drive" : "Not eligible to drive";
console.log(message)


// let totalAmount = 1200;
// let discount;

// if (totalAmount > 1000) {
//   discount = 200;
// } else {
//   discount = 0;
// }

let totalAmount = 1200; 
let discount = (totalAmount>1000) ? 200 : 0;
console.log(discount)


// let hour = 11;
// let greeting;

// if (hour < 12) {
//   greeting = "Good Morning";
// } else {
//   greeting = "Good Day";
// }

let hour = 11;
let greeting = (hour<12) ? "GoodMorning" : "Good Day";
console.log(greeting)


// let score = 95;
// let isHighScore;

// if (score > 90) {
//   isHighScore = true;
// } else {
//   isHighScore = false;
// }

let score = 95;
let isHighScore = (score>90) ? true : false;
console.log(isHighScore)


// let isRaining = true;
// let action;

// if (isRaining) {
//   action = "Take an umbrella";
// } else {
//   action = "Enjoy the sun";
// }

let isRaining = true;
let action = (isRaining) ? "Take an umbrella" : "Enjoy the sun";
console.log(action)


// let speed = 85;
// let status;

// if (speed > 80) {
//   status = "Over-speeding!";
// } else {
//   status = "Normal speed";
// }

let speed = 85;
let status = (speed>80) ? "Over-speeding!" : "Normal speed";
console.log(status)

// let isLoggedIn = false;
// let buttonText;

// if (isLoggedIn) {
//   buttonText = "Logout";
// } else {
//   buttonText = "Login";
// }

let isLoggedIn = false;
let buttonText = (isLoggedIn) ? "logout" : "login";
console.log(buttonText)

// let a = 15;
// let b = 25;
// let max;

// if (a > b) {
//   max = a;
// } else {
//   max = b;
// }

let a = 15;
let b = 25;
let max = (a>b) ? a : b;
console.log(max)


// checkinhg anagram
let str1 = "listen";
let str2 = "silent";
let isAnagram = (str1.split("").sort().join("") === str2.split("").sort().join("")) ? true : false;
console.log(isAnagram);