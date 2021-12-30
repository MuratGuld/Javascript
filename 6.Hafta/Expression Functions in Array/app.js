/*
PROGRAMMING STEPS
=================
We get the salary with the first item of our array
We subtract grades and salary from array and get expenses
If we sum the items in the array, we get the total expense.
20 percent of the total expense gives us the financial aid of the company
We subtract company aid from total expense and find net expense
We subtract the net expense from the salary and find the remaining money
*/

// Our Array that includes salary, expenditures and notes
const incomeStatement = [15000, 2000, 1000, 300, 200, "important electronic", 600, 79, "abo", 342, "printer", 450, 32, 45, "fitness", 64, 10, 23, 12, 2, 56, 7];

// We call our function
summarizeFinancialSituation(incomeStatement)

// We give to the function an array as parameter. It gives remaining money and aid amount
function summarizeFinancialSituation(array) {
  // First item of the array gives us the salary
  let salary = array[0];

  // Firstly we remove the notes from the array to get an expenditure list
  let expenditureList = array.filter((item) => typeof item == "number");
  // Then, we remove the first item (salary) and get an array of expenditures.
  expenditureList.shift();

  // We find the total expenditure by summing the values in the array
  let totalExpenditure = 0;
  expenditureList.forEach((item) => (totalExpenditure += item));

  // 20 percent of expenses are covered by financial aid. We round the number with ceil.
  let financialAid = Math.ceil(totalExpenditure * 0.2);
    
  // We get our net expenditure after the aid is subtracted
  let netExpenditure = totalExpenditure - financialAid;

  // The remaining money is calculated when we subtract the net expense from the salary.
  let remainingMoney = salary - netExpenditure;

  console.log("Remaining Money : " + remainingMoney);
  console.log("Financial Aid : " + financialAid);
}
