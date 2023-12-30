let salary = 45000000;
let taxAmount = 0;
function calculateTax(netIncome) {
  taxAmount =
    salary >= 600000 && salary < 12000000
      ? (salary * 2.5) / 100
      : salary >= 12000000 && salary < 24000000
      ? (salary * 12.5) / 100
      : salary >= 24000000 && salary < 60000000
      ? (salary * 22.5) / 100
      : salary >= 60000000 && salary < 120000000
      ? (salary * 27.5) / 100
      : 0;

  return taxAmount;
}
let taxAmt = calculateTax(salary);
let taxRate = (taxAmt / salary ) * 100;
console.log("Your salary", salary);
console.log("Your Tax Amount", taxAmt);
console.log("Tax Rate", taxRate);
let netSalary = salary - taxAmt;
console.log("Net Salary", netSalary);
