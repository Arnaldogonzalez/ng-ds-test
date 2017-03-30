// Video 1.10 accompanies this exercise

// Arbor Adventures has three different “adventures” to choose from, and
// customers are prompted for a number at a terminal. The number is stored
// as userChoice and then passed into a function called adventureSelector.
//
// Inside the function, you need to return an anonymous function based on the
// number that the user selected. Each of your three anonymous functions should
// contain a boarding alert message:
//
// If the user selects 1:
//
//    You selected the Vines of Doom!
//
// If the user selects 2:
//
//    Looks like you want the Lake of Despair!
//
// If the user selects 3:
//
//    The Caves of Catastrophe!
//
// Assume the user’s choice has already been stored as 1, 2, or 3, and is
// passed in as the userChoice parameter. Make sure that you return all
// message functions as anonymous functions, instead of stored in variables.
// You do not need to call the function at the end.
function subtractMaker(numberToSubtract) {
    return function(number) {
        return numberToSubtract - number
    };
}

var minusSeven = subtractMaker(7)

var minusTen = subtractMaker(10)
console.log(minusTen(10));

function multiplierMarker(numberToMultiply) {
    return function(number) {
        return numberToMultiply * number
    }

}
var multiplyTwo = multiplierMarker(2);
console.log(multiplyTwo(8));
var multiplyTen = multiplierMarker(10);
console.log(multiplyTen(5));


var cars = ["honda", "toyota", "porsche"];
console.log(cars[2]);
