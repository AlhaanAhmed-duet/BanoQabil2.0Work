let user = {
    name: "John",
    age: 20,
    email: "john@hotmail.com",
    gender: "Male",
};
let property;
for (property in user) {
    console.log(property + " :" + user[property]);
}