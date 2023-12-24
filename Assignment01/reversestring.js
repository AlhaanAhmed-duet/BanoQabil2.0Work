let stringNew = "Summer";
    function reverseStringFunction(x) {
        let stringLength = x.length;
        let reverseString = "";
            for (i = stringLength - 1; i >= 0; i--) {
                reverseString += x[i];
            }
        console.log(reverseString);
}
var result = reverseStringFunction(stringNew);
console.log(result);