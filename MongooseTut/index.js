/* Mongo DB is the data base and the mongo-d is the process which allows the client to connect the data base. in our case mongo shell is the client which gets connected to the mongod process*/
/*so using mongoose package we are establishing connection between node.js and mongod process*/

//Importing required mongoose package
const mongoose = require("mongoose");

//Main function with err call back 
main().catch((err) => console.log(err));

//Asynchronous function for establishing connection 
async function main() {
  await mongoose.connect("mongodb://localhost:27017/HemilKart");
  console.log("Connection established bro...");
}
//Defining kitty Schema:
//Schema is the layer of mongoose on the top of mongodb which is responsible for controlling the validation and the type of data being inserted is the same type as specified . Here it is only name with string data type. So we need to build a strict schema that what type of data is going to be inserted.
const kittySchema = new mongoose.Schema({
  name: String
});


//Functions added to the methods property of a schema get compiled into the Model prototype and exposed on each document instance. so this function is added before model compilation process as once the model has been compiled, the changes to be made are mostly impractical.
kittySchema.methods.speak = function speak() {
  const greeting = "My name is " + this.name;
  console.log(greeting);
};


//The above Schema is finalized and converted into a model which is basically a compiled schema.
const Kitten = mongoose.model("HemilKitty", kittySchema);


//After the model has been finalized, we are able to create objects which are going to be stored in mongo db as documents.
const HemilKitty = new Kitten({ name: "HemilKitty" });
// console.log(HemilKitty.name);
HemilKitty.speak();


const fluffy = new Kitten({ name: 'fluffy' });
fluffy.speak();

const HemilKitty2 = new Kitten({ name: "HemilKitty2" });
HemilKitty2.speak();


//await can only be used in async function

fluffy.save();
HemilKitty.save();
HemilKitty2.save();

// This code is being used from documentation but its not working as per description as it is returning the data in some diffrent form 
// const kittens = Kitten.find();
// console.log(kittens);

// Similarly this is also not working
// const objfind = Kitten.find({ name: "HemilKitty"});
// console.log(objfind)

// Now this two functions are taken from video lecture of code with harry directly so they are returning data in object form which is interpretable.

//This function returns all the objects in the collection
Kitten.find(function(err, kittens) {
  if (err) return console.error(err);
  console.log(kittens);
})


//This function returns all the objects that match the filter object in the collection
// Kitten.find({name: "HemilKitty"}, function(err, kittens) {
//   if (err) return console.error(err);
//   console.log(kittens);
// })

