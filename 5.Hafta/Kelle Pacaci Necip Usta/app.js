// PROGRAMMING STEPS
// =================
// We create a function that takes an array parameter
// In this function we assign a Usable Feet Number variable with an initial value of 0
// we turn array parameter with foreach function
// For each array object, we check if the value is cow, sheep, pig or chicken with the if conditions
// We increase the Usable Feet Number by 4 if the animal is a cow or a sheep, and by 2 if it is a chicken. If it is a pig, the value remains stable.
// At the end of the function we return the Total Usable Feet Number
// We give our animal array into this function as a parameter.
// We assign this value to a const variable and show it on the console screen.



// here is an array of different kinds of animals
const animalList = ["sheep", "cow", "chicken", "pig", "cow", "sheep", "cow", "chicken", "cow","chicken"];

// getUsableFeetNumber takes an array as a parameter and returns total usable feet number
const totalUsableFeet = getUsableFeetNumber(animalList);

console.log(totalUsableFeet);


// this function takes an array and return total number of usable feet
function getUsableFeetNumber(array) {

    let usableFeetNumber = 0;

    // we evaluate the number of feet in each array item by turning the array
    array.forEach(function (arrayItem)
    {
        // The number of feet takes different values for each animal species.
        if (arrayItem == "cow" || arrayItem == "sheep"){
            usableFeetNumber += 4;
        }
        else if (arrayItem == "chicken") {
            usableFeetNumber += 2;
        }
        else if (arrayItem == "pig") {
            // Pigs cannot be used. we ignore them
        }
    })

    // After returning the array with foreach, we return the total number of feet.
    return usableFeetNumber;
}