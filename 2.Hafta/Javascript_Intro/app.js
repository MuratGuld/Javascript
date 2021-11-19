// I take a value from user. Then I write the value on the console and the page.
let name = prompt("Adınız?");
console.log(name);
let paragraph = document.getElementById("p1");
paragraph.innerText = "Girdiğiniz değer : " + name


// I defined 4 values and writed the type of the values
const value1 = "Hello";
const value2 = 100;
const value3 = true;
const value4 = null;

console.log(typeof value1)
console.log(typeof value2)
console.log(typeof value3)
console.log(typeof value4)

document.getElementById("p2").innerText = typeof value1
document.getElementById("p3").innerText = typeof value2
document.getElementById("p4").innerText = typeof value3
document.getElementById("p5").innerText = typeof value4
