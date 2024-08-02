interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "John",
  lastName: "Doe",
  age: 20,
  location: "Nairobi"
};

const student2: Student = {
  firstName: "Jane",
  lastName: "Smith",
  age: 22,
  location: "Mombasa"
};

const studentsList: Student[] = [student1, student2];

const table = document.createElement('table');
document.body.appendChild(table);

studentsList.forEach(student => {
  const row = table.insertRow();
  const cell1 = row.insertCell(0);
  const cell2 = row.insertCell(1);
  cell1.innerHTML = student.firstName;
  cell2.innerHTML = student.location;
});

