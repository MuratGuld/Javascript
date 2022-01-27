/*PROGRAMMING STEPS
===================
We have two rectangles. Firstly we find the coordinates in the first rectangle area.
For this, we first obtain the minimum and maximum values of the rectangle on the x and y axes.
Then we find the x and y coordinates inside the rectangle by increasing 1 from the minimum value to the maximum value for both the x and y axis. (here we use the inside for loop).
After then we check if at least one of the coordinates of first rectangle ist in the second rectangle area.
For this, we obtain the minimum and maximum values of the second rectangle on the x and y axes.
If any coordinate of the first rectangle is between the min and max X and Y values of the second rectangle, then the two rectangles overlap. (we check this with some method).
*/

// Sample rectangles are here
const rectangleA = [[0,0],[8,0],[8,8],[0,8]]
const rectangleB = [[-5,0],[5,0],[4,5],[-5,4]]
const rectangleC = [[-1,0],[1,0],[2,1],[-1,1]]
const rectangleD = [[-5,1],[-5,2],[-7,-2],[-7,-1]]
const rectangleE = [[-6,1],[-4,0],[-2,1],[1,-6]]


// We create out method
// That turns true or false according to the overlapping of the two rectangles
const isOverlapping = (pFirstRectangle,pSecondRectangle) => {

// We create an empty array, that will contain the coordinates inside the first rectangle 
const firstRectangularCoordinates = [];

// We add first the vertices of the first rectangle as elements 
pFirstRectangle.forEach(item => firstRectangularCoordinates.push(item))

// We find the largest and smallest values in the x and y axes for the first rectangle
const pFirstRectangleXaxisMax = Math.max(...pFirstRectangle.map(item => item[0]))
const pFirstRectangleXaxisMin = Math.min(...pFirstRectangle.map(item => item[0]))
const pFirstRectangleYaxisMax = Math.max(...pFirstRectangle.map(item => item[1]))
const pFirstRectangleYaxisMin = Math.min(...pFirstRectangle.map(item => item[1]))

// With inner for loops we turn from min to max x-y values of the rectangle. In this way we find the coordinates inside the rectangle
for (let indexForX = pFirstRectangleXaxisMin+1;
     indexForX < pFirstRectangleXaxisMax; indexForX++) {      
        // second (inner) for loop
        for (let indexForY = pFirstRectangleYaxisMin+1; 
            indexForY < pFirstRectangleYaxisMax; indexForY++) {
                // We get the coordinates of the first rectangle
                firstRectangularCoordinates.push([indexForX,indexForY])            
        }    
}

// We find the largest and smallest values in the x and y axes for the second rectangle
const pSecondRectangleXaxisMax = Math.max(...pSecondRectangle.map(item => item[0]))
const pSecondRectangleXaxisMin = Math.min(...pSecondRectangle.map(item => item[0]))
const pSecondRectangleYaxisMax = Math.max(...pSecondRectangle.map(item => item[1]))
const pSecondRectangleYaxisMin = Math.min(...pSecondRectangle.map(item => item[1]))

// If any of the coordinates inside the first rectangle is in the min-max X and Y value range of the second rectangle, these two rectangles overlap. In this case, we return overlapping value
if (firstRectangularCoordinates.some((item) => 
    (pSecondRectangleXaxisMin < item[0] < pSecondRectangleXaxisMax) && (pSecondRectangleYaxisMin < item[1] < pSecondRectangleYaxisMax)))
{    
    console.log("Yes. Rectangles overlap")
} 
else {
    console.log("No. Rectangles dont overlap")
}
}

// We call our function for different rectangles
isOverlapping(rectangleA,rectangleA)
isOverlapping(rectangleA,rectangleB)
isOverlapping(rectangleA,rectangleC)
isOverlapping(rectangleA,rectangleD)
isOverlapping(rectangleA,rectangleE)