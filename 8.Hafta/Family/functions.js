// This method takes two parameters as families array and salary. Then it filters families according to the salary. At the end we sort array alphabetically
export const filterSalaries = (pFamilies, pSalary) => 
                    pFamilies.filter((family) => family.salary > pSalary)
                                .map((family) => family.firstname + " " + family.lastname)
                                    .sort()

// With this method, we will assign children from families array to a separate array and then return this array.
export const createChildrenArray = (pFamilies) => {
    // We create an empty array. we will push all the children in this array.
    const childrenArray = [] 

    // We push the children by first reaching the families and then the children's series.
    pFamilies.forEach((family) => {
        family.childrens.forEach((children) => childrenArray.push(children))})

    return childrenArray;    
}

//This method takes the children array and filters according to the gender.
export const filterGender = (pChildrenList,pGender) => {
    return pChildrenList
            .filter((child) => child.gender == pGender)
                .map((child) => child.name)
                    .sort();
}

// This method takes the children array and filters according to the age as smaller.
export const filterAgeSmaller = (pChildrenList,pAge) => {
    
    return pChildrenList
            .filter((child) => child.age < pAge)
                .map((child) => child.name)
                    .sort();
}

// This method takes families array as parameter and then creates an object array that contains mothers and their children together
export const getMothersWithChildren = (pFamilies) => {
    
    const mothersWithChildrenList = [];

    pFamilies.forEach((family) => {
        family.childrens.forEach((children) => 
        mothersWithChildrenList.push({mother:family.partner,child:children}))
    })

    return mothersWithChildrenList;
} 

// Here we filter mother and children array according to the childrens age (if they are bigger than 8 years old)
export const getMothersBiggerEightYearChild = (pMothersWithChildrenList) => {
    return pMothersWithChildrenList
            .filter(motherWithChildren => motherWithChildren.child.age >8)
                .map(motherWithChildren => motherWithChildren.mother)
                    .sort();
}

// Here we delete if there is a duplicated item in an array
export const deleteDuplicatedItems = (pArray) => {
    return pArray.filter((item, index) => {
        return pArray.indexOf(item) == index;
    });
}
