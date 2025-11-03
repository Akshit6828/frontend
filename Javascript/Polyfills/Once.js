// 🧠 'once' is a function that makes sure the given function (fn)
// can only run ONE TIME — after that, it just gives the same result again.
function once(fn, context) {
  let called = false; // 'called' will remember if the function was already called or not

  let result; // 'result' will store whatever value the function returned the first time

  //  Return a new function that wraps the original one
  return function (...args) {
    //  If the function hasn't been called yet...
    if (!called) {
      called = true; //  Mark it as called now

      //  Call the original function (fn)
      // 'apply' helps to call it with a specific 'this' (context)
      // and pass all the arguments (args) to it
      result = fn.apply(context || this, args);
    }

    // 💭 Always return the stored result (same every time after first call)
    return result;
  };
}

// ===============================
// Example 1️⃣: Basic usage
// ===============================

// 🏗️ A function we only want to run once
function initialize() {
  console.log("Initialized!");
  return 42;
}

// 🪄 'initializeOnce' is a new version of 'initialize' that can only run once
const initializeOnce = once(initialize);

// First call — it runs the function
console.log(initializeOnce()); // Prints "Initialized!" and returns 42

// Second call — function won’t run again, but returns old result
console.log(initializeOnce()); // Returns 42 (no "Initialized!" printed)

// Third call — same thing again
console.log(initializeOnce()); // Returns 42 again

// ===============================
// Example 2️⃣: With 'this' context
// ===============================

const obj = {
  value: 100,
  getValue: function () {
    return this.value;
  },
};

// 🧠 Pass both the function AND the object as 'context'
// So that inside getValue, 'this' will point to 'obj'
const getValueOnce = once(obj.getValue, obj);

// First call — calls the real function and stores 100
console.log(getValueOnce()); // 100

// Next calls — skip the function, just return stored 100
console.log(getValueOnce()); // 100
