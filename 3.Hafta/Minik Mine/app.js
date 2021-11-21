// Firstly I get the input, button and the paragraph elements with HTML DOM
let firstValue = document.querySelector("#firstValue");
let secondValue = document.querySelector("#secondValue");
const compareButton = document.querySelector("#compareButton");
let result = document.querySelector("#result");

// IF user clicks the COMPARE button, an event will be started
compareButton.addEventListener("click", function () {
    console.log("User clicked Compare button");
    // Here I check if input values are empty
    if (firstValue.value == "" || secondValue.value == "") {
        alert("Please fill in all relevant fields!");
        console.log("Missing entered values exist. User is warned");
    }
    // If inputs aren't empty, I compare the numbers via internal If block
    else {
        console.log("User entered all values properly");
        if (firstValue.value == secondValue.value) {
            result.innerHTML = "RESULT : " + firstValue.value + " = " + secondValue.value;
            console.log("Comparison completed and displayed on the screen")
        }
        else if(parseInt(firstValue.value) > parseInt(secondValue.value)) {
            result.innerHTML = "RESULT : " + firstValue.value + " > " + secondValue.value;
            console.log("Comparison completed and displayed on the screen")
        }
        else {
            result.innerHTML = "RESULT : " + secondValue.value + " > " + firstValue.value;
            console.log("Comparison completed and displayed on the screen")
        }
    }
})