// Subject.ts
/// <reference path="Teacher.ts" />

namespace Subjects {
  export class Subject {
    private teacher: Teacher;

    constructor(teacher: Teacher) {
      this.teacher = teacher;
    }

    setTeacher(teacher: Teacher) {
      this.teacher = teacher;
    }
  }
}
