// Firstly I get the input, button and the paragraph elements with HTML DOM
let firstValue = document.querySelector("#firstValue");
let secondValue = document.querySelector("#secondValue");
let thirdValue = document.querySelector("#thirdValue");
const compareButton = document.querySelector("#compareButton");
let result = document.querySelector("#result");

// IF user clicks the COMPARE button, an event will be started
compareButton.addEventListener("click", function () {
    console.log("User clicked Compare button");
    // Here I check if input values are empty
    if (firstValue.value == "" || secondValue.value == "" || thirdValue.value == "" ) {
        alert("Please fill in all relevant fields!");
        console.log("Missing entered values exist. User is warned");
    }
    // If inputs aren't empty, I compare the numbers via internal If block
    else {
        console.log("User entered all values properly");
        if (parseInt(firstValue.value) == parseInt(secondValue.value)) {
            if (parseInt(thirdValue.value) > parseInt(firstValue.value)) {
                result.innerHTML = "RESULT : " + thirdValue.value + " > " + firstValue.value + " = " + secondValue.value;
            }
            else if (parseInt(thirdValue.value) == parseInt(firstValue.value)) {
                result.innerHTML = "RESULT : " + thirdValue.value + " = " + firstValue.value + " = " + secondValue.value;
            }
            else {
                result.innerHTML = "RESULT : " +firstValue.value + " = " + secondValue.value + " > " + thirdValue.value;
            }

            console.log("Comparison completed and displayed on the screen")
        }
        else if(parseInt(firstValue.value) > parseInt(secondValue.value)) {
            if (parseInt(thirdValue.value) > parseInt(firstValue.value)) {
                result.innerHTML = "RESULT : " + thirdValue.value + " > " + firstValue.value + " > " + secondValue.value;
            }
            else if (parseInt(thirdValue.value) == parseInt(firstValue.value)) {
                result.innerHTML = "RESULT : " + thirdValue.value + " = " + firstValue.value + " > " + secondValue.value;
            }
            else if (parseInt(thirdValue.value) < parseInt(firstValue.value)) {
                if (parseInt(thirdValue.value) == parseInt(secondValue.value)) {
                    result.innerHTML = "RESULT : " + firstValue.value + " > " + secondValue.value + " = " + thirdValue.value;
                }
                else if (parseInt(thirdValue.value) > parseInt(secondValue.value)) {
                    result.innerHTML = "RESULT : " + firstValue.value + " > " + thirdValue.value + " > " + secondValue.value;
                }
                else {
                    result.innerHTML = "RESULT : " + firstValue.value + " > " + secondValue.value + " > " + thirdValue.value;
                }
            }

            console.log("Comparison completed and displayed on the screen")
        }
        else {
            if (parseInt(thirdValue.value) > parseInt(secondValue.value)) {
                result.innerHTML = "RESULT : " + thirdValue.value + " > " + secondValue.value + " > " + firstValue.value;
            }
            else if (parseInt(thirdValue.value) == parseInt(secondValue.value)) {
                result.innerHTML = "RESULT : " + thirdValue.value + " = " + secondValue.value + " > " + firstValue.value;
            }
            else if (parseInt(thirdValue.value) < parseInt(secondValue.value)) {
                if (thirdValue.value == firstValue.value) {
                    result.innerHTML = "RESULT : " + secondValue.value + " > " + firstValue.value + " = " + thirdValue.value;
                }
                else if (parseInt(thirdValue.value) > parseInt(secondValue.value)) {
                    result.innerHTML = "RESULT : " + secondValue.value + " > " + thirdValue.value + " > " + firstValue.value;
                }
                else {
                    result.innerHTML = "RESULT : " + secondValue.value + " > " + firstValue.value + " > " + thirdValue.value;
                }
            }

            console.log("Comparison completed and displayed on the screen")
        }
    }
})