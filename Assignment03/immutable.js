const arr = [2, 4, 5, 76];

let arrNew = arr.filter((arr) => {
 return (arr * 2) < 76;
})
console.log(arrNew);