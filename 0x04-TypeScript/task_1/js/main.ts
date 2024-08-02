// Interface for the constructor
interface StudentConstructor {
  new (firstName: string, lastName: string): Student;
}

// Interface for the class
interface Student {
  firstName: string;
  lastName: string;
  workOnHomework(): string;
  displayName(): string;
}

// Implementing the StudentClass
class StudentClass implements Student {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return 'Currently working';
  }

  displayName(): string {
    return this.firstName;
  }
}

// Usage
const student = new StudentClass('John', 'Doe');
console.log(student.displayName()); // Output: John
console.log(student.workOnHomework()); // Output: Currently working

