let even = [2, 4, 6, 8];
// 0 + 2 = 2
// 2 + 4 = 6
// 6 + 6 = 12
// 12 + 8 = 20 Desired Result 
let sum = even.reduce((acc, curr) => {
    return acc + curr;
}, 0);

console.log(sum); // 20