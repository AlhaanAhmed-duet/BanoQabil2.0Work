let prices = [25, 35, 65, 95, 115];

let sortedPrices = prices.sort((a, b) => {
    return b - a;
})

console.log(sortedPrices);