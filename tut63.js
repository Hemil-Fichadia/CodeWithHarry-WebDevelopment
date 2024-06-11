//The REPL is abbriviated as Read Evaluate Print Loop which is executed in the terminal after node is executed and the commands that are of javascript are executable.

// console.log("Hello world");

// This code is directly pasted from node js website from about section
//Here const http = require('http') is used to include http module 
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
//   here in res.setHeader if only text is to be printed so 'text/plain' is used and if a html file is to be executed so html is used instead of plain
  res.setHeader('Content-Type', 'text/html');
//   res.end('Hello World I am Hemil Ficahdia'); 
  res.end(`<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Pseudo slectors & more designinig</title>
      <style>
          .container{
              border:2px solid red;
              background-color:rgb(155, 228, 165);
              margin:34px auto;
              padding:34px;
              width:666px;
          }
          a{
              text-decoration:none; /*this tag removes underline from hyperlink*/
              color:black;
          }
          a:hover{
              color:black;
              background-color:crimson;
          }
          a:visited{
              background-color:purple;
          }
          a:active{
              color:rgb(35, 190, 48);
          }
          .btn{
              font-family:Arial, Helvetica, sans-serif;
              background-color:rgb(151, 231, 231);
              padding:6px;
              border:none;
              cursor:pointer;
              font-size:13px;
              border-radius:4px;
          }
          button:hover{
              color:blueviolet;
              background-color:gold;
          }
      </style>
  </head>
  <body>
      <div class="container" id="cont1">
          <h3>This is my heading</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero amet molestiae veniam saepe possimus laborum dolorem praesentium fugiat repellendus pariatur porro aspernatur officiis, itaque, cum earum, ullam sunt incidunt alias quibusdam voluptates dicta error!</p>
          <a href="https://google.com" class="btn">Read More</a>
          <button class="btn">Contact us</button>
  
      </div>
  </body>
  </html>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

// Here in terminal, the underscore "_" shows the previous value with or without variable 
// If a value is entered in node terminal and "_" is typed it will print that value 
// And using double tab in node terminal, we can get all the globally accessible functions 