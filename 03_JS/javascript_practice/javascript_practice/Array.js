// const arr =[1,2,3,4,5];
// console.log(typeof arr); // object


// const arr1 = ['a','b','c','d'];
// arr1.push('e'); // add element at the end
// console.log(arr1);
// arr1.pop(); // remove last element
// console.log(arr1);
// arr1.shift(); // remove first element
// console.log(arr1);
// arr1.unshift('z'); // add element at the beginning
// console.log(arr1);

// const arr = ["A","B","C","D"];
// // arr = ["E","F","G","H"]; // This will throw an error because arr is a constant and cannot be reassigned.

// for (const element of arr) {
//     console.log(element);
// }

// const arr1 = ["A","B","C","D"];
// arr1[3] = "E"; // This is allowed because we are modifying the contents of the array, not reassigning the variable.
// console.log(arr1); // Output: ["A","B","C","E"]

// const arr2 = Array.from("Hello"); // This creates an array from the string "Hello"
// console.log(arr2); // Output: ["H", "e", "l", "l", "o"]

// const arr3 = Array.from([2,3,4,5], x => x * 2); // This creates a new array by applying the function x => x * 2 to each element of the original array [2,3,4,5]
// console.log(arr3); // Output: [4, 6, 8, 10]

const number = [34,2,5,95,1];
number.sort((a,b) => a-b); 
console.log(number);