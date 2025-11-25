//-------------------QUESTION 1-------------------//
// Accept two numbers and print the greatest between them.

// let prompt = require("prompt-sync")()

// let a = +prompt("Enter first number: ");
// let b = +prompt("Enter second number: ");

// if(a > b) console.log(`Greatest number is ${a}`);
// else console.log(`Greatest number is ${b}`);

//-------------------QUESTION 2-------------------//
// Accept an Integer and check whether it is even or odd.

// let prompt = require("prompt-sync")()

// let a = +prompt("Enter a number: ");

// if(a === 0) console.log("Zero");
// else if(a % 2 === 0 ) console.log("Even");
// else console.log("Odd");

//-------------------QUESTION 3-------------------//
// Accept Name and Age from the user and check if the user is a valid voter or not.

// let prompt = require("prompt-sync")()

// let name = prompt("Enter name: ");
// let age = +prompt("Enter age: ");

// if(age >= 18) console.log(`${name} is a valid voter`);
// else console.log(`${name} is not a valid voter`);

//-------------------QUESTION 4-------------------//
// Accept 3 numbers and print the greatest among them.

// let prompt = require("prompt-sync")()

// let num1 = +prompt("Enter first number: ");
// let num2 = +prompt("Enter second number: ");
// let num3 = +prompt("Enter third number: ");

// if(num1 > num2 || num1 > num3) console.log(`Greatest is ${num1}`);
// else if(num2 > num1 || num2 > num3) console.log(`Greatest is ${num2}`);
// else console.log(`Greatest is ${num3}`);

//-------------------QUESTION 5-------------------//
// Accept a year and check if it is a leap year or not.

// let prompt = require("prompt-sync")()

// let year = +prompt("Enter a year: ");

// if(year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) console.log("Leap Year");
// else console.log("Not Leap Year");

//-------------------QUESTION 6-------------------//
// Count number of days in a given month of a year

// let prompt = require("prompt-sync")();

// let year = +prompt("Enter a year: ");
// let month = +prompt("Enter a month");
// let days = 0;

// if (month === 2) {
//   if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
//     days = 29;
//     console.log(days);
//   }
//   else{
//     days = 28;
//     console.log(days);
//   }
// }

// if(month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10 || month === 12){
//     days = 31;
//     console.log(days);
// }
// else if(month === 4 || month === 6|| month === 9 || month === 11){
//     days = 30;
//     console.log(days);
// }

//-------------------QUESTION 7-------------------//
// Shop discount - 
// 0 - 5000 -> 0% discount
// 5001 - 7000 -> 5% discount
// 7001 - 9000 -> 10% discount
// 9000+ -> 20% discount


// let prompt = require("prompt-sync")();

// let price = +prompt("Enter the price: ");
// let discount = 0;
// let fp = 0;

// if(price > 0 && price <= 5000){
//     discount = 0;
//     console.log(`The final price is ${price}`);
// }

// else if(price > 5000 && price <= 7000){
//     discount = 5;
//     fp = price - (price * (discount / 100));
//     console.log(`The final price is ${fp}`)
    
// }

// else if(price > 7000 && price <= 9000){
//     discount = 10;
//     fp = price - (price * (discount / 100));
//     console.log(`The final price is ${fp}`);
// }

// else if(price > 9000){
//     discount = 20;
//     fp = price - (price * (discount / 100));
//     console.log(`The final price is ${fp}`);
// }
// else{
//     console.log("Invalid Amount");
// }


//-------------------QUESTION 8-------------------//
// Bijlee Bill

// upto 100 -> Rs 4.2/unit
// 101-200 -> Rs 6/unit
// 201-400 -> Rs 8/unit
// 400+ -> Rs 13/unit

// function calculateBijleeBill(units){
//     let bill = 0;


//     if (units > 400) {
//         bill += (units - 400) * 13;
//         units = 400;
//     }
//     if (units > 200) {
//         bill += (units - 200) * 8;
//         units = 200;
//     }
//     if (units > 100) {
//         bill += (units - 100) * 6;
//         units = 100;
//     }

//     bill += units * 4.2;

//     return bill;
// }

// console.log(calculateBijleeBill(250));
