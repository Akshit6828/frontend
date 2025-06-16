// Async await
async function myAsyncFunc() {
    console.log("A")
    await Promise.resolve(setTimeout(() => { }, [1000]))
    console.log("B");
}

console.log("C")
myAsyncFunc();
console.log("D");

// Prototyping
["A", "B", "C"].map((item) => console.log(item));
const obj = {
    key: "Akshit"
};
obj.map((item) => console.log(item))

// Hoisting
var x = 10;
function abc() {
    console.log(x);
    var x = 10;
};

abc();

// Promises
async function ABC() {
    return 5;
}

var ans = ABC();
console.log(ans)
//  What to if we want 5.

