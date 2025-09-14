// Implement a MinStack which follows following operations:
// push(x) -- Push element x onto stack.
// pop() -- Removes the element on top of the stack.
// top() -- Get the top element.
// getMin() -- Retrieve the minimum element in the stack.

// All operations (push, pop, top, getMin) should be O(1).

class MinStack {
  constructor() {
    this.stack = [];
  }

  // push(x) in O(1)
  push(x) {
    const min = this.stack.length ? this.stack[this.stack.length - 1][1] : null;
    if (min > x || min === null) {
      this.stack.push([x, x]);
    } else {
      this.stack.push([x, min]);
    }
  }
  // pop() in O(1)
  pop() {
    if (this.stack.length) {
      this.stack.pop();
    }
  }
  // top() in O(1)
  top() {
    if (this.stack.length) {
      return this.stack[this.stack.length - 1][0];
    }
  }
  // getMin() in O(1)
  getMin() {
    if (this.stack.length) {
      return this.stack[this.stack.length - 1][1];
    }
  }
}

const minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
console.log(minStack.getMin()); // return -3
minStack.pop();
console.log(minStack.top()); // return 0
console.log(minStack.getMin()); // return -2
