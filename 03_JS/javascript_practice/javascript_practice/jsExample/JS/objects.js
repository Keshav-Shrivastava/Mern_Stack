// let user = {
//     name: "keshav",
//     phone: 1234567890,
//     emailId: "ishu@gmail.com",
//     age: 23
// }

// console.log(user.phone) //read

// user.age = 23 //update

// console.log(user)

// delete user.age

// console.log(user)

// console.log(Object.keys(user))
// console.log(Object.values(user))

// const {name,age} = user;

// console.log(name,age)

// let user = {
//     name: "keshav",
//     age: 23,
//     phone: 123345677,
//     Address: "Delhi"
// }

// console.log(user)
// // console.log(user["age"])

// user.name = "priyanshu"
// user.study = "B-Tech"

// console.log(user)

let user = {
    name: "keshav",
    greeting: function(){
        console.log(`Greeting for the day ${this.name}`)
    }
}

// user.greeting()

// const car = {
//   make: "Honda",
//   model: "Civic",
//   year: 2021
// };

// const keys = Object.keys(car)

// for(let key of keys){
//     console.log(`Key: "${key}" and the  Value: "${car[key]}"`)
// }

// const keys = Object.keys(user);
// // keys is now: ["name", "age", "isStudent"]

// // Now we can use a simple for...of loop on this new array
// for (const key of keys) {
//   // To get the value, we use bracket notation on the original object
//   console.log(`The key is "${key}" and the value is "${user[key]}".`);
// }


Object.prototype.isInherited = true;
const person = {
    name: "Bob"
};

for (const key in person) {
    console.log(key);
}