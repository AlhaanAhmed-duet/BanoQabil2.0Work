let string = "The quick brown fox jumps over the lazy Dog";
let upperstr = string.split(" ");
let str2 = upperstr.map((upperstr) => {
    return upperstr[0].toUpperCase() + upperstr.slice(1);
});
str2 = str2.join(" ");
console.log(str2);
