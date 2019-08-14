(function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */

    var person = {};

    person.firstName = "Michael";
    person.lastName = "McDonnell";

    console.log(person.firstName);
    console.log(person.lastName);

    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */

    person.sayHello = function (input1, input2) {
        return "Hello from " + input1 + " " + input2 + "!"
    }

    console.log(person.sayHello(person.firstName, person.lastName));

    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    var shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];

    // console.log(shoppers[0]);

    shoppers.forEach(function (shopper) {
        console.log(shopper.name + " " + shopper.amount + " " + moneyAfterDiscount(shopper.amount));
    });

    function moneyAfterDiscount(input) {
        var inputNum = parseFloat(input)
        if (inputNum >= 200){
            var inputNumDiscount = inputNum - (inputNum * .12)
        // console.log(inputNum - (inputNum * .12))
            return " 12% " + inputNumDiscount
        } else{
            return inputNum;
        }
    }
    // moneyAfterDiscount(250);


    //
    // var cars = [
    //     {
    //         make: "Toyota",
    //         model: "Camry",
    //         features: ["Automatic Windows", "Bluetooth Connectivity", "GPS Navigation"],
    //         owner: {
    //             name: "Jane Doe",
    //             age: 30
    //         }
    //     },
    //     {
    //         make: "Honda",
    //         model: "Accord",
    //         features: ["Automatic Windows", "Great Gas Mileage", "AM/FM Radio"],
    //         owner: {
    //             name: "John Doe",
    //             age: 31
    //         }
    //     }
    // ];
    //
    // // console.log("The first car is a " + cars[0].make + " " + cars[0].model + ".");
    // // console.log("The owner of the second car is " + cars[1].owner.name + ".");
    //
    // console.log("Here are all the features of all the cars:");
    // shoppers.forEach(function (shopper) {
    //     shopper.features.forEach(function(shopper) {
    //         console.log(amount);
    //     });
    // });

    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */

    var books = [
        {title:"The Maze Runner",
            author:{
                firstName: "James",
                lastName: "Dashner"
            }},
        {title: "Harry Potter",
            author:{
                firstName: "J. K.",
                lastName:"Rowling"
            }},
        {title:"Where the Red Fern Grows",
            author:{
                firstname: "Wilson",
                lastName:"Rawls"

            }},
        {title:"The Great Gatsby",
            author:{
                firstName:"F. Scott",
                lastName:"Fitzgerald"
            }},
        {title:"My Hero Acadamia",
            author:{
                firstName:"Kohei",
                lastName:"Horikoshi"
            }},
    ]

    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */

    books.forEach(function (book, index) {
        console.log(index + 1);
        console.log(book.title);
        console.log(book.author.firstName + " " + book.author.lastName);
    })

    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */



})();
