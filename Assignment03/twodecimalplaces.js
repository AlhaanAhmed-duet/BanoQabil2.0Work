let integers = [2, -4, 5, -7, 8, 17];
let sum;
let average = integers.filter((pos) => {
    return pos > 0;
}).reduce((acc, curr) => {
    return acc + curr;
}, 0).toFixed(2) / integers.filter((count) => {
    return count > 0
}).length;

console.log(average.toFixed(2));