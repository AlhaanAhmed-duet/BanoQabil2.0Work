let array = [1, 2, 3, 4, 5];
//  User be like: I want this array to be in even number array, What should I do.
//  Computer: I don't know
// User: Maybe if we multiply it by 2
// Computer: possible but i know only map() method receives callback function
// User: Bingo! I know exactly what to do
// I will just do what I mean

function evenNums(array) {
    return array * 2;
}
let modifiedByUser = array.map(evenNums);

console.log(modifiedByUser);