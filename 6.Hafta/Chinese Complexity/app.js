/**
 * PROGRAMMING STEPS 
 ===================
 We get the birth year data from the user
 We evaluate the year of birth in terms of both animal and element criteria
 Since there are 12 animals, we find the year of birth according to mod 12
 Since 5 elements take 2 series of years, we find the element value according to mod 10. 
*/

// User birth Year
const birthYear = 1971;

// With findChineseHoroscope func., we find the chinese Horoscope value
const chineseHoroscope = findChineseHoroscope(birthYear);
console.log(chineseHoroscope);

// findChineseHoroscope function takes a year parameter and return the horoscope value
function findChineseHoroscope(pYear) {
  let animal;
  let element;

  // Since the animal cycle is 12 years, we determine the animal according to mode 12.
  if (pYear % 12 == "0") {
    animal = "Monkey";
  } else if (pYear % 12 == "1") {
    animal = "Cock";
  } else if (pYear % 12 == "2") {
    animal = "Dog";
  } else if (pYear % 12 == "3") {
    animal = "Boar";
  } else if (pYear % 12 == "4") {
    animal = "Rat";
  } else if (pYear % 12 == "5") {
    animal = "Ox";
  } else if (pYear % 12 == "6") {
    animal = "Tiger";
  } else if (pYear % 12 == "7") {
    animal = "Rabbit";
  } else if (pYear % 12 == "8") {
    animal = "Dragon";
  } else if (pYear % 12 == "9") {
    animal = "Snake";
  } else if (pYear % 12 == "10") {
    animal = "Horse";
  } else if (pYear % 12 == "11") {
    animal = "Sheep";
  }

  // Since an element cycle lasts 10 years, we determine the element according to mod 10
  if (pYear % 10 == "0") {
    element = "Metal";
  } else if (pYear % 10 == "1") {
    element = "Metal";
  } else if (pYear % 10 == "2") {
    element = "Water";
  } else if (pYear % 10 == "3") {
    element = "Water";
  } else if (pYear % 10 == "4") {
    element = "Wood";
  } else if (pYear % 10 == "5") {
    element = "Wood";
  } else if (pYear % 10 == "6") {
    element = "Fire";
  } else if (pYear % 10 == "7") {
    element = "Fire";
  } else if (pYear % 10 == "8") {
    element = "Earth";
  } else if (pYear % 10 == "9") {
    element = "Earth";
  }

  return element + " " + animal;
}
