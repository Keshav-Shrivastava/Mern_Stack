// let arr = [23,45,67,"Keshav",true]

// for(let i=0; i<arr.length; i++){
//     console.log(arr[i])
// }

// console.log(arr)

// for(let num of arr){
//     console.log(num)
// }

let arr = [2,6,1,3,9,4]
arr.push(12)
arr.pop()

// arr.sort((a,b)=>a-b)
// arr.splice(0,2)

// console.log(arr)

// let arr2 = [12,14,15,23]

// const combined = [...arr, ...arr2]

// console.log(combined)

// const names = ["Alice", "Bob", "Charlie"];
// const nameList = names.join(", ");
// console.log(nameList); // "Alice, Bob, Charlie"

const deeplyNested = [1, [2, [3, [4]]]];

console.log(deeplyNested.flat(Infinity))


