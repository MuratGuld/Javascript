const form = document.querySelector("#form-student");
const tableRowStudent = document.querySelector("#tbody-student");
const totalStudentColumn = document.querySelector("#total-column");

const renderStudentList = (pStudentList) => {
  tableRowStudent.innerHTML = pStudentList
    .map((student, index) => {
      return `<tr>
        <td>${student.firstName}</td>
        <td>${student.lastName}</td>
        <td>${student.age}</td>
        <td><i class="fas fa-trash-alt" id="${index}"></i></td>
      </tr>`;
    })
    .join("");

  totalStudentColumn.innerHTML = studentList.length;
};

// Add Student Function
const addStudent = (event) => {
  event.preventDefault();

  let newStudent = {
    firstName: event.target["firstname"].value,
    lastName: event.target["lastname"].value,
    age: event.target["age"].value,
  };

  form.reset();

  studentList.push(newStudent);

  renderStudentList(studentList);
};

// Delete Student Function
const deleteStudent = (event) => {
  if (event.target.tagName == "I") {
    const id = event.target.id;

    studentList.splice(id, 1);

    renderStudentList(studentList);
  }
};
