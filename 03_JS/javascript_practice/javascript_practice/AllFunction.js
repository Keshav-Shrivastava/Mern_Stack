// ### Q1. Simple Square Calculator

// Write a function `square(number)` that calculates and returns the square of a number (the number multiplied by itself).

function square(number) {
  return number * number;
}

// Q21. Temperature Converter
// Write two standard functions:
// 1. celsiusToFahrenheit(celsius) that takes a temperature in Celsius and returns it in Fahrenheit.
// 2. fahrenheitToCelsius(fahrenheit) that takes a temperature in Fahrenheit and returns it in Celsius.
function celsiusToFahrenheit(celsius) {
  return (celsius * 9/5) + 32;
}

function fahrenheitToCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5/9;
}

//Q22. Shopping Cart Tax & Total Calculator
// Write a function calculateTotal(price, quantity, taxRate) that takes the item price, quantity bought, and local tax percentage (e.g., 5 for 5%). The function should calculate and return the final total price after tax.
// Example: calculateTotal(10, 2, 5) should return 21.
function calculateTotal(price, quantity, taxRate) {
  const subtotal = price * quantity;
  const taxAmount = subtotal * (taxRate / 100);
  return subtotal + taxAmount;
}

// **Q23. Grade Assigner**
// Write a function `getGrade(score)` that takes a numerical test score (0 to 100) and returns the corresponding letter grade using `if/else` conditions:

// - 90 to 100 $\rightarrow$ `"A"`
// - 80 to 89 $\rightarrow$ `"B"`
// - 70 to 79 $\rightarrow$ `"C"`
// - 60 to 69 $\rightarrow$ `"D"`
// - Below 60 $\rightarrow$ `"F"`

function getGrade(score) {
  if (score >= 90 && score <= 100) {
    return "A"; 
    } else if (score >= 80 && score < 90) {
    return "B";
    } else if (score >= 70 && score < 80) {
    return "C";
    } else if (score >= 60 && score < 70) {
    return "D";
    } else {
    return "F";
  }
}

// Q24. Age in Days Calculator
// Write a function calculateAgeInDays(ageInYears) that takes a person's age in years and returns their approximate age in days (assume 365 days per year, ignoring leap years).
// Example: calculateAgeInDays(20) should return 7300.  
function calculateAgeInDays(ageInYears) {
  return ageInYears * 365;
}

// **Q25. Simple Password Validator**
// Write a function `isPasswordValid(password)` that checks if a user's password meets basic security criteria. It should return `true` if all conditions are met, otherwise `false`:

// - Password must be **at least 8 characters** long.
// - Password must **not** contain any blank spaces (`" "`).
function isPasswordValid(password) {
  if (password.length < 8) {
    return false;
  }
  if (password.includes(" ")) {
    return false;
  }
  return true;
}

//A function which accept infinite number of arguments

function infinite(...number) {
  let total = 0;
  for (let i = 0; i < number.length; i++) {
    total += number[i];
  }
    return total;
  // return number.reduce((a, b) => a + b, 0);
}

console.log(infinite(1,2,3,4,5,6,7,8,9,10));
