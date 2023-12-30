let multiply = (multiplier) => {
  let result = multiplier * 5;

  function resultOfMultiplier() {
    return result;
  }

  return resultOfMultiplier; // Return the function, not the result
};

var product = multiply(5); // Pass the multiplier when calling multiply
console.log(product()); // Call the returned function to obtain the result