Function.prototype.myApply = function (context, argsArr) {
  const actuallFnToBeCalled = this;
  if (typeof actuallFnToBeCalled !== "function") {
    throw new TypeError(this + " is not callable");
  }

  if (
    Array.isArray(argsArr) === false &&
    argsArr !== undefined &&
    argsArr !== null
  ) {
    throw new TypeError("CreateListFromArrayLike called on non-object");
  }

  context.fn = actuallFnToBeCalled; // create a temporary property on context which points to the function to be called
  const result = argsArr ? context.fn(...argsArr) : context.fn(); // call the function with provided args
  delete context.fn; // clean up the temporary property
  return result; // return the result of the function call
};

function sum(a, b) {
  return a + b + this.extra;
}
const obj = {
  name: "MyObject",
  extra: 1,
};

let ans = sum.myApply(obj, [2, 3]);
console.log(ans); // 6
ans = sum.myApply(obj);
console.log(ans); // NaN
ans = sum.myApply(obj, null);
console.log(ans); // NaN
ans = sum.myApply(obj, undefined);
console.log(ans); // NaN
const ans2 = sum.myApply({ extra: 10 }, [5, 5]);
console.log(ans2); // 20
// Example with invalid args
try {
  sum.myApply(obj, "invalid arg");
} catch (e) {
  console.error(e.message);
}
// Example with non-function context
try {
  const notAFunction = {};
  notAFunction.myApply({}, []);
} catch (e) {
  console.error(e.message);
}
