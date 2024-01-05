let strings = ["melbourne", "sydney", "perth", "gabba", "lord", "oval"];

let mod = strings.filter((str) => {
    return str.length >= 5;
}).map((str) => {
    return str.toUpperCase();
});

console.log(mod);