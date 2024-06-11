const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();
const port = 80;

// EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static')); // For serving static files
//This functionality urlencoded helps to read the encoded data coming from post request off the browser 
app.use(express.urlencoded()); 

// PUG SPECIFIC STUFF 
app.set('view engine', 'pug');  // Set the template engine as pug
app.set('views',path.join(__dirname,'views')); //Set the views directory 

//ENDPOINTS
app.get('/', (req,res)=>{
    //Here two constans are defined jsut to send constant text to the targeted place in the pug file which is index.pug
    const con = "This is the best content on the internet so far so use it wisely";
    const params = {'title':'PUG is the best template engine', "content": con};
    res.status(200).render('index.pug', params);
});

app.post('/', (req, res)=>{

    // The post request form the browser returns an object req.body which contains the given parameters that can be accessed
    name1 = req.body.name;
    age = req.body.age;
    gender = req.body.gender;
    address = req.body.address;
    more = req.body.more;

    let outputToWrite = `The name of the client is ${name1}, ${age} years old, ${gender}, residing at ${address}. More about him/her ${more}`
    
    fs.writeFileSync('output.txt', outputToWrite)
    const params = {'message':'Your form has been submitted successfully'}
    res.status(200).render('index.pug', params);
});


//START SERVER 
app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
});