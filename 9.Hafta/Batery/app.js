/* PROGRAMMING STEPS 
====================
We create a battery divided into 3 equal parts.
We create a counter variable. The initial value of the counter is 0.
Clicking the + and - buttons will increase or decrease the counter. (min 0 max 3)
Depending on whether the counter value is 0,1,2 or 3, a suitable background color is added to the divs inside the battery to show that the battery level.
*/

// We get the 3-level div tags, buttons and paragraph tags inside the battery.
const batteryLowLevel = document.querySelector("#low-level");
const batteryMiddleLevel = document.querySelector("#middle-level");
const batteryHighLevel = document.querySelector("#high-level");

const chargeButton = document.querySelector("#charge"); 
const drainButton = document.querySelector("#drain");

const paragraph = document.querySelector("#paragraph");

// We create a counter to check the battery charge level
let counter = 0;

// Levels from 0 to 3 of the counter represent the fullness of the battery. 
//According to this ratio, the background color and occupancy percentage are displayed on the screen.
const changeBatteryLevel = () => {
    if (counter == 0){
        batteryLowLevel.style.backgroundColor = "";
        batteryMiddleLevel.style.backgroundColor = "";
        batteryHighLevel.style.backgroundColor = "";

        paragraph.innerHTML = "%0"
    }
    else if (counter == 1){
        batteryLowLevel.style.backgroundColor = "red";
        batteryMiddleLevel.style.backgroundColor = "";
        batteryHighLevel.style.backgroundColor = "";
        
        paragraph.innerHTML = "%33"
    }
    else if (counter == 2) {
        batteryLowLevel.style.backgroundColor = "orange";
        batteryMiddleLevel.style.backgroundColor = "orange";
        batteryHighLevel.style.backgroundColor = "";
        
        paragraph.innerHTML = "%66"
    }
    else if (counter == 3) {
        batteryLowLevel.style.backgroundColor = "green";
        batteryMiddleLevel.style.backgroundColor = "green";
        batteryHighLevel.style.backgroundColor = "green";
        
        paragraph.innerHTML = "%100"
    } 
} 

// We trigger the functions that increase and decrease the counter when the corresponding buttons are clicked.
const increaseCounter = () => { 
    if (counter != 3){
        counter++;    
        console.log(counter)
    }
    
    changeBatteryLevel();
}

const decreaseCounter = () => { 
    if (counter != 0){
        counter--;        
        console.log(counter)
    }

    changeBatteryLevel();
}

// We call the functions
chargeButton.addEventListener("click", increaseCounter)
drainButton.addEventListener("click", decreaseCounter)



