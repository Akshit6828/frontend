// Analysis of common loops

/** We ignore constants in time complexity analysis because Big-O notation focuses on the growth rate of an algorithm as the input size 𝑛 increases. 
 * Constants become insignificant in asymptotic analysis
 * 
 **/

let n = 10; // Variable input size

// Loop 1: Basic: Time Complexity (TC) -> O(n)
for (let i = 1; i < n; i++) {
    console.log(i) // O(1) work
}

// Loop2: Basic: Time Complexity (TC) -> O(n)
for (let i = n; i > 0; i++) {
    console.log(i) // O(1) work
}

// Tricky Loops below:

let c = 2; // always a constant
// Loop 3:  TC -> ciel(n/c) --> ciel(n) * (1/c) --> O(n)
// Note: 2n, 4n, C*n all have complexities = O(n)
for (let i = 1; i < n; i = i + c) {
    console.log(i) // O(1) work
}

// Loop 4 : TC -> ciel(n/c) --> ciel(n) * (1/c) --> O(n)
for (let i = n; i > 0; i = i - c) {
    console.log(i) // O(1) work
}

// Loop 5: TC -> BigO(logn)
for (let i = 1; i < n; i = i * c) {
    console.log(i) // O(1) work
}

// Loop 6: TC -> BigO(logn)
for (let i = 1; i < n; i = i / c) {
    console.log(i) // O(1) work
}

// Loop 7:
for (let i = 2; i < n; i = Math.pow(i, c)) {
    console.log(i) // O(1) work
}

// Handling Multiple loops
function abc() { // TC: O(logn) + O(n) ===> O(n)
    for (let i = 1; i < n; i = i * c) { // Log(n)
        console.log(i)
    }

    for (let i = n; i > 0; i = i - c) { // O(n)
        console.log(i)
    }
}

function abc() { // TC: O(logn) * O(n) ===> O(nlogn)
    for (let i = 1; i < n; i = i * c) { // Log(n)
        for (let i = n; i > 0; i = i - c) { // O(n)
            console.log(i)
        }
    }
}