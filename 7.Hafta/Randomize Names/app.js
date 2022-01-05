/*
PROGRAMMING STEPS
=================
We create a function that takes 2 array parameters
We turn the items of the first array within the function with the map method
While turning with the map method, we delete a random item from the second array each time.
We equate this deleted element to a variable 
We add this deleted item to the end of the first array item
We set this map method to a variable, so we get the updated method
We display this updated method on the console with forEach method
*/

const groupList = ["Rangers", "Raiders", "Wilds", "Canaries", "Bears"];

const personalList = ["Bowie", "Boyd", "Aaron-James", "Aarron", "Aaryan", "Aaryn", "Conner", "Connolly", "Fauzaan", "Favour", "Fawaz", "Fawkes", "Connor", "Aayan", "Bracken", "Brad"]

// We call our function
updateArray(groupList, personalList)


// Randomly selected 5 elements from second array will be combined with the first array.
function updateArray (pFirstArray, pSecondArray) {
    const updatedArray = pFirstArray.map((item) => {
        // We delete a random item from secondArray and combine it with firstArray item
            let deletedItem = pSecondArray.splice(Math.floor((Math.random()*pSecondArray.length)),1)   
            return item + " " + deletedItem
        })

        // We display updated array on the console.
        updatedArray.forEach((item) => {
        console.log(item)
    })
}






