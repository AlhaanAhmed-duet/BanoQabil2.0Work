let even = [2, 4, 6, 8, 10];

let reduce = even.reduce((accumaltor, current) => {
    return accumaltor + current;
}, 0)
console.log(reduce);