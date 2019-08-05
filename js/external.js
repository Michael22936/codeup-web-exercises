"use strict";

console.log("Hello from external JavaScript")

alert("Welcome to my Website!")

var userInput = prompt('Whats your favorite color???');

alert("Awesome my favorite color is" + " " + userInput + " " + "too" )


// Excercise three

// You have rented some movies for your kids: The little mermaid (for 3 days), Brother Bear (for 5 days, they love it), and Hercules (1 day, you don't know yet if they're going to like it). If price for a movie per day is $3, how much will you have to pay?

var dailyRentalRateDollars = 3;

var littleMermaidDaysRented = prompt("How many days did you rent Little Mermaid for???");

var brotherBearDaysRented = prompt("How many days did you rent Brother Bear for???");

var herculesDaysRented = prompt("How many days did you rent Hercules for???")

var totalRentalCost = (Number(littleMermaidDaysRented) + Number(brotherBearDaysRented) + Number(herculesDaysRented)) * Number(dailyRentalRateDollars);

alert("This is your total." + " " + "$" + totalRentalCost)

// Suppose you're working as a contractor for 3 companies: Google, Amazon and Facebook,
// they pay you a different rate per hour. Google pays $400, Amazon $380, and Facebook $350.
//How much will you receive in payment for this week? You worked 10 hours for Facebook, 6 hours for Google and 4 hours for Amazon.


var googleHourlyRateDollars = prompt("How much did you make from Google hourly?");

var amazonHourlyRateDollars = prompt("How much did you get paid from Amazon hourly?");

var facebookHourlyRateDollars = prompt("How much did you get paid from Facebook hourly");

var googleHours = prompt("How many hours did you work at Google?");

var amazonHours = prompt("How many hours did you work at Amazon?");

var facebookHours = prompt("How many hours did you work at Facebook?");


var totalPayment = googleHours * googleHourlyRateDollars;

var totalPayment = amazonHours * amazonHourlyRateDollars;

var totalPayment = facebookHours * facebookHourlyRateDollars;

var totalPayment;

alert("This is your total" + " " + "$" + totalPayment)

// A student can be enrolled to a class only if the class is not full and the class schedule does not conflict with her current schedule.

var classIsNotFull = confirm("Is the class full?");// boolean
console.log(classIsNotFull)

var classScheduleDoesNotConflict = confirm("Does this conflict your schedule?"); // boolean
console.log(classScheduleDoesNotConflict)

var studentEnrolled = classIsNotFull && classScheduleDoesNotConflict;

alert("You are in the class!!!")

// A product offer can be applied only if people buy more than 2 items, and the offer has not expired. Premium members do not need to buy a specific amount of products.

var numberOfItems = prompt("How many items do you have?"); // number

var offerIsValid = confirm("Is this offer valid?");// boolean
console.log(offerIsValid)

var isPremiumMember = confirm("Are you a premium member?"); // boolean
console.log(isPremiumMember)

var productDiscountApplied = offerIsValid && (isPremiumMember || numberOfItems > 2);

alert(productDiscountApplied)