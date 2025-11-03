function longCalculation() {
  console.log("Performing long calculation...");
  // Simulate a long calculation
  let ans = Math.random() * 20;
  for (let i = 0; i < 1e9; i++) {
    ans = ans + i;
  }
  return ans;
}

console.time("First call");
console.log("Result:", longCalculation()); // Takes time
console.timeEnd("First call");
