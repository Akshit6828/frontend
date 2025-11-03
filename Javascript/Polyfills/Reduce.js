// Polyfill for Array.prototype.reduce
Array.prototype.myReduce = function (cb, initialValue) {
  // Validating args

  if (!this) {
    throw new TypeError("Cannot read property 'myMap' of null or undefined");
  }

  if (typeof cb !== "function") {
    throw new TypeError(cb + " is not a function");
  }

  // Extra check for empty array with no initialValue
  if (this.length === 0 && initialValue === undefined) {
    throw new TypeError("Reduce of empty array with no initial value");
  }

  const actualArr = this;
  const arr = Object(actualArr);
  const len = actualArr.length >>> 0; // ensures len is between 0 and 2^32 - 1

  let accumulator = initialValue ? initialValue : arr[0]; // if initialValue is provided we use it otherwise we use arr[0] as accumulator
  const startIndex = initialValue ? 0 : 1; // if accumulator is not there ,then we make it as arr[0] and start from index 1

  for (let i = startIndex; i < len; i++) {
    if (i in arr) {
      accumulator = cb(accumulator, actualArr[i], i, actualArr);
    }
  }

  return accumulator;
};

const arr = [1, 2, 4, 8];

console.log(arr.myReduce((acc, item) => acc + item, 0)); // 15
console.log(arr.myReduce((acc, item) => acc + item)); // 15

// Example with empty array and initialValue
const emptyArr = [];
console.log(emptyArr.myReduce((acc, item) => acc + item, 10)); // 10

// Example with empty array and no initialValue
try {
  console.log(emptyArr.myReduce((acc, item) => acc + item)); // Error
} catch (e) {
  console.error(e.message);
}
 