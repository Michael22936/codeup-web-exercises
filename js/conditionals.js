"use strict";

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 */

// function userNumberInput() {
//     var userNumberAsk = confirm("Would you like to enter a number?");
//     if (userNumberAsk === true) {
//         var userNumber = Number(prompt("Pick any number?"));
//         if(isNaN(userNumber)){
//             alert("This is not a number. Please put in a number")
//         }
//         if (userNumber % 2 === 0) {
//             alert("Your number is even.")
//         } else if (userNumber % 2 === 1) {
//             alert("Your number is odd.")
//             } if (userNumber){
//              var userNumberPlusHundred = userNumber + 100
//              alert("This is your number plus 100")
//             } if (userNumber < 0) {
//                 alert("Your number is negative.")
//         } else if (userNumber > 0){
//                 alert("Your number is positive.")
//         }
//     }else {
//
//     }
// }

// userNumberInput();

function userNumberInput() {
    var userNumberAsk = confirm("Would you like to enter a number?");
    if (userNumberAsk === true) {
        var userNumber = Number(prompt("Pick any number?"));
        if (isNaN(userNumber)) {
            alert("This is not a number. Please put in a number")
        }
    }
        userNumberOddOrEven(userNumber);
        userNumberPlusHundred(userNumber);
        userNumberGreaterThanLessThan(userNumber);
}

    function userNumberOddOrEven(userNumber) {
        if (userNumber % 2 === 0) {
            alert("Your number is even.")
        } else if (userNumber % 2 === 1) {
            alert("Your number is odd.")
        }
    }


    function userNumberPlusHundred(userNumber) {
            if (userNumber){
                var userNumberPlusHundred = userNumber + 100;
                alert("This is your number plus hundred" + " " + userNumberPlusHundred)
            }
    }


    function userNumberGreaterThanLessThan(userNumber) {
        if (userNumber < 0) {
                alert("Your number is negative.")
        } else if (userNumber > 0){
                alert("Your number is positive.")
        }
    }

    userNumberInput();
/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined above, if the color passed is not
 * one of the ones defined above, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */

// function analyzeColor(str){
//     if(str === "blue"){
//         return "blue is the color of the sky"
//     }else if(str === "red"){
//         return "Strawberries are red"
//     }else{
//         return "I dont know anything about " + str
//     }
// }
//
// console.log(analyzeColor("dog"))

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color everytime the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message everytime you refresh the page
 */

// function analyzeColor(str){
//     if(str === "blue"){
//         return "blue is the color of the sky"
//     }else if(str === "red"){
//         return "Strawberries are red"
//     }else{
//         return "I dont know anything about " + str
//     }
// }
//
// console.log(analyzeColor(randomColor))

/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */

// function analyzeColor(str) {
//     switch (str) {
//         case "blue":
//             return "Thats the color of the sky";
//         break;
//         case  "red":
//             return "Apples are red";
//         break;
//         default:
//             return "I dont know anything about " + str
//
//     }
// }
//
// console.log(analyzeColor(randomColor))

/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

// function analyzeColor(str) {
//     var userColorChose = prompt("Pick a color.")
//     switch (str) {
//         case "blue":
//             alert ("Thats the color of the sky");
//             break;
//         case  "red":
//             alert("Apples are red");
//             break;
//         default:
//             alert("I dont know anything about " + str);
//
//     }
//
// }



/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */

// function calculatedTotal(luckynumber, price) {
//     if (luckynumber === 0){
//         return price;
//     }else if (luckynumber === 1){
//         return (price - (price * .1));
//     }else if (luckynumber === 2){
//         return (price - (price * .25));
//     }else if (luckynumber === 3){
//         return (price - (price * .35));
//     }else if (luckynumber === 4){
//         return (price - (price * .5));
//     }else {
//         return "free"
//     }
//
// }
//
// console.log(calculatedTotal(4, 100))
/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
// var luckyNumber = Math.floor(Math.random() * 6);
// var price = Number(prompt("What is your bill?"))
//
// function calculatedTotal(luckyNumber, price) {
//     if (luckyNumber === 0){
//         alert("You did not recieve a discount.");
//     }else if (luckyNumber === 1){
//         alert("This was your lucky number " + luckyNumber + " " + "this was your price before the discount " + price + " " + "this is your price after the discount" + " " + (price - (price * .1)));
//     }else if (luckyNumber === 2){
//         alert("This was your lucky number " + luckyNumber + " " + "this was your price before the discount " + price + " " + "this is your price after the discount" + " " + (price - (price * .25)));
//     }else if (luckyNumber === 3){
//         alert("This was your lucky number " + luckyNumber + " " + "this was your price before the discount " + price + " " + "this is your price after the discount" + " " + (price - (price * .35)));
//     }else if (luckyNumber === 4){
//         alert("This was your lucky number " + luckyNumber + " " + "this was your price before the discount " + price + " " + "this is your price after the discount" + " " + (price - (price * .5)));
//     }else {
//         return "free"
//     }
//
// }
//
// console.log(calculatedTotal(luckyNumber, price));