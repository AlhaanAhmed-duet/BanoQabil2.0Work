let str = ["Boat", "Truck", "Car", "Push"];

let ascend = str.sort((a, b) => {
   return a.length - b.length;
})
console.log(ascend);
