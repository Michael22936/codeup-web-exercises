(function(){
    "use strict";

    /**
     * TODO:
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */

    //hold all names
    var names = ['Michael', 'Matt', 'Mark', 'David'];

    /**
     * TODO:
     * Create a log statement that will log the number of elements in the names
     * array.
     */

    //tells you how long thw array is
    console.log(names.length);

    /**
     * TODO:
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     */

    //prints out the names at the index
    console.log(names[0], names[1], names[2], names[3]);

    /**
     * TODO:
     * Write some code that uses a for loop to log every item in the names
     * array.
     */

    //logs every name name in the array
    var i;
    
    for (i = 0; i < names.length; i++){
        console.log(names)
    }

    /**
     * TODO:
     * Refactor your above code to use a `forEach` loop
     */

    //same thing as above but with a forEach loop
    names.forEach(function (name) {
        console.log(name)
    });

    /**
     * TODO:
     * Create the following three functions, each will accept an array and
     * return an an element from it
     * - first: returns the first item in the array
     * - second: returns the second item in the array
     * - last: returns the last item in the array
     *
     * Example:
     *  > first([1, 2, 3, 4, 5]) // returns 1
     *  > second([1, 2, 3, 4, 5]) // returns 2
     *  > last([1, 2, 3, 4, 5]) // return 5
     */

    //returns just the first name
    function first(array) {
        console.log(array[0]);
    }
    first(names);

    //returns just the second name
    function seconds(array) {
        console.log(array [1]);
    }
    seconds(names);

    //returns the last name
    function last(array) {
        console.log(array[3]);
    }
    last(names);

})();
