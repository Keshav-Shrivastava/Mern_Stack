//Write a program that determines whether a given number is positive or negative.
let a = 4;
if(a>0){
    console.log("Its a positive a Number")
}
else{
    console.log("Its a negative number")
}

// Write a program that checks if a number is even or odd.
if(a%2==0){
    console.log("Its a even")
}
else{
    console.log("Its a odd")
}

// - Write a program to determine the greater of two numbers.
let b = 8;
if(a>b){
    console.log("First number is gratest")
}
else{
    console.log("Second is greatest")
}

//Write a program that transforms a numerical grade to a letter grade (e.g., grade 10 should display “A”).
let num = 10;
switch(num){
    case 10:
        console.log("A");
        break; 

        case 9:
        console.log("B");
        break;  

        case 8:
        console.log("C");
        break;  

        case 7:
        console.log("D");
        break;  

        case 6:
        console.log("E");
        break;

        case 5:
        console.log("F");
        break;

}

//- Write a program that calculates the ticket price based on age with the following conditions:
    // - Age below 12 → ticket price = 5
    // - Age below 18 → ticket price = 10
    // - Age below 60 → ticket price = 20
    // - Age over 60 → ticket price = 15

let age = 65;
if(age<12){
    console.log("Ticket price is 5");
}

else if(age<18){
    console.log("Ticket price is 10");
}       

else if(age<60){
    console.log("Ticket price is 20");
}

else{
    console.log("Ticket price is 15");
}

// Write a program that determines if a year is a leap year

let year = 2020;
if(year%4==0 && year%100!=0 || year%400==0){
    console.log("Its a leap year");
}
else{
    console.log("Its not a leap year");
}

// - Write a program that calculates a discount based on the purchase amount.
//     - Prices ≥ 100 → discount = 20
//     - Prices ≥ 50 → discount = 10
//     - Otherwise → discount = 0

let price = 120;
if(price>=100){
    console.log("Discount is 20");      
}
else if(price>=50){
    console.log("Discount is 10");
}
else{
    console.log("Discount is 0");
}

//Write a program that greets the user based on the time of day.
// Display “Good morning”, “Good afternoon”, or “Good evening” depending on when the code runs

let time = new Date().getHours();
if(time<12){
    console.log("Good morning");    
}
else if(time<18){
    console.log("Good afternoon");
}
else{
    console.log("Good evening");
}

// - Write a program that calculates the Body Mass Index (BMI) and categorizes it.
//     - Formula: BMI = weight / (height * height)

let weight = 70;

let height = 1.75;

let bmi = weight / (height * height);   

if(bmi<18.5){
    console.log("Underweight");
}   
else if(bmi<24.9){
    console.log("Normal weight");
}   

else if(bmi<29.9){
    console.log("Overweight");
}

