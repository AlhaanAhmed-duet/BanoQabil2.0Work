let arr = ["This", "is", "so", "exciting!"];

let concatStr = arr.map((str) => {
    str = str.toLowerCase();
    return str;
}).filter((str) => {
    str = str.length > 0;
    return str;
}).reduce((acc, curr) => {
    return acc + " " + curr;
},);
console.log(concatStr);