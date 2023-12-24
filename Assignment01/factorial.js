let n = 5;
let factorial = 1;
do {
    factorial *= n;
    n--;
}
while (n >= 1);

console.log(factorial);