// PROGRAMMING STEPS
// =================
// In each task, our array is entered as a parameter in a function and returned in a modified way.
// For this reason, we assign our array to a new variable in all 5 steps.
// To enlarge the letters, we turn each element with the map method and enlarge the letters with the uppercase method
// To subtract numbers, we turn with the map method, we convert each item into an array with split method. We check the values with isdigit method and return if it is NaN
// To reverse, we turn the array with map,.We convert array items to arrays with split method, we reverse them with reverse method, we convert them back to string with join
// For the prefix, we turn the array elements with the map method. Then we add the prefix parameter at the beginning.
// To add the transaction date, we first create a date object and assign the relevant date to a variable.
// Then we turn the array elements with map method. At the end of each element, we add the date variable that we have just determined and give in function as a parameter.


const array = ["Kaporta5", "Ak3ü", "Stop Lambasi", "Radyatör 21", "Karbüratör 42", "Tekerlek", "3 AYNA", "Jant"];

// Step 1 -- We capitalize array elements
const enlargeArray = enlargeLetters(array);

function enlargeLetters(array) {
    return array.map((item) => {
        return item.toUpperCase()
    })
}

// Step 2 -- We subtract numbers from array elements
const substractArray = subtractNumbers(enlargeArray);

// I get each element of array and convert to array. Then I check them if they are NaN
function subtractNumbers(array) {
    return array.map((item) => {
        return item.split("").filter((e) => {
            if (Number.isInteger(Number(e)) != true) {
                return e
            }
        }).join("")
    })
}

// Step 3 -- We reversed array elements
const reverseArray = reverseArrayItems(substractArray);

function reverseArrayItems(array) {
    return array.map((item) => {
        return item.split("").reverse().join("")
    })
}

// Step 4 -- We add the prefix to the array elements
const prefixArray = addPrefix(reverseArray, "KEREMAG_")

function addPrefix(array, prefix) {
    return array.map((item) => {
        return prefix + item;
    })
}

// We got the transaction date
const date = new Date();
const processDate = ` ${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`;

// Step 5 -- We add the transaction date to the end of the array elements
const resultArray = addSuffix(prefixArray, processDate);

function addSuffix(array, value) {
    return array.map((item) => {
        return item + value;
    })
}

console.log(resultArray);