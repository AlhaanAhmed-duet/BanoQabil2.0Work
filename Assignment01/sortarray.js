let array = [12, 6, 8, 5, 10];
// This removes any duplicate element from an array
for (var i = 0; i < array.length; i++) {
    for (var j = 0; j < array.length - i - 1; j++) {
        if (array[j] > array[j + 1]) {
            var temp = 0;
            temp = array[j];
            array[j] = array[j + 1];
            array[j + 1] = temp;
        }
      
}
    
}
console.log("Array in ascending order "  + array);
//  Descending order
for (var i = 0; i < array.length; i++) {
    for (var j = 0; j < array.length - i - 1; j++) {
        if (array[j] < array[j + 1]) {
            var temp = 0;
            temp = array[j];
            array[j] = array[j + 1];
            array[j + 1] = temp;
        }
      
}
    
}
console.log("Array in Descending order " + array); 