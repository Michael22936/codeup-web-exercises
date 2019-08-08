// var raining = true;
//
// if(raining){
//     alert("Its raining")
// }
//
// var numberOfLives = 0;
//
// if(numberOfLives === 1){
//
//     alert("you are dead")
//
// }else {
//     alert("you are alive")
// }
//
//
// var drinkingWater = 0
//
// if(drinkingWater === 0){
//     alert("you are drinking water")
// }else{
//     alert("you are not drinking water")
// }

// var playingTheGame = "alive";
//
// if(playingTheGame === "alive"){
//     alert("You are playing the game?")
// }else{
//     alert("You are in the lobby?")
// }

// var pizzaPreference = prompt("What kind of pizza do you like?");
//
// if (pizzaPreference === "pineapple and hot sauce") {
//     alert("What a coincidence, that's my favorite!");
// } else if (pizzaPreference === "cheese") {
//     alert("Just plain cheese? Okay...");
// } else {
//     alert(pizzaPreference + " isn't my favorite, but let's order some!");


// function trafficLightColor(colorOfTrafficLight) {
//
//     if (colorOfTrafficLight === "green") {
//         return "go through the light";
//     } else if (colorOfTrafficLight === "yellow") {
//         return "slow down";
//     } else {
//         return "STOP";
//     }
//
// }
//
// console.log(trafficLightColor("purple"))

function trafficLightColor(colorOfTrafficLight) {
    switch (colorOfTrafficLight) {
        case "green":
            return "keep driving";
            break;
        case "yellow":
            return "slow down";
            break;
        default:
                return "STOP";
            break;
    }
}

console.log(trafficLightColor("green"))