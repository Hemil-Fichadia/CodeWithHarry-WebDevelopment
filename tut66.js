// Creating a server and serving a html file 
// importing required modules 
const http = require('http');
const fs = require('fs');
// Synchronous method is used for reading of file as call backs are not expected in this program
const fileContent = fs.readFileSync('tut61.html');

// Creating server which takes two call back values request(req) and respond(res).
const server = http.createServer((req, res)=>{

    // here writeHead function specifies the content type 
    res.writeHead(200, {'Content-type':'text/html'});

    // res.end displays the content of file
    res.end(fileContent);
});
// if any otherport is used except for 80, it has to be mentioned in 127.0.0.1:8000 for explicitly. here port 8000 is taken as example
// Here server.listen takes port number on which to run the file, Local host or server address and a call back.
server.listen(80, '127.0.0.1', ()=>{
    console.log("Listening on port 80"); 
});