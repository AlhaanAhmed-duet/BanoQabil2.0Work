var nums = [2, 4, 5, 7, 9];
let average = 0;
let sum = 0;
function calcAvg(arr) {
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
    average = sum / arr.length;
  }
  return average;
}
let result = calcAvg(nums);
console.log(result); // Expected OUtput: 5.4