show dbs 
use HemilKart
show collections

db.items.find({price: 38000})

//Deleting items from mongo db
//This query deletes the first matched document object with price 38000
db.items.deleteOne({price: 38000})

//This query deletes all the document objects with price 129000
db.items.deleteMany({price: 129000})