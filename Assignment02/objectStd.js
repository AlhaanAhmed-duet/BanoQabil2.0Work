let student = {
  name: "Hashir",
  age: 14,
  grades: [27, 30, 28, 25, 24],
  averageOfGrades(arr) {
    var sum = 0;
    var average = 0;
    for (var i = 0; i < arr.length; i++) {
      sum += arr[i];
      average = sum / arr.length;
    }
    console.log(average);
  }
}

console.log(student.name);
console.log(student.age);
console.log(student.grades);
student.averageOfGrades(student.grades);