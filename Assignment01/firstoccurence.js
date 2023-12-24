let arr = [10, 20, 30, 40, 50];
let element = 50;
let found = false;
for (var i = 0; i < arr.length; i++) {
    if (element == arr[i]) {
        console.log("Found at: " + arr.indexOf(arr[i]) + " location");
        found = true;
    }
   
}
if (!found) {
    console.log("Not found anywhere");
}
