let arr = [2, 4, 5, 7];
let found = false;

let foundElem = arr.find((item) => {
        if (item == 7) {
        found = true;
        }
})
try {
    if (found == true) {
        console.log("Found Success!");
    }
    else {
        throw new Error("Not Found: Err!")
    }
}
catch (error) {
    console.error(error.message);
}
console.log(foundElem); 

