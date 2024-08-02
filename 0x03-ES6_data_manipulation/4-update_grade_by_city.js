/**
 * Updates the grades of students from a specific city.
 *
 * @param {Object[]} students - An array of student objects.
 * @param {string} city - The city to filter students by.
 * @param {Object[]} newGrades - An array of new grade objects.
 * @returns {Object[]} An array of student objects with updated grades.
 */
function updateStudentGradesByCity(students, city, newGrades) {
  if (!Array.isArray(students) || !Array.isArray(newGrades)) {
    return [];
  }

  const studentsInCity = students.filter(
    (student) => student.location === city
  );

  const updatedStudents = studentsInCity.map((student) => {
    const newGrade = newGrades.find((grade) => grade.studentId === student.id);

    return {
      ...student,
      grade: newGrade && newGrade.grade ? newGrade.grade : "N/A",
    };
  });

  return updatedStudents;
}

export default updateStudentGradesByCity;
