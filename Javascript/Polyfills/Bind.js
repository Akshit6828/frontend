Function.prototype.myBind = function (context, ...args) {
  const functionToBeCalled = this;
  if (typeof functionToBeCalled !== "function") {
    throw new TypeError(this + " is not callable");
  }

  context.fn = functionToBeCalled; // create a temporary property on context which points to the function to be called
  // taking inner args as the args can also be provided later
  return function (...innerArgs) {
    const res = context.fn(...args, ...innerArgs); // call the function with provided outer args and inner args
    delete context.fn; // clean up the temporary property
    return res; // return the result of the function call
  };
};

const user = {
  name: "Akshit",
};

const user2 = {
  name: "Papa",
};

function printMsgFromUser(msg, age) {
  console.log(`${msg}, from  ${this.name} whose age = ${age}`);
  return "printed";
}

const greeting = printMsgFromUser.bind(user, "Hello"); // Some args are provided while binding the method
greeting(23); // while some args are provided later while calling the method

const farewell = printMsgFromUser.myBind(user2, "Goodbye"); // Some args are provided while binding the method
farewell(45); // while some args are provided later while calling the method
