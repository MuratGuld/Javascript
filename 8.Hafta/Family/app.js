import { families } from './data.js';
import { filterSalaries,
         createChildrenArray,
         filterGender,
         filterAgeSmaller,
         getMothersWithChildren,
         getMothersBiggerEightYearChild,
         deleteDuplicatedItems} from './functions.js';

//Task 1 : Fathers' names and surnames of families whose salary is over 5000 (as sorted)
 const familiesMoreThan5000 = filterSalaries(families,5000)

 console.log(familiesMoreThan5000)

//Task 2 : Total number of boys. The list of children should be sorted by name.
const childenList = createChildrenArray(families)

const boyList = filterGender(childenList,"boy")

console.log("Total number of boys : " + boyList.length)
console.log(boyList)

//Task 3 : Total number of girls. The list of children should be sorted by name.
const girlList = filterGender(childenList,"girl")

console.log("Total number of girls : " + girlList.length)
console.log(girlList)

//Task 4 : Number of children younger than 8 years old. Children should be sorted according to their age from oldest to youngest.
const childrenSmallerEightList = filterAgeSmaller(childenList,8)
     
console.log("The number of children younger than 8 years old : " + childrenSmallerEightList.length)
console.log(childrenSmallerEightList)

//Task 5 : Mothers of children older than 8 years of age should be sorted alphabetically
const mothersWithChildrenList = getMothersWithChildren(families)

let motherBiggerEightYearChild = getMothersBiggerEightYearChild(mothersWithChildrenList)

motherBiggerEightYearChild = deleteDuplicatedItems(motherBiggerEightYearChild)

console.log(motherBiggerEightYearChild) 