let n1 = 11;
let n2 = 10;
let n3 = 1;
let maxNum = n1 > n2 && n1 > n3 ? console.log("n1 is greater")
           : n2 > n1 && n2 > n3 ? console.log("n2 is greater") 
           : n3 > n1 && n3 > n2 ? console.log("n3 is greater")
           : console.log("They are equal");