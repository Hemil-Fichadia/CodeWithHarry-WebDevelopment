show dbs 
use HemilKart
show collections

//Insert new collection 
//Here anotherCollection is name of the collection that is being inserted
db.anotherCollection.insertOne({a: 89})

//Updating values in document
db.items.updateOne({name: "iPhone 13 pro"}, {$set: {price: 2}})
//It only takes single filter object and applies changes to all the objects that are matched
db.items.updateMany({name: "Samsung S20 FE"}, {$set:{price: 20000, rating: 2}})   
//This query updates all the n-matching objects
db.items.update({name: "Samsung Z Fold"}, {$set:{price: 25000, rating: 2}})   
db.items.update({price: 20000}, {$set:{price: 0, rating: 0}})   