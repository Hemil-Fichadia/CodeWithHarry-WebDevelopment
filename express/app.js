
// express package is imported first 
const express = require("express");
// Path module is used in order to give path to views directory.
const path = require("path")
// app is initialised by express module 
const app = express();
// port 80 is a default localhost port while running a program on it no need to provide port number with it but if the port is except for 80 like 1000 so it is needed to be specified like localhost:1000
const port = 80;


// For serving static files using express.
// Static files are files which we make available publically so that any user can access it without logging in and without reaching website just by requesting through link.
// Here app.use takes a url pattern and a folder name as arguments. So '/static' is url and express.static(folder name). The name of folder is  static.
// In order to directly open window in desired folder first we need to enter that folder in terminal using "cd" command and then firing command "code ." in that path in terminal so it will directly open new window of that specific folder. So if we need to serve any static file, we will save it into static folder and access it on our template which is views here.
app.use('/static', express.static('static'));


// After starting nodemon server in terminal, write localhost/static/index.js in browser so it will seve index.js file as our sever is running at port 80 which is default port of localhot server.we can get javascript using right click and view page source so it will be only in view form it won't get execute.


// In custom backend tutorial we created a custom backend in which we served static html files by reading and storing them to variables and accessing them according to url requested but that method is maintainable upto certain levels after it makes it more tedious and unoptimizable.
// So Template engine povides maintainability and optimization to code as it process templates or the file that is to be displayed to user and it takes  information as feed and generates a template according to it.
// The template engine that we are going to use for node.Js is pug. Install it using command "npm install pug" and it will show in package.JSON dependencies.
// set the template engine as pug and express will take care of the rest.
app.set('view engine','pug');


// Set the views directory to save pug files in views folder which is a template folder basically.
app.set('views',path.join(__dirname,'views'));



// Our pug demo endpoint.
// We have created a demo.pug file in which we have set commands to take tile and message as inputs and render it when it is required by res.render.
// Here it created a html file and served it on its own by just taking some input commands in demo.pug file and what information to render by giving pug file name in argument which is demo.pug here. 
app.get("/demo", (_req,res)=>{
    res.status(201).render('demo', { title: 'Hey Harry', message: 'Hello there and thanks for telling me how to use pug!' });    
});

// After starting server type url in browser of localhost/demo so it will print the message and right click on that page to view page source which will show the proper html file created by pug.

// The app.get takes a url pattern ("/") and a call back function with "req" and "res" argument.
// Here app.get gives response according to the url pattern requested like here "/" is default url pattern which is requested by default when localhost server is started.
// So it responds according to the url pattern request is fired if get or post corresponding to it gives response. The status code is repesented in postman software and it is written by status(200) any value can be given to it
app.get("/", (_req,res)=>{
    res.status(200).send("This is Home page of my first express app with Harry");
});

app.get("/about", (_req, res)=>{
    res.send("This is get request of about page of my first express app with Harry");
});

app.post("/about", (_req,res)=>{
    res.send("This is post request of my about page of my first express app with Harry");
});

app.get("/this", (_req,res)=>{
    res.status(404).send("404 this page is not found");
});

// In order to run program it need some litening port so app.listen takes port number and a call back as argument 
app.listen(port, ()=>{
    console.log(`The application started successfully at port ${port}`);
});

// nodemon can be restarted using command rs 

