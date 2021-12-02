const MY_ARRAY = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// We print the square root of the numbers on the console
console.log("square root of the numbers :")
MY_ARRAY.forEach(function (item) {
    console.log(Math.sqrt(item))
})

// We print the squares of the numbers on the console
console.log("squares of the numbers")
MY_ARRAY.forEach(function (item) {
    console.log(item*item)
})

// We give the sum of the numbers to a variable and print it on the screen.
let total = 0;
MY_ARRAY.forEach(function(item) {
    total += item;
})
console.log("sum of the numbers : " + total)

// I find the average value when I multiply the sum of the numbers by the length of the array
console.log("Average of the array : " + (total / MY_ARRAY.length))

// We can find the minimum and maximum values of the array with the math methods.
console.log("Minimum value of the array : " + (Math.min.apply(null,MY_ARRAY)))
console.log("Maximum value of the array : " + (Math.max.apply(null,MY_ARRAY)))