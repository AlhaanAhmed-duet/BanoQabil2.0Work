let obj = {
  name: "Computer",
  type: "Android Device"
}; 
let anotherObj = {... obj}; // Shallow Copy
anotherObj.type = "Linux Desktop"
console.log(obj.name + " " + obj.type);
console.log(anotherObj.name + " " + anotherObj.type);
//  above example of shallow copy of an object

