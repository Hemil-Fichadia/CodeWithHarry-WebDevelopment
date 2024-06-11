// This is the method to import multiple functions to some other files 
// here constant mod itself is converted to a object that is module.exports. So any functionality can be accessed using it
// Here directly average function is called from mod.js as module.exports is returning the average function directly
// const average = require("./mod");
// console.log(average([3,4])); 
const mod = require("./mod"); 
console.log(mod.name);
console.log("This is index.js");
// In order to execute the files inside the directory in terminal, first the cursor of terminal needs to be called in the directory using command "cd name of directory" and then execute the file inside it.