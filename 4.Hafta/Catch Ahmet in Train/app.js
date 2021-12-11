// I get paragraph tag, button tag and container tag of the wagons.
const myTrain = document.querySelector("#myTrain");
const guideParagraph = document.querySelector("#guideParagraph");
const button = document.querySelector("button");

// I want to generate a random number between 1 and 10
let ahmetWagon = Math.floor(Math.random() * 10 + 1);

// I will put the user guess into a variable
let userGuess;
// I will handle click events with a click counter
let clickCounter = 0;

// I activate the button with this func. to restart the game
function replpay() {
    button.style.display = "block";

    button.addEventListener("click", function (e) {
        button.style.display = "none";
        clickCounter = 0;
        ahmetWagon = Math.floor(Math.random() * 10 + 1);
        guideParagraph.classList.remove("fail");
        guideParagraph.classList.remove("success");
        guideParagraph.innerText = "Click on a wagon and find Ahmet!"
    })
}

// I start the game with a click event
myTrain.addEventListener("click", function (e) {
    // I control if user clicks on a wagon
    if (e.target.innerText.length == 1 || e.target.innerText.length == 2) {

        // Here I will get the wagon number that the user clicked
        userGuess = parseInt(e.target.innerText);
        // Click counter will increase +1 for each click
        clickCounter += 1;

        if (clickCounter < 5) {
            // For 1. 2. 3. 4. clicks, I will control if guess equals to the Ahmet's wagon
            if (clickCounter == 1) {
                if (userGuess == ahmetWagon) {
                    guideParagraph.innerText = "CONGRATULATIONS! \n1 attempt\nYOUR SCORE : 100 points"
                    guideParagraph.classList.add("success");
                    replpay();
                } else if (userGuess > ahmetWagon) {
                    guideParagraph.innerText = "Wrong Wagon \nGO LEFT!\n3 attempts left"
                } else {
                    guideParagraph.innerText = "Wrong Wagon \nGO RIGHT!\n3 attempts left"
                }
            } else if (clickCounter == 2) {
                if (userGuess == ahmetWagon) {
                    guideParagraph.innerText = "CONGRATULATIONS! \n2 attempt\nYOUR SCORE : 80 points"
                    guideParagraph.classList.add("success");
                    replpay();
                } else if (userGuess > ahmetWagon) {
                    guideParagraph.innerText = "Wrong Wagon \nGO LEFT!\n2 attempts left"
                } else {
                    guideParagraph.innerText = "Wrong Wagon \nGO RIGHT!\n2 attempts left"
                }
            } else if (clickCounter == 3) {
                if (userGuess == ahmetWagon) {
                    guideParagraph.innerText = "CONGRATULATIONS! \n3 attempt\nYOUR SCORE : 60 points"
                    guideParagraph.classList.add("success");
                    replpay();
                } else if (userGuess > ahmetWagon) {
                    guideParagraph.innerText = "Wrong Wagon \nGO LEFT!\n1 attempts left"
                } else {
                    guideParagraph.innerText = "Wrong Wagon \nGO RIGHT!\n1 attempts left"
                }
            } else if (clickCounter == 4) {
                if (userGuess == ahmetWagon) {
                    guideParagraph.innerText = "CONGRATULATIONS! \n4 attempt\nYOUR SCORE : 40 points"
                    guideParagraph.classList.add("success");
                    replpay();
                } else {
                    guideParagraph.innerText = "GAME OVER! \nAhmet ran away\n0 point"
                    replpay();
                    guideParagraph.classList.add("fail");
                }
            }
        }
    }
})