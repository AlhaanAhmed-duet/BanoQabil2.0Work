let obj = {
  name: "Alhaan",
  property: "$12000",
  age: 20
};

for (keys in obj) {
  console.log(keys, obj[keys]);
}