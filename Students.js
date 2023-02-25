import Student from "./Student.js";

export default class Students {
  constructor({ studentsList }) {
    this.studentsList = studentsList;
  }

  getInfo() {
    return this.studentsList
      .sort(
        (firstStudentFromList, secondStudentFromList) =>
          new Student(firstStudentFromList).course -
          new Student(secondStudentFromList).course
      )
      .map(
        (studentFromList) =>
          `${new Student(studentFromList).fullName} - ${
            new Student(studentFromList).courseName
          }, ${new Student(studentFromList).course} курс`
      );
  }
}
