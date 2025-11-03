// Polyfill for Array.prototype.map
Array.prototype.myMap = function (cb, thisArg) {
  // Validating args
  if (!this) {
    throw new TypeError("Cannot read property 'myMap' of null or undefined");
  }

  if (typeof cb !== "function") {
    throw new TypeError(cb + " is not a function");
  }

  const actualArr = this;
  const arr = Object(actualArr); // 'this' to an object (covers array-like structures like NodeList or strings)
  const len = actualArr.length >>> 0; // ensures len is between 0 and 2^32 - 1

  let res = new Array(len); // Prepare an empty array to store the results

  for (let i = 0; i < len; i++) {
    // Skips any undefined: empty spaces array
    if (i in arr) {
      // used cb.call() as we might need to pass thisArg so the user is doing some action based on thisArg
      // we could hace used cb(actualArr[i], i, actualArr) directly if thisArg is not needed
      const resOfCbFunction = cb.call(thisArg, actualArr[i], i, actualArr);
      res[i] = resOfCbFunction;
    }
  }
  return res;
};

const arr = [1, 2, 4, 8];

const triped = arr.myMap((item) => item * 3);
console.log(triped);

// Example with thisArg
const factor = {
  multiply: 2,
};
const factorMultiplied = arr.myMap(function (item) {
  return item * this.multiply;
}, factor);
console.log(factorMultiplied);
