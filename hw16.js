class Student {
  constructor(name, secondName, birthDate, marks) {
    this.name = name;
    this.secondName = secondName;
    this.birthDate = birthDate;
    this.marks = marks;
    this.visits = new Array(25);
  }
  getAge() {
    const age =
      new Date().getFullYear() - new Date(this.birthDate).getFullYear();
    return age;
  }

  getAverageMark() {
    const total = this.marks.reduce((acc, mark) => acc + mark, 0);
    return total / this.marks.length;
  }
  present() {
    const index = this.visits.findIndex((visit) => visit === undefined);
    if (index !== -1) {
      this.visits[index] = true;
    }
  }
  absent() {
    const index = this.visits.findIndex((visit) => visit === undefined);
    if (index !== -1) {
      this.visits[index] = false;
    }
  }
  summary() {
    const averageMark = this.getAverageMark();
    const totalVisits = this.visits.filter((visit) => visit === true).length;
    const attendanceRate = totalVisits / this.visits.length;

    if (averageMark >= 90 && attendanceRate >= 0.9) {
      console.log(this.name, "Excellent student");
    } else if (averageMark >= 90 || attendanceRate >= 0.9) {
      console.log(this.name, "Good student");
    } else {
      console.log(this.name, "Needs improvement");
    }
  }
}
const student1 = new Student("John", "Doe", "2000-01-15", [90, 85, 88]);
const student2 = new Student("Jane", "Smith", "1999-05-22", [92, 81, 79]);
const student3 = new Student("Alice", "Johnson", "2001-11-30", [90, 100, 100]);
const students = [student1, student2, student3];
for (let i = 0; i < 25; i++) {
  students.forEach((student) => {
    if (Math.random() < 0.8) {
      student.present();
    } else {
      student.absent();
    }
  });
}

students.forEach((student) => {
  student.summary();
});
