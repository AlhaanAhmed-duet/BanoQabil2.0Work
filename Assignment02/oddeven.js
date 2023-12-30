var array = [1, 2, 4, 5, 7, 8, 9]
let odd;
let even;
let condition;
for (var i = 0; i < array.length; i++) {
  condition = array[i] % 2 == 0 ? console.log("Even numbers are: " + array[i]) : console.log("Odd Numbers are: " + array[i]);
}