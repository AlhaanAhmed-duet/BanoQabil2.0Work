let leap = false;
let year = 2044;

if ((year % 4 == 0)) {
    console.log(year + " is a leap year!")
    leap = true;
}

if (!leap) {
    console.log(year + " is not a leap year")
}