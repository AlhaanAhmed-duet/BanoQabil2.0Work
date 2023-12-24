// Modified version of a Palindrome Number
let stringNew = "level";
    function reverseStringFunction(x) {
        let stringLength = x.length;
        let reverseString = "";
            for (i = stringLength - 1; i >= 0; i--) {
                reverseString += x[i];
            }
            if (reverseString == x) {
                console.log("The string is palindrome");
            }
            else {
                console.log("Not a palindrome string! ");
            }
        console.log(reverseString);
}
var result = reverseStringFunction(stringNew);
console.log(result);