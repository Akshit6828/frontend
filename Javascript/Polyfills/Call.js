Function.prototype.myCall = function (context, ...args) {
  const actuallFnToBeCalled = this;
  if (typeof actuallFnToBeCalled !== "function") {
    throw new TypeError(this + " is not callable");
  }

  context.fn = actuallFnToBeCalled; // create a temporary property on context which points to the function to be called
  const result = context.fn(...args); // call the function with provided args
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

let ans = sum.myCall(obj, 2, 3); // 5
console.log(ans);
