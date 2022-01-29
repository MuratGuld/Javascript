/*PROGRAMMING STEPS
===================
User enters student data into form inputs.
When the form object is submitted, we get the data from this form.
We model this student data as an array that holds student objects in it.
In each adding event, student is pushed to the array data.
After adding a new student, we render the table that displays the student list.
While adding a student, the index of the student is assigned as id to the delete icon representing the student.
When the delete icon is clicked, the student's index is accessed with the icon id.
The student in the relevant index is deleted and the table is updated again after deletion.
On the bottom line of the table, the total number of students is displayed on the screen with the help of the array length.
*/

form.addEventListener("submit",addStudent);
tableRowStudent.addEventListener("click",deleteStudent)