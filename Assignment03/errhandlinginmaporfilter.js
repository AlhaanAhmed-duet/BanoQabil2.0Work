let arr = [2, 4, 5, 7, 8];
let findElem;

try {
    findElem = arr.find((element) => {
        return element < 2;
    });

    if (findElem === undefined) {
        throw new Error("Error: undefined");
    }
    else {
        console.log(findElem);
    }
} catch (error) {
    console.error(error.message);
}

