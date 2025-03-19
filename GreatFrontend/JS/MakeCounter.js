// Topics Covered: Function, Closure
/**
 * Problem:
 * Implement a function makeCounter that accepts an optional integer value and returns a function. 
 * When the returned function is called initially, it returns the initial value if provided, otherwise 0. 
 * The returned function can be called repeatedly to return 1 more than the return value of the previous invocation.
 */
export default function makeCounter(initialValue = 0) {
    let count = initialValue;
    return function () {
        return count++;
    };
}

/** Explanation:
 * This code defines a function called makeCounter, 
 * which creates and returns another function (a "closure"). 
 * This returned function, when called, acts as a counter that increases its value every time it runs.
 */

let counter = makeCounter()
console.log(counter()) // 0
console.log(counter()); // 1


let counter2 = makeCounter(3)
console.log(counter2()) // 3
console.log(counter2()); // 4

// Typescipr