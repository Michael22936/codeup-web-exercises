(function() {
    "use strict";

    // create a circle object
    // get the area of a circle
    var circle = {
        radius: 3,

        getArea: function () {
            // TODO: complete this method
            // hint: area = pi * radius^2

            var area = Math.PI * Math.pow(this.radius, 2)

            return area; // TODO: return the proper value
        },

        // round the number if its true else just print out the entire number

        logInfo: function (doRounding) {
            // TODO: complete this method.
            // If doRounding is true, round the result to the nearest integer.
            // Otherwise, output the complete value
            if(doRounding) {
                console.log("Area of a circle with radius: " + this.radius + ", is: " + Math.round(circle.getArea()));
            } else{
                console.log("Area of a circle with radius: " + this.radius + ", is: " + circle.getArea());
            }

        }
    };

    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);

    console.log("=======================================================");
    // TODO: Change the radius of the circle to 5.

        circle.radius = 5;

    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);
})();
