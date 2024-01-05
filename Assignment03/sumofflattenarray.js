let array = [[7, 4, 5], [6, 8, 9], [3, 2, 1]];

let operation = array.reduce((acc, curr) => {
    return acc.concat(curr);
}).reduce((acc, curr) => {
    return acc + curr;
});

console.log(operation); // Sum of flattened array is 45