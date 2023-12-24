let string = "Alhaan Ahmed";
var count = 0;
let newString = "";
var vowelFunction = function() {
    newString = string.toLowerCase();
    for (let i = 0; i < string.length; i++) {
        if (string[i] == 'a' || string[i] == 'e' || string[i] == 'o' || string[i] == 'i' || string[i] == 'u') {
            count++;

        }
        
    }
    return count;

}
console.log("Number of vowels used are: " + vowelFunction());
