import Student from "./Student.js";

export default class Students {
  constructor({ students }) {
    this.students = students.map((student) => new Student(student));
  }

  getInfo() {
    return this.students
      .slice()
      .sort(
        (firstStudent, secondStudent) =>
          firstStudent.course - secondStudent.course
      )
      .map(
        (student) =>
          `${student.fullName} - ${student.courseName}, ${student.course} курс`
      );
  }
}
