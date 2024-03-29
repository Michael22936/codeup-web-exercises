(function () {



"use strict";

/**
 * TODO:
 * Create a function called 'sayHello' that takes a parameter 'name'.
 * When called, the function should return a message that says hello to the passed in name.
 * Example
 * > sayHello("codeup") // returns "Hello, codeup!"
 */

// function sayHello(name) {
//     return "Hello" + " " + name;
// }

/**
 * TODO:
 * Call the function 'sayHello' and pass your name as a string literal argument.
 * Store the result of the function call in a variable named 'helloMessage'.
 *
 * console.log 'helloMessage' to check your work
 */


// var helloMessage = sayHello("Michael")
//
// console.log(helloMessage)

/**
 * TODO:
 * Store your name as a string in a variable named 'myName', and pass that
 * variable to the 'sayHello' function. You should see the same output in the
 * console.
 */

// var myName = "Michael M";
//
// console.log(sayHello(myName));


// Don't modify the following line, it generates a random number between 1 and 3
// and stores it in a variable named random
var random = Math.floor((Math.random() * 3) + 1);

/**
 * TODO:
 * Create a function called 'isTwo' that takes a number as a parameter.
 * The function should return a boolean value based on whether or not the passed
 * number is the number 2.
 *
 * Example
 * > isTwo(1) // returns false
 * > isTwo(2) // returns true
 * > isTwo(3) // returns false
 *
 * Call the function 'isTwo' passing the variable 'random' as a argument.
 *
 * console.log *outside of the function* to check your work (you should see a
 * different result everytime you refresh the page if you are using the random
 * number)
 */

// function isTwo(number) {
//     return number === 2;
// }
//
// console.log(isTwo(2))
// console.log(isTwo(random), random)

/**
 * TODO:
 * Create a function named 'calculateTip' to calculate a tip on a bill at a
 * restaurant. The function should accept a tip percentage and the total of the
 * bill, and return the amount to tip
 *
 * Examples:
 * > calculateTip(0.20, 20) // returns 4
 * > calculateTip(0.25, 25.50) // returns 6.37
 * > calculateTip(0.15, 33.42) // returns 5.013
 */

// function calculatedTip(percent, bill) {
//     return percent * bill;
// }
//
// console.log(calculatedTip(1, 10.25))

/**
 * TODO:
 * Use prompt and alert in combination with your calculateTip function to
 * prompt the user for the bill total and a percentage they would like to tip,
 * then display the dollar amount they should tip
 */
// function calculatedTip(totalBill, tipInPercent) {
//     var totalBill = prompt("What is your bill total?");
//     var tipInPercent = prompt("What tip in precentage do you want to use?");
//     return alert("Your tip amount is" + " " + "$" + totalBill * (tipInPercent / 100));
// }
//
// calculatedTip();



/**
 * TODO:
 * Create a function named `applyDiscount`. This function should accept a price
 * (before a discount is applied), and a discount percentage (a number between 0
 * and 1). It should return the result of applying the discount to the original
 * price.
 *
 * Example:
 * > var originalPrice = 100;
 * > var dicountPercent = .2; // 20%
 * > applyDiscount(originalPrice, dicountPercent) // 80
 *
 * > applyDiscount(45.99, 0.12) // 40.4712
 */

// function applyDiscount(original, discount) {
//     return original - (original * discount)
// }
//
// console.log(applyDiscount(100, .2))








// FUNCTIONS DRILLS

function isOdd(random) {
    return random % 2 === 1;
}

console.log(isOdd(random), random);

function isEven(random) {
    return random % 2 === 0;
}

console.log(isEven(random), random);

function identity(input) {
    return input;
}

console.log(identity(12))

function isFive(number) {
    return number === 5
}

console.log(isFive(5));

function addFive(input) {
    return input + 5;
}

console.log(addFive(random));

function isMultipleOfFive(input) {
    return input % 5 === 0;
}

console.log(isMultipleOfFive(5));

function isThree(input) {
    return input === 3;
}

    console.log(isThree(random));

function addThree(input) {
    return input + 3;
}

console.log(addThree(random));

function isMultipleOfThree(input) {
    return input % 3 === 0;
}

console.log(isMultipleOfThree(3));

function isMultipleOfThreeAndFive(input) {
    return input % 3 === 0 && input % 5 === 0;
}

console.log(isMultipleOfThreeAndFive(15));

function isMultipleOf(target, n) {
    return n % target === 0;
}

console.log(isMultipleOf(5, 15));

function isTrue(boolean) {
    return boolean === 0;
}

console.log(isTrue(0));

function isFalse(boolean){
    return boolean < 5;
}

console.log(isFalse(9))
})();