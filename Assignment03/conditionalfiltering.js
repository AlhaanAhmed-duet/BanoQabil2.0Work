let objects = [{name: "Ash", age: 18}, 
{name: "Marsh", age: 20},
 {name: "Mitchell", age: 28}];

let findAge = objects.filter((info) => {
    if (info.age === 18) {
        return info.name + info.age;
    }
})

console.log(findAge);