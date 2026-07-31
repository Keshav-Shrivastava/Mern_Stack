// Q1. Write a JavaScript program to determine given string is a palindrome or not?
let string = "madam";

function palindrome(str){
    
    return str === str.split('').reverse().join('');

}
console.log(palindrome("madam"));

// Q2. Write a JavaScript program to reverse a given string?
let str = "hello";
function reverseString(s) {
    return s.split('').reverse().join('');
}
console.log(reverseString(str));

// Q3. Write a JavaScript program to check if two given strings are anagrams of each other?