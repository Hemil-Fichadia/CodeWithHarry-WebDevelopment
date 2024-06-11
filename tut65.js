//Node js is based on non-blocking IO model means it  will fire all the require call backs till a code is being executed.

// Synchronous or blocking
// - line by line execution

// Asynchronous or non-blocking
// - line by line execution is not guranteed
// - callbacks will fire

const fs = require("fs");
// Here readFile function takes one path one option and a call back which consists of err and data in the arrow function. so if the error is there it shown in err variable and if not it shows null and content is displayed in data variable. so using this callback we can implement asynchronous behaviour.
// so due to this the program continues to execute till the file is been read.
// so this is a message will print first
fs.readFile("Hemil.txt", "utf-8", (err, data) => {
  console.log(err, data);
});
console.log("This is a message");
