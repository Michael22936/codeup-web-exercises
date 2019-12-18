(function(){

    //makes javascript more strict
    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";

    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */

    //takes in a string and splits it at the pipe
    var planetsArray = planetsString.split('|');
    console.log(planetsArray);

    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
     */

    // takes a string and add a brake into it
     var myPlanets = planetsArray.join('<br>');
    console.log(myPlanets);



     /** BONUS:
     * Create another string that would display your planets in an undordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */
        // takes the string and turn it into a list and save it into a list
        planetsArray.unshift('<ul>');

        planetsArray.push('<ul>');

        var myPlanetsArray = planetsArray.join('<li>');

        console.log(myPlanetsArray);
})();
