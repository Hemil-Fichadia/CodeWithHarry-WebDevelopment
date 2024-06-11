//Importing file system module fs in order to read a file.
const fs = require("fs");
//Using function readFileSync of fs module to read content of the file synchronously.
let text = fs.readFileSync("read.txt", "utf-8"); 
console.log(text);

//Replacing the the content of the file and writing it into another file named Hemil.txt
text = text.replace("Browser", "Hemil"); 

console.log("The content of the file is"); 
console.log(text); 

console.log("Creating a new file....."); 
fs.writeFileSync("Hemil.txt", text);
