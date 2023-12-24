let array = [18, 17, 45, 34, 56, 17];
// This removes any duplicate element from an array
for (var i = 0; i < array.length; i++) {
    for (var j = i + 1; j < array.length; j++) {
        if (array[j] == array[i]) {
            var temp;
            array[i] = temp;
            array[i] = array[j];
            array[j] = temp;
        }
    }
    
}
console.log(array);